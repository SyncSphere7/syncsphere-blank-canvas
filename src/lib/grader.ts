import 'server-only';
import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';
import { parse } from 'node-html-parser';

export type Finding = { severity: 'critical' | 'warning' | 'info'; message: string };
export type GradeResult = { url: string; score: number; issues: Finding[]; strengths: string[]; loadMs: number };

const MAX_BYTES = 2_000_000;
const TIMEOUT_MS = 10_000;

/** Block requests to private, loopback and link-local addresses (SSRF protection). */
function isPrivateIp(ip: string) {
  if (isIP(ip) === 4) {
    const [a, b] = ip.split('.').map(Number);
    return a === 10 || a === 127 || a === 0 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) || a >= 224;
  }
  const v = ip.toLowerCase();
  if (v.startsWith('::ffff:')) return isPrivateIp(v.slice(7));
  return v === '::1' || v === '::' || v.startsWith('fc') || v.startsWith('fd') || v.startsWith('fe80');
}

async function assertPublicUrl(u: URL) {
  if (u.protocol !== 'http:' && u.protocol !== 'https:') throw new Error('Only http and https addresses can be checked.');
  if (u.port && !['80', '443'].includes(u.port)) throw new Error('That address cannot be checked.');
  const host = u.hostname.replace(/^\[|\]$/g, '');
  const addrs = isIP(host) ? [{ address: host }] : await lookup(host, { all: true }).catch(() => []);
  if (addrs.length === 0) throw new Error('We could not find that website. Check the address and try again.');
  if (addrs.some((a) => isPrivateIp(a.address))) throw new Error('That address cannot be checked.');
}

async function fetchPage(start: URL) {
  let url = start;
  for (let hop = 0; hop < 4; hop++) {
    await assertPublicUrl(url);
    const res = await fetch(url, {
      redirect: 'manual',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { 'User-Agent': 'SyncSphereWebsiteGrader/1.0 (+https://www.syncspherellc.com/tools/website-grader)', Accept: 'text/html' },
      cache: 'no-store',
    });
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      url = new URL(res.headers.get('location') as string, url);
      continue;
    }
    if (!res.ok) throw new Error(`The website responded with an error (${res.status}).`);
    const reader = res.body?.getReader();
    if (!reader) throw new Error('The website returned no content.');
    const chunks: Uint8Array[] = [];
    let size = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) {
        await reader.cancel();
        break;
      }
      chunks.push(value);
    }
    return { finalUrl: url, html: Buffer.concat(chunks).toString('utf8') };
  }
  throw new Error('The website redirected too many times.');
}

export async function gradeWebsite(input: string): Promise<GradeResult> {
  let raw = input.trim();
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error('Please enter a valid website address.');
  }

  const started = Date.now();
  const { finalUrl, html } = await fetchPage(url);
  const loadMs = Date.now() - started;
  const doc = parse(html);

  const issues: Finding[] = [];
  const strengths: string[] = [];

  if (finalUrl.protocol === 'https:') strengths.push('Secure connection (HTTPS)');
  else issues.push({ severity: 'critical', message: 'No HTTPS. Browsers mark the site "Not secure" and Google ranks it lower.' });

  const title = doc.querySelector('title')?.text.trim() ?? '';
  if (!title) issues.push({ severity: 'critical', message: 'Missing page title. It is what shows in Google results and browser tabs.' });
  else if (title.length < 20 || title.length > 70) issues.push({ severity: 'warning', message: `Page title is ${title.length} characters. Aim for 30–60.` });
  else strengths.push('Page title is a good length');

  const desc = doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() ?? '';
  if (!desc) issues.push({ severity: 'critical', message: 'Missing meta description — Google will guess what to show under your link.' });
  else if (desc.length < 70 || desc.length > 170) issues.push({ severity: 'warning', message: `Meta description is ${desc.length} characters. Aim for 120–160.` });
  else strengths.push('Meta description is a good length');

  const h1s = doc.querySelectorAll('h1').length;
  if (h1s === 0) issues.push({ severity: 'critical', message: 'No main heading (H1). Search engines use it to understand the page.' });
  else if (h1s > 1) issues.push({ severity: 'info', message: `${h1s} main headings (H1) found. One is clearer.` });
  else strengths.push('One clear main heading');

  if (doc.querySelector('meta[name="viewport"]')) strengths.push('Set up for mobile screens');
  else issues.push({ severity: 'critical', message: 'Not set up for mobile. The site will look tiny and broken on phones.' });

  if (doc.querySelector('meta[property="og:title"]') || doc.querySelector('meta[property="og:image"]')) strengths.push('Link previews set up for WhatsApp and Facebook');
  else issues.push({ severity: 'warning', message: 'No link preview tags. Your link looks plain when shared on WhatsApp or Facebook.' });

  const imgs = doc.querySelectorAll('img');
  const noAlt = imgs.filter((i) => !i.getAttribute('alt')).length;
  if (imgs.length && noAlt) issues.push({ severity: 'warning', message: `${noAlt} of ${imgs.length} images have no description (alt text).` });
  else if (imgs.length) strengths.push('All images have descriptions');

  const words = doc.querySelector('body')?.text.split(/\s+/).filter((w) => w.length > 2).length ?? 0;
  if (words < 120) issues.push({ severity: 'warning', message: 'Very little text on the page. It may be built so search engines cannot read it, or it needs more content.' });
  else strengths.push('Enough readable text for search engines');

  const lower = html.toLowerCase();
  if (lower.includes('wa.me/') || lower.includes('api.whatsapp.com')) strengths.push('WhatsApp contact link found');
  else issues.push({ severity: 'info', message: 'No WhatsApp link found. Many customers prefer to message rather than call.' });

  if (lower.includes('tel:')) strengths.push('Click-to-call phone number');
  else issues.push({ severity: 'info', message: 'No click-to-call phone link.' });

  if (loadMs > 4000) issues.push({ severity: 'warning', message: `The page took ${(loadMs / 1000).toFixed(1)}s to download. Slow sites lose visitors, especially on mobile data.` });
  else strengths.push(`Page downloaded in ${(loadMs / 1000).toFixed(1)}s`);

  const penalty = { critical: 15, warning: 8, info: 3 } as const;
  const score = Math.max(0, 100 - issues.reduce((sum, i) => sum + penalty[i.severity], 0));

  return { url: finalUrl.toString(), score, issues, strengths, loadMs };
}

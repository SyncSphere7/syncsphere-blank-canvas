import { Resend } from 'resend';
import { site } from './site';

export function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/** Trim, cap length and strip control characters from a form value. */
export function clean(value: unknown, max = 2000) {
  return String(value ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max);
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 320;
}

let client: Resend | null = null;
function resend() {
  if (!process.env.RESEND_API_KEY) return null;
  client ??= new Resend(process.env.RESEND_API_KEY);
  return client;
}

export async function sendEmail(opts: { to: string; subject: string; html: string; replyTo?: string; from?: string }) {
  const r = resend();
  if (!r) throw new Error('Email is not configured (RESEND_API_KEY missing).');
  const { error } = await r.emails.send({
    from: opts.from ?? `${site.legalName} <${site.email}>`,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
    ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
  });
  if (error) throw new Error(error.message);
}

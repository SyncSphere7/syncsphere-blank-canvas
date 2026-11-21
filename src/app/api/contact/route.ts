import { NextResponse } from 'next/server';
import { clean, escapeHtml, isEmail, sendEmail } from '@/lib/email';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

const recipients: Record<string, string> = {
  contact: site.email,
  sales: site.salesEmail,
  'website-grader': site.email,
};

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Spam bots fill in the hidden field; pretend success and drop it.
  if (clean(body.website)) return NextResponse.json({ success: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 320);
  const message = clean(body.message, 2000);
  if (!name || !message || !isEmail(email)) {
    return NextResponse.json({ error: 'Please fill in your name, a valid email and a message.' }, { status: 400 });
  }

  const formType = clean(body.formType, 32) || 'contact';
  const to = recipients[formType] ?? site.email;
  const fields: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Phone / WhatsApp', clean(body.phone, 40)],
    ['Business', clean(body.company, 160)],
    ['Service', clean(body.service, 120)],
    ['Location', clean(body.market, 60)],
  ];

  const html = `
    <h2>New ${escapeHtml(formType)} enquiry from syncspherellc.com</h2>
    ${fields.filter(([, v]) => v).map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join('')}
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  try {
    await sendEmail({ to, subject: `New ${formType} enquiry from ${name}`, html, replyTo: email });
    await sendEmail({
      to: email,
      subject: 'We received your message — SyncSphere',
      html: `
        <p>Hello,</p>
        <p>Thank you for contacting SyncSphere. We have received your message and will reply within one working day.</p>
        <p>For anything urgent, message us on WhatsApp: <a href="https://wa.me/${site.whatsapp}">${site.phone}</a>.</p>
        <p>— The SyncSphere team</p>
        <hr><p style="font-size:12px;color:#64748b">${site.legalName} · ${site.kampalaAddress}</p>
      `,
    });
  } catch (err) {
    console.error('contact: email failed', err);
    return NextResponse.json({ error: 'We could not send your message right now.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}

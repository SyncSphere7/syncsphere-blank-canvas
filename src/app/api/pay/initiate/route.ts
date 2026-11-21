import { NextResponse } from 'next/server';
import { clean, isEmail } from '@/lib/email';
import { createCheckout, currencies, paymentsEnabled, type Currency } from '@/lib/payments';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  if (!paymentsEnabled()) {
    return NextResponse.json({ error: 'Online payments are not available yet. Please contact us to pay.' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 320);
  const phone = clean(body.phone, 40);
  const reference = clean(body.reference, 80);
  const currency = clean(body.currency, 3).toUpperCase();
  if (!(currency in currencies)) return NextResponse.json({ error: 'Choose UGX or USD.' }, { status: 400 });
  const cur = currency as Currency;

  const raw = Number(String(body.amount ?? '').replace(/[,\s]/g, ''));
  const amount = cur === 'UGX' ? Math.round(raw) : Math.round(raw * 100) / 100;
  const { min, max } = currencies[cur];

  if (!name || !isEmail(email) || !reference) {
    return NextResponse.json({ error: 'Please enter your name, a valid email and your invoice or quote number.' }, { status: 400 });
  }
  if (!Number.isFinite(amount) || amount < min || amount > max) {
    return NextResponse.json({ error: `Enter an amount between ${cur} ${min.toLocaleString()} and ${cur} ${max.toLocaleString()}.` }, { status: 400 });
  }

  const origin = new URL(req.url).origin;
  try {
    const { link } = await createCheckout({
      amount,
      currency: cur,
      name,
      email,
      phone,
      reference,
      redirectUrl: `${origin}/pay/complete`,
      logoUrl: `${site.url}/syncsphere-logo.png`,
    });
    return NextResponse.json({ link });
  } catch (err) {
    console.error('pay/initiate failed', err);
    return NextResponse.json({ error: 'We could not start the payment. Please try again or contact us.' }, { status: 502 });
  }
}

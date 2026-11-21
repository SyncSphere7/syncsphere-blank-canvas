import { timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';
import { escapeHtml, sendEmail } from '@/lib/email';
import { formatMoney, paymentsEnabled, verifyTransaction } from '@/lib/payments';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

function hashMatches(received: string | null) {
  const expected = process.env.FLW_WEBHOOK_HASH;
  if (!expected || !received) return false;
  const a = Buffer.from(received);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/**
 * Flutterwave calls this when a payment completes. We never trust the body:
 * the transaction is re-checked with Flutterwave before anyone is notified.
 */
export async function POST(req: Request) {
  if (!paymentsEnabled() || !hashMatches(req.headers.get('verif-hash'))) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as { event?: string; data?: { id?: number } } | null;
  const id = body?.data?.id;
  if (!id) return NextResponse.json({ ok: true });

  const tx = await verifyTransaction(id);
  if (!tx) return NextResponse.json({ ok: false }, { status: 502 });

  const rows: [string, string][] = [
    ['Result', tx.ok ? 'Verified successful payment' : `NOT verified (status: ${tx.status})`],
    ['Amount', formatMoney(tx.amount, tx.currency)],
    ['Invoice / quote', tx.reference],
    ['Customer', `${tx.customerName} <${tx.customerEmail}>`],
    ['Method', tx.paymentType],
    ['Flutterwave ID', String(tx.id)],
    ['Flutterwave ref', tx.flwRef],
    ['Our ref', tx.txRef],
  ];

  try {
    await sendEmail({
      to: site.financeEmail,
      subject: `${tx.ok ? 'Payment received' : 'Payment needs checking'}: ${formatMoney(tx.amount, tx.currency)} — ${tx.reference}`,
      html: `<h2>Flutterwave payment</h2>${rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join('')}`,
    });
  } catch (err) {
    console.error('pay/webhook: email failed', err);
  }

  return NextResponse.json({ ok: true });
}

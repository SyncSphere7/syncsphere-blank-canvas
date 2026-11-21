import 'server-only';
import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

/**
 * Flutterwave Standard checkout.
 *
 * The amount and currency are signed into tx_ref, so when Flutterwave sends
 * the customer back (or calls our webhook) we can check that what was paid
 * matches what we asked for, without keeping a database.
 */

const FLW_API = 'https://api.flutterwave.com/v3';

export const currencies = {
  UGX: { min: 10_000, max: 50_000_000, options: 'mobilemoneyuganda,card' },
  USD: { min: 5, max: 50_000, options: 'card' },
} as const;
export type Currency = keyof typeof currencies;

export function paymentsEnabled() {
  return Boolean(process.env.FLW_SECRET_KEY && process.env.PAYMENT_SIGNING_SECRET);
}

function sign(payload: string) {
  return createHmac('sha256', process.env.PAYMENT_SIGNING_SECRET as string).update(payload).digest('hex').slice(0, 20);
}

export function makeTxRef(amount: number, currency: Currency) {
  const base = `SS${Date.now().toString(36)}${randomBytes(4).toString('hex')}`.toUpperCase();
  return `${base}-${amount}-${currency}-${sign(`${base}|${amount}|${currency}`)}`;
}

export function readTxRef(txRef: string): { amount: number; currency: Currency } | null {
  const parts = txRef.split('-');
  if (parts.length !== 4) return null;
  const [base, amountStr, currency, sig] = parts;
  if (!(currency in currencies)) return null;
  const expected = sign(`${base}|${amountStr}|${currency}`);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  const amount = Number(amountStr);
  if (!Number.isFinite(amount)) return null;
  return { amount, currency: currency as Currency };
}

export async function createCheckout(input: {
  amount: number;
  currency: Currency;
  name: string;
  email: string;
  phone: string;
  reference: string;
  redirectUrl: string;
  logoUrl: string;
}) {
  const txRef = makeTxRef(input.amount, input.currency);
  const res = await fetch(`${FLW_API}/payments`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tx_ref: txRef,
      amount: input.amount,
      currency: input.currency,
      redirect_url: input.redirectUrl,
      payment_options: currencies[input.currency].options,
      customer: { email: input.email, name: input.name, phonenumber: input.phone },
      customizations: {
        title: 'SyncSphere LLC',
        description: `Payment for ${input.reference}`.slice(0, 100),
        logo: input.logoUrl,
      },
      meta: { reference: input.reference },
    }),
    cache: 'no-store',
  });
  const json = (await res.json().catch(() => null)) as { status?: string; message?: string; data?: { link?: string } } | null;
  if (!res.ok || json?.status !== 'success' || !json.data?.link) {
    throw new Error(json?.message || `Flutterwave returned ${res.status}`);
  }
  return { link: json.data.link, txRef };
}

export type VerifiedPayment = {
  ok: boolean;
  status: string;
  amount: number;
  currency: string;
  txRef: string;
  reference: string;
  customerName: string;
  customerEmail: string;
  paymentType: string;
  flwRef: string;
  id: number;
};

/** Ask Flutterwave for the real state of a transaction and check it against tx_ref. */
export async function verifyTransaction(id: string | number): Promise<VerifiedPayment | null> {
  if (!/^\d{1,20}$/.test(String(id))) return null;
  const res = await fetch(`${FLW_API}/transactions/${id}/verify`, {
    headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` },
    cache: 'no-store',
  });
  const json = (await res.json().catch(() => null)) as { status?: string; data?: Record<string, any> } | null;
  const d = json?.data;
  if (!res.ok || json?.status !== 'success' || !d) return null;

  const expected = readTxRef(String(d.tx_ref ?? ''));
  const ok =
    d.status === 'successful' &&
    expected !== null &&
    d.currency === expected.currency &&
    Number(d.amount) >= expected.amount;

  return {
    ok,
    status: String(d.status ?? 'unknown'),
    amount: Number(d.amount),
    currency: String(d.currency ?? ''),
    txRef: String(d.tx_ref ?? ''),
    reference: String(d.meta?.reference ?? ''),
    customerName: String(d.customer?.name ?? ''),
    customerEmail: String(d.customer?.email ?? ''),
    paymentType: String(d.payment_type ?? ''),
    flwRef: String(d.flw_ref ?? ''),
    id: Number(d.id),
  };
}

export function formatMoney(amount: number, currency: string) {
  return `${currency} ${amount.toLocaleString('en-US', { maximumFractionDigits: currency === 'UGX' ? 0 : 2 })}`;
}

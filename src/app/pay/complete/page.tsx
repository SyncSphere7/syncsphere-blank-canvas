import Link from 'next/link';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import { pageMeta } from '@/lib/meta';
import { formatMoney, paymentsEnabled, verifyTransaction } from '@/lib/payments';
import { whatsappLink } from '@/lib/site';

export const dynamic = 'force-dynamic';

export const metadata = pageMeta('/pay/complete', 'Payment status', 'Payment status.', { noindex: true });

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function PayCompletePage({ searchParams }: Props) {
  const sp = await searchParams;
  const status = typeof sp.status === 'string' ? sp.status : '';
  const id = typeof sp.transaction_id === 'string' ? sp.transaction_id : '';

  let state: 'success' | 'pending' | 'failed' | 'cancelled' = 'failed';
  let detail = '';

  if (status === 'cancelled') {
    state = 'cancelled';
  } else if (paymentsEnabled() && id) {
    const tx = await verifyTransaction(id).catch(() => null);
    if (tx?.ok) {
      state = 'success';
      detail = `${formatMoney(tx.amount, tx.currency)} for ${tx.reference}`;
    } else if (tx && (tx.status === 'pending' || tx.status === 'processing')) {
      state = 'pending';
    }
  }

  const view = {
    success: { Icon: CheckCircle2, color: 'text-whatsapp', title: 'Payment received — thank you!', text: `We have received ${detail}. A receipt has been sent to your email, and our team has been notified.` },
    pending: { Icon: Clock, color: 'text-sun', title: 'Your payment is being processed', text: 'Mobile Money payments can take a few minutes to confirm. You will receive an email receipt once it goes through.' },
    cancelled: { Icon: XCircle, color: 'text-ink-muted', title: 'Payment cancelled', text: 'No money was taken. You can try again whenever you are ready.' },
    failed: { Icon: XCircle, color: 'text-red-600', title: 'We could not confirm your payment', text: 'If money left your account, do not pay again — message us with your invoice number and we will check it for you.' },
  }[state];

  return (
    <section className="section">
      <div className="container max-w-xl text-center">
        <view.Icon className={`mx-auto h-12 w-12 ${view.color}`} aria-hidden="true" />
        <h1 className="mt-4 text-3xl font-extrabold">{view.title}</h1>
        <p className="mt-4 text-ink-soft">{view.text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {state === 'success' ? (
            <Link href="/" className="btn-primary">Back to the homepage</Link>
          ) : (
            <Link href="/pay" className="btn-primary">Try again</Link>
          )}
          <a href={whatsappLink('Hello SyncSphere, I have a question about my payment.')} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Message us
          </a>
        </div>
      </div>
    </section>
  );
}

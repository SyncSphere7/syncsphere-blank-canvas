import Link from 'next/link';
import { PayForm } from '@/components/PayForm';
import { PageHero } from '@/components/ui';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { pageMeta } from '@/lib/meta';
import { paymentsEnabled } from '@/lib/payments';
import { whatsappLink } from '@/lib/site';

export const dynamic = 'force-dynamic';

export const metadata = pageMeta('/pay', 'Pay an Invoice', 'Pay a SyncSphere invoice or deposit securely with Mobile Money or card.', { noindex: true });

export default function PayPage() {
  const enabled = paymentsEnabled();
  return (
    <>
      <PageHero
        eyebrow="Payments"
        title="Pay an invoice or deposit"
        intro="Use the amount and invoice number from the quote or invoice we sent you. Payments are processed securely by Flutterwave."
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {enabled ? (
            <PayForm />
          ) : (
            <div className="card">
              <h2 className="text-xl font-bold">Online payment is coming soon</h2>
              <p className="mt-3 text-ink-soft">
                We are finishing the setup of our online payments. In the meantime, message us and we will send you Mobile Money or bank details for your invoice.
              </p>
              <a href={whatsappLink('Hello SyncSphere, I would like to pay my invoice.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6">
                <WhatsAppIcon className="h-4 w-4" /> Ask for payment details
              </a>
            </div>
          )}
          <aside className="rounded-2xl bg-surface p-6 text-sm leading-relaxed text-ink-soft">
            <h2 className="text-base font-bold text-ink">Good to know</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Uganda: MTN Mobile Money, Airtel Money or card, in UGX.</li>
              <li>International: debit or credit card, in USD.</li>
              <li>You will receive a receipt by email from Flutterwave.</li>
              <li>Read our <Link href="/refund-policy" className="text-brand underline">refund policy</Link>.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

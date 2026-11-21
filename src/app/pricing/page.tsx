import { PricingTables } from '@/components/PricingTables';
import { CtaBand, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta(
  '/pricing',
  'Website Prices in Uganda (UGX) and International (USD)',
  'Website packages from UGX 1,800,000. Monthly website care and social media plans. Pay with MTN Mobile Money, Airtel Money, card or bank transfer.',
);

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear prices. No surprises."
        intro="Ugandan businesses pay in shillings with Mobile Money. International clients pay in US dollars. Either way, you get a fixed written quote before we start."
      />
      <section className="section">
        <div className="container">
          <PricingTables />
        </div>
      </section>
      <CtaBand title="Not sure which package fits?" text="Tell us about your business on WhatsApp and we will recommend the right option — and tell you honestly if you need less." />
    </>
  );
}

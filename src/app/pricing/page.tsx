import { PricingTables } from '@/components/PricingTables';
import { CtaBand, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta(
  '/pricing',
  'Prices for Websites, Apps and AI in Uganda (UGX) and International (USD)',
  'Websites from UGX 1,800,000, web apps from UGX 8,000,000, mobile apps from UGX 15,000,000 and AI chatbots from UGX 2,500,000. Pay with MTN Mobile Money, Airtel Money, card or bank transfer.',
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

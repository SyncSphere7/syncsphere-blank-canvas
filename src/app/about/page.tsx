import { CheckList, CtaBand, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/meta';
import { site } from '@/lib/site';

export const metadata = pageMeta(
  '/about',
  'About SyncSphere — Kampala Team, US-Registered Company',
  'SyncSphere is a digital agency with its team in Kampala and a US-registered company. We build websites, WhatsApp automation and marketing for Ugandan and international businesses.',
);

const values = [
  'Clear, fixed prices — published on our website',
  'Plain language, no jargon',
  'You own your domain, website and content',
  'We tell you when you don’t need something',
  'We answer after launch, not only before it',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Kampala team helping businesses grow online"
        intro="SyncSphere builds websites, sets up WhatsApp Business and runs digital marketing for businesses in Uganda and abroad."
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div className="prose prose-lg max-w-none prose-headings:font-extrabold prose-p:text-ink-soft">
            <h2>Why we exist</h2>
            <p>
              Too many good Ugandan businesses are invisible online — or stuck with a website that was expensive, slow and impossible to update. Customers search on their phones, compare on Google and message on WhatsApp. We make sure they find you, trust you and can reach you in one tap.
            </p>
            <h2>How we work</h2>
            <p>
              Our team works from Kampala, so we understand local customers, Mobile Money and how business really happens here. We use modern tools — including AI — to design and build faster, which keeps our prices fair without cutting corners. Every website is reviewed by a person before it goes live.
            </p>
            <h2>A company you can hold to account</h2>
            <p>
              {site.legalName} is a limited liability company registered in {site.registration.state} (File No. {site.registration.fileNo}), with operations in Kampala. Every project comes with a written quote, published{' '}
              <a href="/terms-of-service">terms</a> and a <a href="/refund-policy">refund policy</a>.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-extrabold">What you can expect from us</h2>
              <CheckList items={values} className="mt-5" />
            </div>
            <div className="rounded-2xl border border-line p-6 sm:p-8">
              <h2 className="text-xl font-extrabold">Find us</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="font-semibold">Kampala office</dt><dd className="text-ink-soft">{site.kampalaAddress}</dd></div>
                <div><dt className="font-semibold">Hours</dt><dd className="text-ink-soft">{site.hours}</dd></div>
                <div><dt className="font-semibold">Phone / WhatsApp</dt><dd><a className="text-brand" href={site.phoneHref}>{site.phone}</a></dd></div>
                <div><dt className="font-semibold">Email</dt><dd><a className="text-brand" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
                <div><dt className="font-semibold">Registered office (USA)</dt><dd className="text-ink-soft">{site.registration.office}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

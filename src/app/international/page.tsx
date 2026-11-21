import Link from 'next/link';
import { ArrowRight, Building2, Clock3, CreditCard, Globe2 } from 'lucide-react';
import { CheckList, CtaBand, PageHero } from '@/components/ui';
import { addOns, retainers, websitePlans } from '@/lib/pricing';
import { pageMeta } from '@/lib/meta';
import { site } from '@/lib/site';

export const metadata = pageMeta(
  '/international',
  'Web Design for US, UK and Diaspora Clients',
  'Professional websites, automation and marketing for clients in the US, UK and Ugandan diaspora. USD pricing, card and ACH payments, US-registered company.',
);

const points = [
  { Icon: Building2, title: 'A US company to contract with', text: `${site.legalName} is registered in ${site.registration.state}. Contracts, invoices and payments run through the US company.` },
  { Icon: CreditCard, title: 'Pay the way you’re used to', text: 'Credit and debit cards, US ACH or bank transfer, billed in US dollars.' },
  { Icon: Clock3, title: 'Overlapping hours', text: 'Our team works on East Africa Time, which overlaps with UK mornings and US East Coast mornings.' },
  { Icon: Globe2, title: 'Diaspora projects welcome', text: 'Running a business back home from abroad? We handle the local side in Kampala and keep you updated online.' },
];

export default function InternationalPage() {
  return (
    <>
      <PageHero
        eyebrow="International clients"
        title="Professional web work for clients in the US, UK and beyond"
        intro="Websites, automation and marketing delivered by our Kampala team and contracted through our US-registered company."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">Request a quote <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/pricing#international" className="btn-outline">USD pricing</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container grid gap-5 sm:grid-cols-2">
          {points.map(({ Icon, title, text }) => (
            <div key={title} className="card flex gap-4">
              <Icon className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h2 className="font-bold">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Website packages (USD)</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {websitePlans.intl.map((p) => (
              <div key={p.id} className={`card flex flex-col ${p.featured ? 'border-brand ring-1 ring-brand' : ''}`}>
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-3 text-3xl font-extrabold">{p.price}</p>
                <p className="mt-1 text-sm text-ink-muted">{p.delivery}</p>
                <CheckList items={p.features} className="mt-5" />
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <h3 className="font-bold">Monthly plans</h3>
              <ul className="mt-4 divide-y divide-line text-sm">
                {retainers.intl.map((r) => (
                  <li key={r.name} className="flex justify-between py-2.5"><span>{r.name}</span><span className="font-semibold">{r.price} / mo</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <h3 className="font-bold">Add-ons</h3>
              <ul className="mt-4 divide-y divide-line text-sm">
                {addOns.intl.map((a) => (
                  <li key={a.name} className="flex justify-between gap-4 py-2.5"><span>{a.name}</span><span className="shrink-0 font-semibold">{a.price}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-ink-soft">Payment: 50% to start, 25% at design approval, 25% at launch. 30-day defect warranty after launch.</p>
        </div>
      </section>

      <CtaBand title="Tell us about your project" text="Send a short description and we will reply with questions, a plan and a fixed USD quote." />
    </>
  );
}

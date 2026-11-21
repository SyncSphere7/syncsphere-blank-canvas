import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock, Smartphone, Wallet } from 'lucide-react';
import { CheckList, CtaBand, FaqList, JsonLd, SectionHeading } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { homeFaqs, industries, processSteps, services } from '@/lib/content';
import { paymentTerms, websitePlans } from '@/lib/pricing';
import { pageMeta } from '@/lib/meta';
import { whatsappLink } from '@/lib/site';

export const metadata = pageMeta(
  '/',
  'SyncSphere | Website Design in Uganda — Websites, WhatsApp & Marketing',
  'Professional websites for Ugandan businesses from UGX 1,800,000. WhatsApp Business automation, social media and Google Maps setup. Kampala team, pay with Mobile Money.',
);

const reasons = [
  { Icon: Smartphone, title: 'Built for phones', text: 'Most of your customers will find you on a phone, often on mobile data. Our sites are light, fast and easy to use on small screens.' },
  { Icon: WhatsAppIconBadge, title: 'WhatsApp at the centre', text: 'Every site makes it one tap to message you on WhatsApp — where Ugandan customers already want to talk.' },
  { Icon: Wallet, title: 'Clear prices, local payments', text: 'Fixed written quotes in shillings. Pay with MTN Mobile Money, Airtel Money, card or bank transfer.' },
  { Icon: BadgeCheck, title: 'A company you can hold to account', text: 'A Kampala team backed by a registered US company, with written terms, a refund policy and 30 days of free fixes.' },
];

function WhatsAppIconBadge({ className }: { className?: string }) {
  return <WhatsAppIcon className={className} />;
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: homeFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-sun/20 blur-3xl" aria-hidden="true" />
        <div className="container relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-whatsapp" aria-hidden="true" /> Kampala-based team · Serving Uganda and abroad
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-6xl">
              Websites that win you <span className="text-brand">customers</span>, not just visitors.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              We build professional websites, set up WhatsApp Business and run social media for Ugandan businesses — with clear prices in shillings and payment by Mobile Money.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-6 py-3.5 text-base">
                <WhatsAppIcon className="h-5 w-5" /> Get a free quote on WhatsApp
              </a>
              <Link href="/pricing" className="btn-outline px-6 py-3.5 text-base">
                See prices <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand" /> Starter sites live in 5–7 days</li>
              <li className="flex items-center gap-2"><Wallet className="h-4 w-4 text-brand" /> From UGX 1,800,000</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-brand" /> 30 days of free fixes</li>
            </ul>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Everything you need to get customers online" intro="Start with a website, or pick the one thing your business needs most right now." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card group transition-colors hover:border-brand">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.summary}</p>
                <p className="mt-4 text-sm font-semibold text-brand">
                  {s.price.ug} <ArrowRight className="inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading eyebrow="Why SyncSphere" title="Made for how Ugandan customers actually buy" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {reasons.map(({ Icon: I, title, text }) => (
              <div key={title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-card">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sun-tint text-ink">
                  <I className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Pricing" title="Website packages in Uganda shillings" intro="Fixed written quote before we start. Domain and SSL included for the first year." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {websitePlans.ug.map((p) => (
              <div key={p.id} className={`card flex flex-col ${p.featured ? 'border-brand ring-1 ring-brand' : ''}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  {p.featured && <span className="rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">Most chosen</span>}
                </div>
                <p className="mt-1 text-sm text-ink-muted">{p.note}</p>
                <p className="mt-4 text-3xl font-extrabold">{p.price}</p>
                <p className="mt-1 text-sm text-ink-muted">{p.delivery}</p>
                <CheckList items={p.features.slice(0, 4)} className="mt-5 flex-1" />
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-surface p-5 text-sm text-ink-soft sm:flex-row sm:items-center">
            <p>{paymentTerms.ug[0]} {paymentTerms.ug[2]}</p>
            <Link href="/pricing" className="btn-primary shrink-0">Full pricing <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading eyebrow="Industries" title="We know what your customers look for" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition-colors hover:text-brand">
                <Icon name={i.icon} className="h-6 w-6 shrink-0 text-brand" />
                <div>
                  <p className="font-bold">{i.name}</p>
                  <p className="text-sm text-ink-soft">{i.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="From first message to live website" center />
          <ol className="mt-10 grid gap-5 md:grid-cols-5">
            {processSteps.map((step, idx) => (
              <li key={step.title} className="rounded-2xl border border-line p-5">
                <span className="text-sm font-bold text-brand">Step {idx + 1}</span>
                <h3 className="mt-2 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* International teaser */}
      <section className="pb-4">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line p-8 md:flex-row md:items-center">
            <div>
              <p className="eyebrow">Outside Uganda?</p>
              <h2 className="mt-2 text-2xl font-extrabold">We also work with clients in the US, UK and the diaspora.</h2>
              <p className="mt-2 text-ink-soft">USD pricing, card and bank payments, and a US-registered company to contract with.</p>
            </div>
            <Link href="/international" className="btn-outline shrink-0">International clients <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Common questions" intro="Can’t find your answer? Message us on WhatsApp and a real person will reply during working hours." />
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm" aria-hidden="true">
      <div className="rounded-[2.2rem] border-[10px] border-ink bg-white shadow-2xl">
        <div className="rounded-t-[1.4rem] bg-brand-deep px-5 pb-6 pt-5 text-white">
          <div className="flex items-center justify-between text-[10px] text-white/70"><span>9:41</span><span>4G</span></div>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-sun">Nile Safaris</p>
          <p className="mt-1 text-xl font-extrabold leading-tight">Gorilla treks from Kampala</p>
          <p className="mt-1 text-xs text-white/75">3-day packages · Small groups</p>
          <span className="mt-4 inline-block rounded-lg bg-sun px-3 py-1.5 text-xs font-bold text-ink">Book a trip</span>
        </div>
        <div className="space-y-3 p-5">
          {['Bwindi 3-day trek', 'Murchison Falls safari', 'Jinja adventure weekend'].map((t, i) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border border-line p-3">
              <span className={`h-10 w-10 rounded-lg ${['bg-brand/20', 'bg-sun/30', 'bg-whatsapp/20'][i]}`} />
              <div className="flex-1">
                <p className="text-xs font-bold text-ink">{t}</p>
                <p className="text-[10px] text-ink-muted">From USD {[680, 450, 220][i]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 w-56 rounded-2xl bg-white p-3 shadow-card sm:-left-12">
        <p className="flex items-center gap-1.5 text-[11px] font-bold text-whatsapp"><WhatsAppIcon className="h-3.5 w-3.5" /> New WhatsApp enquiry</p>
        <p className="mt-1 text-xs text-ink-soft">“Hi! Is the Bwindi trek available on 12 March for 2 people?”</p>
      </div>
      <p className="mt-10 text-center text-xs text-ink-muted">Example design for illustration</p>
    </div>
  );
}

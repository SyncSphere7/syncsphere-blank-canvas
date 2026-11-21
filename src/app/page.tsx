import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaqList, JsonLd } from '@/components/ui';
import { HeroSlot, KampalaTime } from '@/components/HeroMotion';
import { homeFaqs, industries, pillars, processSteps, services } from '@/lib/content';
import { paymentTerms, websitePlans } from '@/lib/pricing';
import { pageMeta } from '@/lib/meta';
import { site, whatsappLink } from '@/lib/site';

export const metadata = pageMeta(
  '/',
  'SyncSphere | Websites, Apps & AI for Ugandan Businesses',
  'Websites from UGX 1,800,000, web and mobile apps from UGX 8,000,000, and AI chatbots for WhatsApp from UGX 2,500,000. Kampala team at Acacia Mall, pay with Mobile Money.',
);

/** Services listed under each pillar on the home page, in order. */
const pillarSlugs: Record<string, string[]> = {
  websites: ['websites', 'branding', 'google-business-profile', 'maintenance'],
  apps: ['web-apps', 'mobile-apps'],
  ai: ['ai-chatbots', 'document-ai', 'ai-training'],
};
const moreSlugs = ['whatsapp-automation', 'social-media', 'business-automation'];
const priceStrip = ['web-apps', 'mobile-apps', 'ai-chatbots', 'document-ai', 'ai-training'];
const bySlug = (slug: string) => services.find((x) => x.slug === slug)!;

const ugx = (n: number) => n.toLocaleString('en-US');

export default function HomePage() {
  const starter = websitePlans.ug[0];
  const starterTotal = Number(starter.price.replace(/\D/g, ''));
  const deposit = Math.round(starterTotal * 0.6);

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
      <section className="bark pb-28 sm:pb-36">
        <div className="container pt-8 sm:pt-12">
          <div className="flex flex-wrap justify-between gap-3 font-mono text-xs uppercase tracking-[0.1em] text-cream/60">
            <span className="inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] animate-dot rounded-full bg-sun" aria-hidden="true" /> Taking new projects
            </span>
            <span>
              Kampala 0.3476° N, 32.5825° E · <KampalaTime />
            </span>
          </div>

          <h1 className="display-xl mt-8 text-[clamp(50px,8.2vw,132px)] sm:mt-12">
            <span className="sr-only">Websites, apps and AI for Ugandan businesses</span>
            <span className="block overflow-hidden pb-[0.02em]" aria-hidden="true"><span className="inline-block animate-rise">Websites, apps</span></span>
            <span className="block overflow-hidden pb-[0.02em]" aria-hidden="true"><span className="inline-block animate-rise [animation-delay:.1s]">&amp; <span className="text-brand-bright">AI</span> for</span></span>
            <span className="block overflow-hidden pb-[0.02em]"><span className="inline-block animate-rise [animation-delay:.2s]"><HeroSlot /></span></span>
          </h1>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-4">
            <div className="animate-fade-up [animation-delay:.35s] lg:col-span-5">
              <p className="max-w-[34rem] text-lg leading-relaxed text-cream/80 sm:text-[19px]">
                We build websites and apps, and put AI to work in your business: answering customers on WhatsApp, reading your paperwork, training your team. One Kampala team, one written price in shillings, paid by Mobile Money.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-chip">
                  Get a quote on WhatsApp
                  <span className="chip"><ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                </a>
                <Link href="/pricing" className="border-b border-cream/60 pb-0.5 font-semibold transition-colors hover:border-brand-bright hover:text-brand-bright">
                  See all prices
                </Link>
              </div>
            </div>

            <dl className="animate-fade-up border-t-2 border-cream font-mono text-sm [animation-delay:.5s] lg:col-span-3 lg:col-start-7">
              {[
                ['Website from', starter.price],
                ['Web app from', bySlug('web-apps').price.ug.replace('From ', '')],
                ['AI chatbot from', bySlug('ai-chatbots').price.ug.replace('From ', '')],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-cream/15 py-2.5">
                  <dt className="text-xs uppercase tracking-[0.1em] text-cream/60">{k}</dt>
                  <dd className="mt-0.5 uppercase tabular-nums">{v}</dd>
                </div>
              ))}
            </dl>

            <div
              className="max-w-[340px] -rotate-2 animate-card rounded-2xl bg-cream p-5 pb-3 text-ink shadow-lift transition-transform duration-500 ease-out [animation-delay:.6s] hover:rotate-0 lg:col-span-3"
              aria-label={`Example payment schedule for a Starter website: ${ugx(deposit)} shillings deposit by Mobile Money, ${ugx(starterTotal - deposit)} at launch.`}
            >
              <p className="flex justify-between border-b border-ink/15 pb-2.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-muted">
                <span>Example</span><span>Starter site</span>
              </p>
              {[
                ['Deposit 60% · MoMo', ugx(deposit), true],
                ['At launch 40%', ugx(starterTotal - deposit), false],
                ['Total UGX', ugx(starterTotal), false],
              ].map(([k, v, done]) => (
                <p key={String(k)} className="flex justify-between gap-3 border-b border-dashed border-ink/20 py-2.5 text-sm tabular-nums last:border-0">
                  <span>{done ? <span className="font-bold text-[#5E7A1E]">✓ </span> : null}{k}</span>
                  <b>{v}</b>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="container mt-28 sm:mt-36">
          <SecHead label="What we do" title={<>Websites. Apps. <em className="not-italic text-brand-bright">AI.</em></>} />
          <div className="grid gap-14 lg:grid-cols-3 lg:gap-6">
            {pillars.map((p) => (
              <div key={p.id} className="flex min-w-0 flex-col">
                <Link href={p.href} className="group block border-b-2 border-brand-bright pb-5">
                  <span className="display-xl flex items-end justify-between gap-3 text-[clamp(56px,5.6vw,88px)] transition-colors group-hover:text-brand-bright">
                    {p.name}
                    <span className="mb-2 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/30 transition-[transform,background-color,border-color] duration-300 ease-out group-hover:-rotate-45 group-hover:border-brand-bright group-hover:bg-brand-bright">
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="mt-3 block max-w-[34ch] text-[15px] text-cream/75">{p.line}</span>
                  <span className="mt-3 block font-mono text-sm text-brand-bright">{p.from}</span>
                </Link>
                <ul>
                  {pillarSlugs[p.id].map(bySlug).map((s) => (
                    <li key={s.slug} className="border-b border-cream/15">
                      <Link href={`/services/${s.slug}`} className="group block py-4 transition-[padding] duration-300 ease-out hover:pl-2.5">
                        <span className="flex items-baseline justify-between gap-3">
                          <span className="text-lg font-bold group-hover:text-brand-bright">{s.name}</span>
                          <span className="shrink-0 font-mono text-[12px] text-cream/55">{s.price.ug.replace('From ', '').replace(' / month', '/mo')}</span>
                        </span>
                        <span className="mt-1 block text-[14.5px] text-cream/60">{s.summary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-cream/15 pt-5">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-cream/60">Also</span>
            {moreSlugs.map(bySlug).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="font-semibold link-grow hover:text-brand-bright">{s.name}</Link>
            ))}
          </p>
        </div>
      </section>

      {/* Prices */}
      <section className="sheet pb-28 pt-20 sm:pb-36 sm:pt-28">
        <div className="container">
          <SecHead label="Prices · UGX · Websites" title={<>One price, in writing, <em className="not-italic text-brand">before we start.</em></>} />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left text-[15px] tabular-nums">
              <thead>
                <tr>
                  <th className="w-1/4" />
                  {websitePlans.ug.map((p) => (
                    <th key={p.id} className={p.featured ? 'rounded-t-2xl bg-bark px-4 pb-5 pt-4 align-bottom text-cream' : 'border-b-2 border-ink px-4 pb-5 align-bottom'}>
                      {p.featured && <span className="mb-2.5 inline-block rounded-full bg-brand-bright px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-cream">Most chosen</span>}
                      <span className="display-xl block text-4xl">{p.name}</span>
                      <span className="mt-2 block font-mono text-lg font-semibold">{p.price.replace('UGX ', '')}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { k: 'Best for', v: (p: (typeof websitePlans.ug)[number]) => p.note },
                  { k: 'Live in', v: (p: (typeof websitePlans.ug)[number]) => p.delivery.replace(/^Live in /, '') },
                  {
                    k: "What's included",
                    v: (p: (typeof websitePlans.ug)[number]) => (
                      <ul className="space-y-2">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2.5"><span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-brand-bright" aria-hidden="true" />{f}</li>
                        ))}
                      </ul>
                    ),
                  },
                ].map((row, ri, rows) => (
                  <tr key={row.k}>
                    <th scope="row" className="border-b border-ink/15 py-4 pr-4 align-top font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink-muted">{row.k}</th>
                    {websitePlans.ug.map((p) => (
                      <td
                        key={p.id}
                        className={
                          p.featured
                            ? `bg-bark px-4 py-4 align-top text-cream ${ri === rows.length - 1 ? 'rounded-b-2xl' : 'border-b border-cream/15'}`
                            : 'border-b border-ink/15 px-4 py-4 align-top'
                        }
                      >
                        {row.v(p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-muted">Apps and AI · starting prices</p>
            <ul className="mt-3 grid border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-5">
              {priceStrip.map(bySlug).map((s) => (
                <li key={s.slug} className="border-b border-ink/15 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <Link href={`/services/${s.slug}`} className="group flex h-full flex-col gap-1 py-4 transition-colors hover:text-brand lg:px-4 lg:first:pl-0">
                    <span className="font-bold leading-snug">{s.name}</span>
                    <span className="font-mono text-[15px] font-semibold tabular-nums">{s.price.ug.replace('From ', '')}</span>
                    <span className="mt-auto pt-1 text-sm text-ink-soft group-hover:text-brand">See packages <ArrowRight className="inline h-3.5 w-3.5" aria-hidden="true" /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2.5 text-sm">
            {paymentTerms.ug.slice(0, 2).map((t) => (
              <span key={t} className="rounded-full border border-ink/20 px-4 py-2">{t}</span>
            ))}
            <span className="rounded-full border border-ink/20 px-4 py-2">MTN MoMo · Airtel Money · Card · Bank</span>
            <Link href="/pricing" className="btn-primary ml-auto">
              Full price list <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries, about and process */}
      <section className="bark relative z-20 -mt-10 overflow-hidden rounded-t-[2rem] pb-28 pt-20 sm:-mt-12 sm:rounded-t-[3rem] sm:pb-36 sm:pt-28">
        <div className="container">
          <SecHead label="Industries" title={<>We know who your <em className="not-italic text-brand-bright">customers</em> are.</>} />
          <ul className="border-t border-cream/15">
            {industries.map((i) => (
              <li key={i.slug} className="reveal border-b border-cream/15">
                <Link href={`/industries/${i.slug}`} className="group grid items-baseline gap-1 py-3.5 md:grid-cols-[1fr_auto] md:gap-4">
                  <span className="display-xl text-[clamp(34px,5.6vw,84px)] leading-[0.95] transition-[color,transform] duration-300 ease-out group-hover:translate-x-3.5 group-hover:text-brand-bright">
                    {i.name}
                  </span>
                  <span className="max-w-[30ch] text-[15px] text-cream/60 md:text-right">{i.summary}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-24 grid items-center gap-10 md:grid-cols-12 md:gap-4 sm:mt-32">
            <div
              className="flex aspect-[4/5] max-w-[420px] items-end rounded-b-[18px] rounded-t-full border border-cream/15 p-5 md:col-span-5 md:max-w-none"
              style={{ background: 'repeating-linear-gradient(172deg, rgba(242,231,211,.05) 0 2px, transparent 2px 9px), linear-gradient(165deg, #7B4A2A, #45291A 55%, #24170F)' }}
            >
              <p className="rounded-lg bg-bark/75 px-3 py-2 text-[13px] text-cream/80">Photo: the SyncSphere team in Kampala (coming soon)</p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="eyebrow text-cream/60">About us</p>
              <h2 className="display-xl mt-3 text-[clamp(36px,4.6vw,68px)]">A Kampala team you can visit.</h2>
              <p className="mt-5 max-w-[46ch] text-cream/80">
                We work from Acacia Mall in Kampala, reply on WhatsApp, and sign a written agreement for every project. Our US-registered company also serves clients abroad.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div className="border-t border-cream/15 pt-3"><dt className="eyebrow text-cream/60">Office</dt><dd className="mt-1 font-semibold">4th Floor, Acacia Mall</dd></div>
                <div className="border-t border-cream/15 pt-3"><dt className="eyebrow text-cream/60">Company</dt><dd className="mt-1 font-semibold">{site.legalName}, Montana</dd></div>
              </dl>
              <Link href="/about" className="mt-8 inline-block border-b border-cream/60 pb-0.5 font-semibold hover:border-brand-bright hover:text-brand-bright">More about us</Link>
            </div>
          </div>

          <div className="mt-28 sm:mt-36">
            <SecHead label="Process" title={<>{processSteps.length} steps to <em className="not-italic text-brand-bright">launch.</em></>} />
            <ol className="grid gap-6 md:grid-cols-5 md:gap-4">
              {processSteps.map((s, n) => (
                <li key={s.title} className={`border-t-[6px] pt-3.5 transition-colors hover:border-brand-bright ${n === 0 ? 'border-brand-bright' : 'border-cream/15'}`}>
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-cream/60">Step {n + 1}</span>
                  <h3 className="mt-2 text-[19px] leading-tight">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] text-cream/65">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-24 flex flex-col items-start justify-between gap-6 border-y border-cream/15 py-8 md:flex-row md:items-center">
            <p className="max-w-xl text-lg">
              <span className="font-semibold">Outside Uganda?</span> <span className="text-cream/70">We work with clients in the US, UK and the diaspora, with USD prices and a US company to contract with.</span>
            </p>
            <Link href="/international" className="btn-outline shrink-0">International clients <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sheet pb-24 pt-20 sm:pb-32 sm:pt-28">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-4">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 text-[clamp(40px,5vw,72px)]">Common questions</h2>
            <p className="mt-5 max-w-sm text-ink-soft">Can’t find your answer? Message us on WhatsApp and a real person will reply during working hours.</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList faqs={homeFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}

function SecHead({ label, title }: { label: string; title: ReactNode }) {
  return (
    <div className="reveal mb-12 grid gap-3 border-t-2 border-current pt-3.5 sm:mb-16 md:grid-cols-12 md:gap-4">
      <p className="font-mono text-xs uppercase tracking-[0.1em] opacity-70 md:col-span-3">{label}</p>
      <h2 className="text-[clamp(40px,6.4vw,96px)] leading-[0.88] md:col-span-9">{title}</h2>
    </div>
  );
}

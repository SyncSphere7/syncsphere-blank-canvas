import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CtaBand, FaqList, JsonLd, PageHero } from './ui';
import { Icon } from './Icon';
import { PlanCards } from './PlanCards';
import { services, type Pillar } from '@/lib/content';
import { servicePackages } from '@/lib/pricing';
import { site, whatsappLink } from '@/lib/site';

/** Hub page for one pillar (Apps or AI): every service in it, with its packages in UGX. */
export function PillarPage({ pillar, eyebrow, title, intro, cta }: { pillar: Pillar; eyebrow: string; title: string; intro: string; cta: string }) {
  const items = services.filter((s) => s.pillar === pillar);
  const faqs = items.flatMap((s) => s.faqs.slice(0, 2));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: items.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: { '@type': 'Service', name: s.name, description: s.summary, url: `${site.url}/services/${s.slug}`, provider: { '@type': 'Organization', name: site.legalName }, areaServed: 'Uganda' },
          })),
        }}
      />
      <PageHero eyebrow={eyebrow} title={title} intro={intro}>
        <div className="flex flex-wrap items-center gap-6">
          <a href={whatsappLink(cta)} target="_blank" rel="noopener noreferrer" className="btn-chip">
            Talk to us on WhatsApp
            <span className="chip"><ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
          </a>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.1em] text-cream/70">
            {items.map((s) => (
              <li key={s.slug}><a href={`#${s.slug}`} className="hover:text-brand-bright">{s.name}</a></li>
            ))}
          </ul>
        </div>
      </PageHero>

      {items.map((s, n) => (
        <section key={s.slug} id={s.slug} className={`scroll-mt-20 ${n === 0 ? 'sheet pt-16 sm:pt-24' : 'pt-4'} pb-16 sm:pb-20`}>
          <div className="container">
            <div className="reveal mb-10 grid gap-4 border-t-2 border-ink pt-3.5 md:grid-cols-12">
              <p className="eyebrow flex items-center gap-2 md:col-span-3">
                <Icon name={s.icon} className="h-4 w-4 text-brand" /> {s.price.ug}
              </p>
              <div className="md:col-span-9">
                <h2 className="text-[clamp(34px,4.6vw,64px)]">{s.name}</h2>
                <p className="mt-4 max-w-2xl text-lg text-ink-soft">{s.intro}</p>
                <Link href={`/services/${s.slug}`} className="mt-4 inline-block border-b border-ink/40 pb-0.5 font-semibold hover:border-brand hover:text-brand">
                  What’s included and common questions
                </Link>
              </div>
            </div>
            {s.packages && <PlanCards plans={servicePackages[s.packages].ug} service={s.name.toLowerCase()} />}
          </div>
        </section>
      ))}

      <section className="pb-24 pt-8">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-4">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 text-[clamp(36px,4.6vw,64px)]">Before you ask</h2>
            <p className="mt-5 max-w-sm text-ink-soft">
              Prices above are in UGX. International clients pay in USD: see the <Link href="/pricing#international" className="underline">full price list</Link>.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <CtaBand message={cta} />
    </>
  );
}

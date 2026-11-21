import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { CheckList, CtaBand, FaqList, JsonLd, PageHero } from '@/components/ui';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { services } from '@/lib/content';
import { pageMeta } from '@/lib/meta';
import { site, whatsappLink } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMeta(`/services/${s.slug}`, `${s.name} in Uganda`, `${s.summary} ${s.price.ug}. Kampala team, pay with Mobile Money.`);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const message = `Hello SyncSphere, I'd like to know more about ${s.name.toLowerCase()} for my business.`;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: s.name,
          description: s.intro,
          provider: { '@type': 'Organization', name: site.legalName, url: site.url },
          areaServed: 'Uganda',
          url: `${site.url}/services/${s.slug}`,
        }}
      />
      <PageHero eyebrow={s.name} title={s.headline} intro={s.intro}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
          </a>
          <Link href="/pricing" className="btn-outline">See all prices</Link>
          <p className="text-sm text-cream/70 sm:ml-3">
            <span className="font-semibold text-cream">{s.price.ug}</span> · International: {s.price.intl}
          </p>
        </div>
      </PageHero>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold">What’s included</h2>
            <CheckList items={s.includes} className="mt-6" />
          </div>
          <div className="rounded-2xl bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold">A good fit for</h2>
            <CheckList items={s.goodFor} className="mt-6" />
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-extrabold">Questions about {s.name.toLowerCase()}</h2>
          <div className="mt-6"><FaqList faqs={s.faqs} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-extrabold">Often combined with</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="rounded-2xl border border-line p-5 transition-colors hover:border-brand">
                <p className="font-bold">{o.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{o.summary}</p>
                <p className="mt-3 text-sm font-semibold text-brand">Learn more <ArrowRight className="inline h-4 w-4" /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand message={message} />
    </>
  );
}

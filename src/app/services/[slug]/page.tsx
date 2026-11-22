import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { CheckList, CtaBand, FaqList, JsonLd, PageHero } from '@/components/ui';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { PlanCards } from '@/components/PlanCards';
import { services } from '@/lib/content';
import { getServicePost } from '@/lib/blog';
import { servicePackages } from '@/lib/pricing';
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
  return pageMeta(`/services/${s.slug}`, `${s.name} in Uganda`, `${s.summary} ${s.price.ug}. Kampala team. Pay by bank, Visa or Mobile Money.`);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  // Suggest services from the same pillar first, then the rest.
  const others = [
    ...services.filter((x) => x.slug !== s.slug && s.pillar && x.pillar === s.pillar),
    ...services.filter((x) => x.slug !== s.slug && !(s.pillar && x.pillar === s.pillar)),
  ].slice(0, 3);
  const article = getServicePost(s.slug);
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

      {s.packages && (
        <section className="pb-20 sm:pb-28">
          <div className="container">
            <div className="mb-10 grid gap-3 border-t-2 border-ink pt-3.5 md:grid-cols-12 md:gap-4">
              <p className="eyebrow md:col-span-3">Packages · UGX</p>
              <h2 className="text-[clamp(34px,4.6vw,64px)] md:col-span-9">Pick a starting point</h2>
            </div>
            <PlanCards plans={servicePackages[s.packages].ug} service={s.name.toLowerCase()} />
            <p className="mt-8 text-sm text-ink-soft">
              International clients: see USD prices on the <Link href={`/pricing#international`} className="underline">price list</Link>. Every project gets a fixed written quote before we start.
            </p>
          </div>
        </section>
      )}

      <section className="section bg-surface">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-extrabold">Questions about {s.name.toLowerCase()}</h2>
          <div className="mt-6"><FaqList faqs={s.faqs} /></div>
          {article && (
            <Link href={`/blog/${article.slug}`} className="mt-10 block border-t-2 border-ink pt-4 transition-colors hover:text-brand">
              <p className="eyebrow">Read the guide · {article.readTime}</p>
              <p className="mt-2 text-xl font-extrabold">{article.title} <ArrowRight className="inline h-5 w-5" /></p>
            </Link>
          )}
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

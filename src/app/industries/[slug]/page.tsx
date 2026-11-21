import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckList, CtaBand, PageHero } from '@/components/ui';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { industries } from '@/lib/content';
import { pageMeta } from '@/lib/meta';
import { whatsappLink } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) return {};
  return pageMeta(`/industries/${i.slug}`, `${i.name} websites in Uganda`, `${i.headline}. ${i.summary}`);
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) notFound();

  const message = `Hello SyncSphere, I run a business in ${i.name.toLowerCase()} and I'd like to talk about a website.`;

  return (
    <>
      <PageHero eyebrow={i.name} title={i.headline} intro={i.intro}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppIcon className="h-4 w-4" /> Talk to us on WhatsApp
          </a>
          <Link href="/pricing" className="btn-outline">See prices</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-line p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold">Problems we solve</h2>
            <CheckList items={i.challenges} className="mt-6" />
          </div>
          <div className="rounded-2xl bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold">What we build for you</h2>
            <CheckList items={i.build} className="mt-6" />
            <p className="mt-6 text-sm text-ink-soft">
              Usually a <Link href="/pricing" className="font-semibold text-brand underline">{i.plan}</Link> package.
            </p>
          </div>
        </div>
      </section>

      <CtaBand message={message} />
    </>
  );
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHero } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { industries } from '@/lib/content';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta(
  '/industries',
  'Websites for Tour Operators, Hotels, NGOs, Schools and Shops in Uganda',
  'Websites and digital marketing built for Ugandan tour operators, hotels, NGOs, schools, online shops and professional firms.',
);

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Websites built around your kind of customer" intro="A safari company, a school and a law firm need very different websites. Here is what we build for each." />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="card group transition-colors hover:border-brand">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sun-tint text-ink">
                <Icon name={i.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-bold">{i.name}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{i.summary}</p>
              <p className="mt-3 text-sm font-semibold text-brand">
                See what we build <ArrowRight className="inline h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

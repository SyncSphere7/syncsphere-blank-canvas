import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHero } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { services } from '@/lib/content';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta(
  '/services',
  'Services — Websites, WhatsApp Automation, Social Media',
  'Website design, WhatsApp Business automation, social media management, branding, Google Business Profile, website care and business automation for Ugandan businesses.',
);

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything your business needs online" intro="Pick one service or combine them. Every project starts with a free conversation and a fixed quote." />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group flex gap-5 transition-colors hover:border-brand">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center text-brand">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-lg font-bold">{s.name}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.summary}</p>
                <p className="mt-3 text-sm font-semibold text-brand">
                  {s.price.ug} <ArrowRight className="inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

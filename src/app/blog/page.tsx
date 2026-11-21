import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHero } from '@/components/ui';
import { formatDate, posts } from '@/lib/blog';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta(
  '/blog',
  'Blog — Guides to Websites, Apps and AI for Ugandan Businesses',
  'Plain-language guides on websites, web and mobile apps, AI chatbots, WhatsApp Business and Google Maps for businesses in Uganda — with real prices.',
);

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero eyebrow="Blog" title="Practical guides to websites, apps and AI" intro="Short, plain-language advice for Ugandan business owners." />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-3">
          {sorted.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card group flex flex-col transition-colors hover:border-brand">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</p>
              <h2 className="mt-3 text-lg font-bold leading-snug">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.description}</p>
              <p className="mt-5 flex items-center justify-between text-xs text-ink-muted">
                <span>{formatDate(p.date)} · {p.readTime}</span>
                <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

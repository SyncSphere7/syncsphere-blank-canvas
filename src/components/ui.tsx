import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import type { Faq } from '@/lib/content';
import { whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

export function PageHero({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container py-14 sm:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
    </div>
  );
}

export function CheckList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft sm:text-base">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {faqs.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
            {f.q}
            <span className="text-xl leading-none text-brand transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = 'Ready to grow your business online?',
  text = 'Tell us what you need. You will get a clear plan and a fixed quote — free, with no obligation.',
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-brand-deep px-6 py-12 text-white sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sun/20 blur-2xl" aria-hidden="true" />
          <h2 className="max-w-2xl text-2xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-white/80">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <Link href="/contact" className="btn border border-white/30 text-white hover:bg-white/10">
              Send a message <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

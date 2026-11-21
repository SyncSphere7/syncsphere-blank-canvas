import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Faq } from '@/lib/content';
import { whatsappLink } from '@/lib/site';

/** Dark bark-cloth page header with a condensed display title. */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="bark pb-24 sm:pb-32">
      <div className="container pt-12 sm:pt-20">
        {eyebrow && <p className="eyebrow animate-fade-up text-cream/60">{eyebrow}</p>}
        <h1 className="display-xl mt-5 max-w-5xl text-[clamp(44px,7vw,112px)]">
          <span className="block overflow-hidden pb-[0.03em]">
            <span className="inline-block animate-rise">{title}</span>
          </span>
        </h1>
        {intro && <p className="mt-7 max-w-2xl animate-fade-up text-lg leading-relaxed text-cream/80 [animation-delay:.2s] sm:text-[19px]">{intro}</p>}
        {children && <div className="mt-9 animate-fade-up [animation-delay:.3s]">{children}</div>}
      </div>
    </section>
  );
}

/** Rule-topped section heading: a mono label on the left, the title on the right. */
export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  if (center) {
    return (
      <div className="reveal mx-auto max-w-3xl text-center">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 text-[clamp(34px,4.6vw,64px)]">{title}</h2>
        {intro && <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
      </div>
    );
  }
  return (
    <div className="reveal grid gap-3 border-t-2 border-current pt-3.5 md:grid-cols-12 md:gap-4">
      <p className="eyebrow md:col-span-3">{eyebrow}</p>
      <div className="md:col-span-9">
        <h2 className="text-[clamp(34px,4.6vw,64px)]">{title}</h2>
        {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">{intro}</p>}
      </div>
    </div>
  );
}

export function CheckList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed sm:text-base">
          <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-brand-bright" aria-hidden="true" />
          <span className="opacity-85">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="border-t-2 border-current">
      {faqs.map((f) => (
        <details key={f.q} className="group border-b py-5 [border-color:color-mix(in_srgb,currentColor_15%,transparent)]">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-bold">
            {f.q}
            <span
              className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-current text-lg leading-none transition-transform duration-300 ease-out group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-cream"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed opacity-80 sm:text-base">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Closing call to action on a dark band. */
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
    <section className="bark mt-12">
      <div className="container grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end lg:gap-4">
        <h2 className="display-xl reveal text-[clamp(44px,6.4vw,104px)] lg:col-span-8">{title}</h2>
        <div className="lg:col-span-4">
          <p className="text-lg text-cream/80">{text}</p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-chip">
              Chat on WhatsApp
              <span className="chip"><ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </a>
            <Link href="/contact" className="border-b border-cream/60 pb-0.5 font-semibold hover:border-brand-bright hover:text-brand-bright">
              Send a message
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

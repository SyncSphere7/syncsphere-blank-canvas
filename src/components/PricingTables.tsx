'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { CheckList } from './ui';
import { PlanCards } from './PlanCards';
import { addOns, paymentTerms, retainers, servicePackages, websitePlans, type Market, type PackageSlug } from '@/lib/pricing';

const PACKAGE_SECTIONS: { slug: PackageSlug; label: string; title: string }[] = [
  { slug: 'web-apps', label: 'Apps', title: 'Web apps' },
  { slug: 'mobile-apps', label: 'Apps', title: 'Mobile apps' },
  { slug: 'ai-chatbots', label: 'AI', title: 'AI chatbots for WhatsApp' },
  { slug: 'document-ai', label: 'AI', title: 'Document AI' },
  { slug: 'ai-training', label: 'AI', title: 'AI training and consulting' },
];

export function PricingTables({ initial = 'ug' }: { initial?: Market }) {
  const [market, setMarket] = useState<Market>(initial);

  // Allow /pricing#international to open the USD tab.
  useEffect(() => {
    if (window.location.hash === '#international') setMarket('intl');
  }, []);

  const label = market === 'ug' ? 'Uganda · UGX' : 'International · USD';

  return (
    <div>
      <div role="tablist" aria-label="Choose your market" className="inline-flex rounded-full border border-ink/20 p-1">
        {(['ug', 'intl'] as const).map((m) => (
          <button
            key={m}
            role="tab"
            type="button"
            aria-selected={market === m}
            onClick={() => setMarket(m)}
            className={clsx('rounded-full px-5 py-2 text-sm font-semibold transition-colors', market === m ? 'bg-bark text-cream' : 'text-ink-soft hover:text-ink')}
          >
            {m === 'ug' ? 'Uganda · UGX' : 'International · USD'}
          </button>
        ))}
      </div>

      <Heading label={label} title="Website packages" />
      <PlanCards plans={websitePlans[market]} service="a website" />

      {PACKAGE_SECTIONS.map(({ slug, label, title }) => (
        <div key={slug} id={slug} className="scroll-mt-24">
          <Heading label={label} title={title} />
          <PlanCards plans={servicePackages[slug][market]} service={title.toLowerCase()} />
        </div>
      ))}

      <Heading label="Every month" title="Monthly plans" />
      <div className={clsx('grid gap-x-4 gap-y-10 sm:grid-cols-2', market === 'ug' ? 'lg:grid-cols-3' : 'lg:grid-cols-4')}>
        {retainers[market].map((r) => (
          <div key={r.name} className="card">
            <h3 className="text-xl">{r.name}</h3>
            <p className="mt-4 font-mono text-2xl font-semibold tabular-nums">{r.price}</p>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">{r.period}</p>
            <CheckList items={r.features} className="mt-5" />
          </div>
        ))}
      </div>

      <Heading label="Extras" title="Add-ons and other services" />
      <ul className="border-t-2 border-ink">
        {addOns[market].map((a) => (
          <li key={a.name} className="grid gap-1 border-b border-ink/15 py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
            <div>
              <h3 className="text-lg">{a.name}</h3>
              <p className="mt-1 text-[15px] text-ink-soft">{a.detail}</p>
            </div>
            <p className="font-mono text-[15px] font-semibold text-brand sm:text-right">{a.price}</p>
          </li>
        ))}
      </ul>

      <div className="bark mt-16 overflow-hidden rounded-2xl p-6 sm:p-10">
        <p className="eyebrow text-cream/60">How payment works</p>
        <CheckList items={paymentTerms[market]} className="mt-5" />
        <p className="mt-6 max-w-3xl text-sm text-cream/65">
          All prices are starting prices. You receive a fixed written quote before any work begins. Prices exclude third-party costs such as paid advertising or premium plugins, which we always agree with you first.
        </p>
      </div>
    </div>
  );
}

function Heading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10 mt-20 grid gap-3 border-t-2 border-ink pt-3.5 md:grid-cols-12 md:gap-4">
      <p className="eyebrow md:col-span-3">{label}</p>
      <h2 className="text-[clamp(34px,4.6vw,64px)] md:col-span-9">{title}</h2>
    </div>
  );
}

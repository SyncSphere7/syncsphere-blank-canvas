'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { CheckList } from './ui';
import { WhatsAppIcon } from './WhatsAppIcon';
import { addOns, paymentTerms, retainers, websitePlans, type Market } from '@/lib/pricing';
import { whatsappLink } from '@/lib/site';

export function PricingTables({ initial = 'ug' }: { initial?: Market }) {
  const [market, setMarket] = useState<Market>(initial);

  // Allow /pricing#international to open the USD tab.
  useEffect(() => {
    if (window.location.hash === '#international') setMarket('intl');
  }, []);

  const label = market === 'ug' ? 'Uganda (UGX)' : 'International (USD)';

  return (
    <div>
      <div role="tablist" aria-label="Choose your market" className="inline-flex rounded-xl border border-line bg-white p-1">
        {(['ug', 'intl'] as const).map((m) => (
          <button
            key={m}
            role="tab"
            type="button"
            aria-selected={market === m}
            onClick={() => setMarket(m)}
            className={clsx('rounded-lg px-4 py-2 text-sm font-semibold transition-colors', market === m ? 'bg-brand text-white' : 'text-ink-soft hover:text-ink')}
          >
            {m === 'ug' ? 'Uganda · UGX' : 'International · USD'}
          </button>
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-extrabold">Website packages — {label}</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {websitePlans[market].map((p) => (
          <div key={p.id} className={clsx('card flex flex-col', p.featured && 'border-brand ring-1 ring-brand')}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{p.name}</h3>
              {p.featured && <span className="rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-white">Most chosen</span>}
            </div>
            <p className="mt-1 text-sm text-ink-muted">{p.note}</p>
            <p className="mt-4 text-3xl font-extrabold">{p.price}</p>
            <p className="mt-1 text-sm text-ink-muted">{p.delivery}</p>
            <CheckList items={p.features} className="mt-5 flex-1" />
            <a
              href={whatsappLink(`Hello SyncSphere, I'm interested in the ${p.name} website package (${p.price}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('mt-6', p.featured ? 'btn-primary' : 'btn-outline')}
            >
              <WhatsAppIcon className="h-4 w-4" /> Ask about {p.name}
            </a>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-extrabold">Monthly plans</h2>
      <div className={clsx('mt-6 grid gap-5 sm:grid-cols-2', market === 'ug' ? 'lg:grid-cols-3' : 'lg:grid-cols-4')}>
        {retainers[market].map((r) => (
          <div key={r.name} className="card">
            <h3 className="font-bold">{r.name}</h3>
            <p className="mt-3 text-2xl font-extrabold">{r.price}</p>
            <p className="text-sm text-ink-muted">{r.period}</p>
            <CheckList items={r.features} className="mt-4" />
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-extrabold">Add-ons and other services</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {addOns[market].map((a) => (
          <div key={a.name} className="flex items-start justify-between gap-4 rounded-2xl border border-line p-5">
            <div>
              <h3 className="font-bold">{a.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{a.detail}</p>
            </div>
            <p className="shrink-0 text-right text-sm font-bold text-brand">{a.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-surface p-6">
        <h2 className="text-lg font-bold">How payment works</h2>
        <CheckList items={paymentTerms[market]} className="mt-4" />
        <p className="mt-4 text-sm text-ink-muted">
          All prices are starting prices. You receive a fixed written quote before any work begins. Prices exclude third-party costs such as paid advertising or premium plugins, which we always agree with you first.
        </p>
      </div>
    </div>
  );
}

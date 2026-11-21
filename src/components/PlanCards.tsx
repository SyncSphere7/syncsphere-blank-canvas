import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { CheckList } from './ui';
import type { Plan } from '@/lib/pricing';
import { whatsappLink } from '@/lib/site';

/** A row of package cards. The featured plan sits on a dark card; the others are rule-topped. */
export function PlanCards({ plans, service }: { plans: Plan[]; service?: string }) {
  const cols = plans.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';
  return (
    <div className={clsx('grid gap-4', cols)}>
      {plans.map((p) => {
        const what = service ? `${service} — ${p.name}` : `${p.name} package`;
        return (
          <div
            key={p.id}
            className={clsx('flex flex-col rounded-2xl p-6 sm:p-7', p.featured ? 'bark text-cream' : 'border-t-2 border-ink !rounded-none !px-0')}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="display-xl text-4xl">{p.name}</h3>
              {p.featured && <span className="shrink-0 rounded-full bg-brand-bright px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-cream">Most chosen</span>}
            </div>
            <p className="mt-2 text-[15px] opacity-70">{p.note}</p>
            <p className="mt-6 font-mono text-[26px] font-semibold tabular-nums leading-none">{p.price}</p>
            {p.monthly && <p className="mt-2 font-mono text-sm tabular-nums opacity-80">{p.monthly}</p>}
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] opacity-70">{p.delivery}</p>
            <CheckList items={p.features} className="mt-6 flex-1" />
            <a
              href={whatsappLink(`Hello SyncSphere, I'm interested in ${what} (${p.price}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('mt-8 self-start', p.featured ? 'btn-chip' : 'btn-outline')}
            >
              Ask about {p.name}
              {p.featured ? (
                <span className="chip"><ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
              ) : (
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              )}
            </a>
          </div>
        );
      })}
    </div>
  );
}

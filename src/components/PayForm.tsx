'use client';

import { useState, type FormEvent } from 'react';
import { Lock } from 'lucide-react';
import clsx from 'clsx';

export function PayForm() {
  const [currency, setCurrency] = useState<'UGX' | 'USD'>('UGX');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError('');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/pay/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, currency }),
      });
      const json = (await res.json().catch(() => ({}))) as { link?: string; error?: string };
      if (!res.ok || !json.link) throw new Error(json.error || 'Something went wrong.');
      window.location.assign(json.link);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5">
      <div>
        <span className="label">Currency</span>
        <div className="inline-flex rounded-xl border border-line p-1" role="radiogroup" aria-label="Currency">
          {(['UGX', 'USD'] as const).map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={currency === c}
              onClick={() => setCurrency(c)}
              className={clsx('rounded-lg px-4 py-2 text-sm font-semibold', currency === c ? 'bg-brand text-white' : 'text-ink-soft')}
            >
              {c === 'UGX' ? 'UGX · Mobile Money or card' : 'USD · Card'}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="reference" className="label">Invoice or quote number *</label>
          <input id="reference" name="reference" required maxLength={80} placeholder="e.g. INV-1042" className="field" />
        </div>
        <div>
          <label htmlFor="amount" className="label">Amount ({currency}) *</label>
          <input id="amount" name="amount" required inputMode="decimal" placeholder={currency === 'UGX' ? '1,080,000' : '1,750'} className="field" />
        </div>
        <div>
          <label htmlFor="pname" className="label">Full name *</label>
          <input id="pname" name="name" required maxLength={120} autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="pemail" className="label">Email *</label>
          <input id="pemail" name="email" type="email" required maxLength={320} autoComplete="email" className="field" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="pphone" className="label">Phone {currency === 'UGX' && '(Mobile Money number)'}</label>
          <input id="pphone" name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="+256 7XX XXX XXX" className="field" />
        </div>
      </div>
      {error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700" role="alert">{error}</p>}
      <button type="submit" className="btn-primary w-full" disabled={busy}>
        <Lock className="h-4 w-4" /> {busy ? 'Opening secure checkout…' : 'Continue to secure payment'}
      </button>
      <p className="text-xs text-ink-muted">
        You will be taken to Flutterwave’s secure page to pay. We never see your card number or Mobile Money PIN.
      </p>
    </form>
  );
}

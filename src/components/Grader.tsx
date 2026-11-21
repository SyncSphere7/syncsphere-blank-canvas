'use client';

import { useState, type FormEvent } from 'react';
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react';
import clsx from 'clsx';
import { whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

type Finding = { severity: 'critical' | 'warning' | 'info'; message: string };
type Result = { url: string; score: number; issues: Finding[]; strengths: string[] };

const sev = {
  critical: { Icon: XCircle, cls: 'text-red-600' },
  warning: { Icon: AlertTriangle, cls: 'text-amber-600' },
  info: { Icon: Info, cls: 'text-brand' },
};

export function Grader() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [emailState, setEmailState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function run(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = String(new FormData(e.currentTarget).get('url') ?? '');
    setBusy(true);
    setError('');
    setResult(null);
    setEmailState('idle');
    try {
      const res = await fetch('/api/grader', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url }) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Something went wrong.');
      setResult(json as Result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  }

  async function sendReport(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!result) return;
    const f = new FormData(e.currentTarget);
    setEmailState('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'website-grader',
        name: f.get('name'),
        email: f.get('email'),
        phone: f.get('phone'),
        website: '',
        message: `Website grader: ${result.url} scored ${result.score}/100.\nIssues:\n- ${result.issues.map((i) => i.message).join('\n- ') || 'none'}`,
      }),
    }).catch(() => null);
    setEmailState(res?.ok ? 'sent' : 'error');
  }

  const color = result ? (result.score >= 80 ? 'text-whatsapp' : result.score >= 50 ? 'text-amber-600' : 'text-red-600') : '';

  return (
    <div className="space-y-8">
      <form onSubmit={run} className="card flex flex-col gap-3 sm:flex-row">
        <label htmlFor="url" className="sr-only">Website address</label>
        <input id="url" name="url" required placeholder="yourbusiness.co.ug" className="field flex-1" inputMode="url" autoComplete="url" />
        <button type="submit" className="btn-primary" disabled={busy}>{busy ? 'Checking…' : 'Check my website'}</button>
      </form>

      {error && <p className="rounded-xl bg-red-50 p-4 text-sm text-red-700" role="alert">{error}</p>}

      {result && (
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]" aria-live="polite">
          <div className="card text-center">
            <p className="text-sm text-ink-muted break-all">{result.url}</p>
            <p className={clsx('mt-4 text-7xl font-extrabold', color)}>{result.score}</p>
            <p className="text-ink-soft">out of 100</p>
            <a href={whatsappLink(`Hello SyncSphere, my website ${result.url} scored ${result.score}/100 on your grader. Can you help?`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6 w-full">
              <WhatsAppIcon className="h-4 w-4" /> Get help fixing it
            </a>
          </div>
          <div className="space-y-6">
            {result.issues.length > 0 && (
              <div className="card">
                <h2 className="font-bold">What to fix</h2>
                <ul className="mt-4 space-y-3">
                  {result.issues.map((i) => {
                    const { Icon, cls } = sev[i.severity];
                    return (
                      <li key={i.message} className="flex gap-3 text-sm text-ink-soft">
                        <Icon className={clsx('mt-0.5 h-5 w-5 shrink-0', cls)} aria-label={i.severity} />
                        {i.message}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {result.strengths.length > 0 && (
              <div className="card">
                <h2 className="font-bold">What’s working</h2>
                <ul className="mt-4 space-y-3">
                  {result.strengths.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-ink-soft"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-whatsapp" aria-hidden="true" />{s}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-2xl bg-surface p-6">
              {emailState === 'sent' ? (
                <p className="font-semibold">Thanks — we’ll send you suggestions for improving your score.</p>
              ) : (
                <form onSubmit={sendReport} className="space-y-3">
                  <p className="font-bold">Want free advice on fixing these?</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <input name="name" required maxLength={120} placeholder="Your name" aria-label="Your name" className="field" />
                    <input name="email" type="email" required maxLength={320} placeholder="Email" aria-label="Email" className="field" />
                    <input name="phone" type="tel" maxLength={40} placeholder="WhatsApp (optional)" aria-label="WhatsApp number" className="field" />
                  </div>
                  <button type="submit" className="btn-primary" disabled={emailState === 'sending'}>{emailState === 'sending' ? 'Sending…' : 'Send me advice'}</button>
                  {emailState === 'error' && <p className="text-sm text-red-700">That didn’t go through. Please try WhatsApp instead.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

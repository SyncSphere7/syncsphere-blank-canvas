'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { services } from '@/lib/content';
import { whatsappLink } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formType: 'contact' }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || 'Something went wrong.');
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="card text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-whatsapp" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold">Thank you — we’ve received your message</h2>
        <p className="mt-2 text-ink-soft">We’ll reply within one working day. For anything urgent, message us on WhatsApp.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">Your name *</label>
          <input id="name" name="name" required maxLength={120} autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="email" className="label">Email *</label>
          <input id="email" name="email" type="email" required maxLength={320} autoComplete="email" className="field" />
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="+256 7XX XXX XXX" className="field" />
        </div>
        <div>
          <label htmlFor="company" className="label">Business name</label>
          <input id="company" name="company" maxLength={160} autoComplete="organization" className="field" />
        </div>
        <div>
          <label htmlFor="service" className="label">What do you need?</label>
          <select id="service" name="service" className="field" defaultValue="">
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="market" className="label">Where is your business?</label>
          <select id="market" name="market" className="field" defaultValue="Uganda">
            <option>Uganda</option>
            <option>Elsewhere in East Africa</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label">Tell us a little about your business and goals *</label>
        <textarea id="message" name="message" required maxLength={2000} rows={5} className="field" />
      </div>
      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {status === 'error' && (
        <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700" role="alert">
          {error} You can also reach us on{' '}
          <a className="font-semibold underline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
      )}
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="text-xs text-ink-muted">We only use your details to reply to you. See our <a href="/privacy-policy" className="underline">privacy policy</a>.</p>
    </form>
  );
}

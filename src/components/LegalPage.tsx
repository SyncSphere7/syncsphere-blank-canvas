import type { ReactNode } from 'react';
import { site } from '@/lib/site';

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-ink-muted">Last updated: {updated}</p>
        <div className="prose mt-10 max-w-none prose-headings:font-extrabold prose-p:text-ink-soft prose-li:text-ink-soft prose-a:text-brand">
          {children}
          <h2>Contact</h2>
          <p>
            {site.legalName} — a limited liability company registered in {site.registration.state} (File No. {site.registration.fileNo}, EIN {site.registration.ein}).
            <br />
            Registered office: {site.registration.office}.
            <br />
            Operations: {site.kampalaAddress}.
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

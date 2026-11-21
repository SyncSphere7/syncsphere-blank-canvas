import type { Metadata } from 'next';

/** Per-page title, description, canonical URL and social preview text. */
export function pageMeta(path: string, title: string, description: string, opts: { noindex?: boolean } = {}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: 'SyncSphere', locale: 'en_UG', title, description, url: path },
    twitter: { title, description },
    ...(opts.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

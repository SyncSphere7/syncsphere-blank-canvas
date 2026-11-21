import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Consent } from '@/components/Consent';
import { JsonLd } from '@/components/ui';
import { site } from '@/lib/site';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'SyncSphere | Website Design in Uganda — Websites, WhatsApp & Marketing',
    template: '%s | SyncSphere',
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_UG',
    url: site.url,
    title: 'SyncSphere | Websites, WhatsApp automation & marketing',
    description: site.description,
  },
  twitter: { card: 'summary_large_image', site: '@syncsphereoffic' },
  icons: { icon: '/favicon.png', apple: '/syncsphere-logo.png' },
  verification: { google: site.googleSiteVerification },
};

export const viewport: Viewport = {
  themeColor: '#0055A4',
  width: 'device-width',
  initialScale: 1,
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/syncsphere-logo.png`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot 32 Lumumba Avenue',
    addressLocality: 'Kampala',
    addressCountry: 'UG',
  },
  areaServed: ['Uganda', 'East Africa', 'United States', 'United Kingdom'],
  priceRange: 'UGX 1,800,000+',
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <JsonLd data={organization} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <Consent />
      </body>
    </html>
  );
}

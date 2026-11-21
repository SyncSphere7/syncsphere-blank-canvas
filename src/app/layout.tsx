import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Archivo, Figtree, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileDock } from '@/components/MobileDock';
import { Consent } from '@/components/Consent';
import { JsonLd } from '@/components/ui';
import { site } from '@/lib/site';

const sans = Figtree({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-display', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'SyncSphere | Websites, Apps & AI for Ugandan Businesses',
    template: '%s | SyncSphere',
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_UG',
    url: site.url,
    title: 'SyncSphere | Websites, apps & AI for Ugandan businesses',
    description: site.description,
  },
  twitter: { card: 'summary_large_image', site: '@syncsphereoffic' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  verification: { google: site.googleSiteVerification },
};

export const viewport: Viewport = {
  themeColor: '#1D130D',
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
    streetAddress: '4th Floor, Acacia Mall, Plot 14-18 Cooper Road',
    addressLocality: 'Kampala',
    addressCountry: 'UG',
  },
  areaServed: ['Uganda', 'East Africa', 'United States', 'United Kingdom'],
  priceRange: 'UGX 1,800,000+',
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col pb-[76px] font-sans lg:pb-0">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2">
          Skip to content
        </a>
        <JsonLd data={organization} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileDock />
        <Consent />
      </body>
    </html>
  );
}

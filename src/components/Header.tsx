'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/international', label: 'International' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="SyncSphere home">
          <Image src="/syncsphere-logo.png" alt="" width={36} height={36} priority />
          <span className="text-lg font-extrabold tracking-tight text-ink">SyncSphere</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                pathname?.startsWith(item.href) ? 'text-brand' : 'text-ink-soft hover:text-ink',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/contact" className="btn-outline py-2.5">
            Contact
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-2.5">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-white lg:hidden" aria-label="Mobile">
          <div className="container flex flex-col py-3">
            {[...nav, { href: '/contact', label: 'Contact' }].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-2 py-3 text-base font-medium text-ink">
                {item.label}
              </Link>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-2">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

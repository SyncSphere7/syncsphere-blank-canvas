'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { site, whatsappLink } from '@/lib/site';
import { LogoMark } from './Logo';

const nav = [
  { href: '/services/websites', label: 'Websites' },
  { href: '/apps', label: 'Apps' },
  { href: '/ai', label: 'AI' },
  { href: '/pricing', label: 'Prices' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while the mobile menu is open; close it with Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-bark text-cream">
      <div className="container flex h-[72px] items-center justify-between gap-6 border-b border-cream/15">
        <Link href="/" className="flex items-center gap-2.5" aria-label="SyncSphere home">
          <LogoMark className="h-7 w-7" />
          <span className="font-display text-[25px] font-extrabold uppercase leading-none tracking-[0.01em]" style={{ fontStretch: '70%', fontVariationSettings: "'wdth' 70" }}>
            SyncSphere
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx('link-grow text-[15px] transition-colors', pathname?.startsWith(item.href) ? 'text-cream' : 'text-cream/70 hover:text-cream')}
              aria-current={pathname?.startsWith(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden items-center gap-2.5 rounded-full bg-cream py-1.5 pl-5 pr-1.5 text-[15px] font-semibold text-ink lg:inline-flex"
        >
          Get a quote
          <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-bright text-cream transition-transform duration-300 ease-out group-hover:-rotate-45">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>

        <button
          type="button"
          className="-mr-2 rounded-full p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="h-[calc(100dvh-72px)] overflow-y-auto bg-bark lg:hidden" aria-label="Mobile">
          <div className="container flex flex-col py-6">
            {[...nav, { href: '/international', label: 'International' }, { href: '/blog', label: 'Blog' }, { href: '/contact', label: 'Contact' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display-xl border-b border-cream/15 py-3 text-[44px] text-cream transition-colors hover:text-brand-bright"
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-cream/60">WhatsApp or call</p>
            <a href={site.phoneHref} className="mt-1 text-xl font-semibold">{site.phone}</a>
          </div>
        </nav>
      )}
    </header>
  );
}

import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';
import { services, industries } from '@/lib/content';
import { CookieSettingsButton } from './Consent';

const label = 'font-mono text-xs uppercase tracking-[0.12em] text-cream/70';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-cream">
      <div className="container pb-10 pt-16 sm:pt-20">
        <p className={label}>WhatsApp or call</p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="display-xl mt-3 block whitespace-nowrap text-[clamp(40px,10.4vw,168px)] tabular-nums transition-colors hover:text-bark"
        >
          {site.phone}
        </a>

        <div className="mt-14 grid gap-10 border-t-2 border-cream pt-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className={label}>Visit or write</p>
            <p className="mt-3 font-semibold">{site.kampalaAddress}</p>
            <a className="mt-2 block font-semibold hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="mt-1 block font-semibold hover:underline" href={site.phoneHref}>{site.phone}</a>
          </div>

          <div>
            <p className={label}>Services</p>
            <ul className="mt-3 space-y-1.5">
              {services.map((s) => (
                <li key={s.slug}><Link className="hover:underline" href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={label}>Industries</p>
            <ul className="mt-3 space-y-1.5">
              {industries.map((i) => (
                <li key={i.slug}><Link className="hover:underline" href={`/industries/${i.slug}`}>{i.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className={label}>Company</p>
            <ul className="mt-3 space-y-1.5">
              <li><Link className="hover:underline" href="/about">About</Link></li>
              <li><Link className="hover:underline" href="/pricing">Prices</Link></li>
              <li><Link className="hover:underline" href="/international">International clients</Link></li>
              <li><Link className="hover:underline" href="/blog">Blog</Link></li>
              <li><Link className="hover:underline" href="/tools/website-grader">Free website grader</Link></li>
              <li><Link className="hover:underline" href="/pay">Pay an invoice</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            </ul>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.08em]">
              {[
                { href: site.social.facebook, label: 'Facebook' },
                { href: site.social.instagram, label: 'Instagram' },
                { href: site.social.linkedin, label: 'LinkedIn' },
                { href: site.social.x, label: 'X' },
              ].map((s) => (
                <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/25 pt-6 text-xs text-cream/75 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl space-y-1">
            <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
            <p>
              {site.legalName} is a limited liability company registered in {site.registration.state} (File No. {site.registration.fileNo}).
              Registered office: {site.registration.office}. Operations: {site.kampalaAddress}.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link className="hover:text-cream" href="/privacy-policy">Privacy</Link>
            <Link className="hover:text-cream" href="/terms-of-service">Terms</Link>
            <Link className="hover:text-cream" href="/refund-policy">Refunds</Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}

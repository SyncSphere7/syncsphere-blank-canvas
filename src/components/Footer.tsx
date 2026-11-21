import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';
import { services, industries } from '@/lib/content';
import { CookieSettingsButton } from './Consent';

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold text-white">SyncSphere</p>
          <p className="mt-3 text-sm leading-relaxed">
            Websites, WhatsApp automation and digital marketing for businesses in Uganda and around the world.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {site.kampalaAddress}</li>
            <li><a className="flex gap-2 hover:text-white" href={site.phoneHref}><Phone className="mt-0.5 h-4 w-4" /> {site.phone}</a></li>
            <li><a className="flex gap-2 hover:text-white" href={`mailto:${site.email}`}><Mail className="mt-0.5 h-4 w-4" /> {site.email}</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link className="hover:text-white" href={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Industries</p>
          <ul className="mt-4 space-y-2 text-sm">
            {industries.map((i) => (
              <li key={i.slug}><Link className="hover:text-white" href={`/industries/${i.slug}`}>{i.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/about">About</Link></li>
            <li><Link className="hover:text-white" href="/pricing">Pricing</Link></li>
            <li><Link className="hover:text-white" href="/international">International clients</Link></li>
            <li><Link className="hover:text-white" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-white" href="/tools/website-grader">Free website grader</Link></li>
            <li><Link className="hover:text-white" href="/pay">Pay an invoice</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
            <li><a className="hover:text-white" href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
          <div className="mt-5 flex gap-2">
            {[
              { href: site.social.facebook, Icon: Facebook, label: 'Facebook' },
              { href: site.social.instagram, Icon: Instagram, label: 'Instagram' },
              { href: site.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: site.social.x, Icon: Twitter, label: 'X' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full border border-white/15 p-2 hover:border-white/40 hover:text-white">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs text-white/60 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
            <p>
              {site.legalName} is a limited liability company registered in {site.registration.state} (File No. {site.registration.fileNo}).
              Registered office: {site.registration.office}. Operations: {site.kampalaAddress}.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link className="hover:text-white" href="/privacy-policy">Privacy</Link>
            <Link className="hover:text-white" href="/terms-of-service">Terms</Link>
            <Link className="hover:text-white" href="/refund-policy">Refunds</Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}

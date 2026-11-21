import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/ui';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { pageMeta } from '@/lib/meta';
import { site, whatsappLink } from '@/lib/site';

export const metadata = pageMeta(
  '/contact',
  'Contact SyncSphere — WhatsApp, Phone or Email',
  'Talk to SyncSphere about a website, WhatsApp automation or marketing. WhatsApp or call +256 757 727 965, or send us a message. Office on Lumumba Avenue, Kampala.',
);

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s talk about your business" intro="The fastest way to reach us is WhatsApp. Prefer email? Use the form and we’ll reply within one working day." />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full py-4 text-base">
              <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <ul className="space-y-4 rounded-2xl bg-surface p-6 text-sm">
              <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-brand" /><a href={site.phoneHref} className="font-semibold">{site.phone}</a></li>
              <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-brand" /><a href={`mailto:${site.email}`} className="font-semibold">{site.email}</a></li>
              <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-brand" /><span>{site.kampalaAddress}<br /><span className="text-ink-muted">Visits by appointment</span></span></li>
              <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-brand" /><span>{site.hours}</span></li>
            </ul>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="SyncSphere office on Lumumba Avenue, Kampala"
                src="https://www.google.com/maps?q=Lumumba+Avenue,+Kampala,+Uganda&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

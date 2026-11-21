import Link from 'next/link';
import { Phone, Tag } from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

/** Bottom action bar on phones and tablets: the three things visitors most want to do. */
export function MobileDock() {
  const item = 'flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl text-xs font-semibold';
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-ink/15 bg-cream px-3 pt-2 text-ink lg:hidden"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <a href={site.phoneHref} className={item}>
        <Phone className="h-5 w-5" aria-hidden="true" /> Call
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${item} bg-brand text-cream`}>
        <WhatsAppIcon className="h-5 w-5" /> WhatsApp
      </a>
      <Link href="/pricing" className={item}>
        <Tag className="h-5 w-5" aria-hidden="true" /> Prices
      </Link>
    </nav>
  );
}

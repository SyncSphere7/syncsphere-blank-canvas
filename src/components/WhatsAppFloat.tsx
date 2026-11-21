import { whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SyncSphere on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

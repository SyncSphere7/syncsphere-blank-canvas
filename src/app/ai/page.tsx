import { PillarPage } from '@/components/PillarPage';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta(
  '/ai',
  'AI for Businesses in Uganda — WhatsApp Chatbots, Document AI, Training',
  'AI chatbots that answer customers on WhatsApp from UGX 2,500,000, AI that reads invoices and receipts, and AI training for your staff. Kampala team, pay with Mobile Money.',
);

export default function AiPage() {
  return (
    <PillarPage
      pillar="ai"
      eyebrow="AI · For Ugandan businesses"
      title="Put AI to work in your business"
      intro="AI that answers your customers on WhatsApp, reads your invoices and receipts, and makes your team faster. Practical, priced in shillings, and set up by a Kampala team you can visit."
      cta="Hello SyncSphere, I'd like to know how AI can help my business."
    />
  );
}

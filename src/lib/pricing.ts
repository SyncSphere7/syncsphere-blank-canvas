/**
 * All prices live here so the pricing page, service pages and FAQ agree.
 * Uganda prices are in UGX, international prices in USD.
 */

export type Market = 'ug' | 'intl';

export type Plan = {
  id: string;
  name: string;
  price: string;
  note: string;
  delivery: string;
  features: string[];
  featured?: boolean;
};

export type Retainer = { name: string; price: string; period: string; features: string[] };
export type AddOn = { name: string; price: string; detail: string };

export const websitePlans: Record<Market, Plan[]> = {
  ug: [
    {
      id: 'starter',
      name: 'Starter',
      price: 'UGX 1,800,000',
      note: 'For small businesses getting online',
      delivery: 'Live in 5–7 working days',
      features: [
        'Up to 5 pages',
        'Mobile-friendly design',
        '.com or .co.ug domain + SSL for the first year',
        'WhatsApp button and contact form',
        'Google Maps and basic SEO',
        '30 days of free fixes after launch',
      ],
    },
    {
      id: 'business',
      name: 'Business',
      price: 'UGX 4,000,000',
      note: 'For growing companies that need to win trust',
      delivery: 'Live in about 2 weeks',
      featured: true,
      features: [
        'Up to 10 pages, custom design',
        'News or blog section you can update yourself',
        'Google Business Profile set up',
        'WhatsApp chat + lead form sent to your email',
        'Analytics and full on-page SEO',
        'Training session for your team',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 'From UGX 9,000,000',
      note: 'Online shops, bookings and custom systems',
      delivery: 'Timeline agreed per project',
      features: [
        'Online shop or booking system',
        'Mobile Money and card payments',
        'Integrations (CRM, email, inventory)',
        'Multiple languages on request',
        'Advanced SEO and structured data',
        'Priority support for 3 months',
      ],
    },
  ],
  intl: [
    {
      id: 'starter',
      name: 'Starter',
      price: '$3,500',
      note: 'A professional presence, fast',
      delivery: 'From 48 hours',
      features: [
        'Up to 3 pages',
        'Responsive design',
        'Domain (.com) + SSL for the first year',
        'Basic SEO setup',
        'Contact form',
      ],
    },
    {
      id: 'business',
      name: 'Professional',
      price: '$6,500',
      note: 'Our most popular package',
      delivery: 'About 5 working days',
      featured: true,
      features: [
        'Up to 7 pages, custom design',
        'Blog / CMS',
        'Domain (.com) + SSL for the first year',
        'Advanced SEO',
        'Analytics setup',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$10,000+',
      note: 'Full platforms and integrations',
      delivery: 'Custom timeline',
      features: [
        '7+ pages, premium custom design',
        'Full SEO + structured data',
        'Animations and interactions',
        'Integrations (CRM, booking, payments)',
      ],
    },
  ],
};

export const retainers: Record<Market, Retainer[]> = {
  ug: [
    {
      name: 'Website care',
      price: 'UGX 150,000',
      period: 'per month',
      features: ['Security updates and backups', 'Uptime monitoring', 'Small text and photo changes', 'Hosting kept running'],
    },
    {
      name: 'Social media',
      price: 'UGX 700,000',
      period: 'per month',
      features: ['3–4 posts per week', '2 platforms', 'Graphics and captions', 'Monthly report'],
    },
    {
      name: 'Social media plus',
      price: 'UGX 1,200,000',
      period: 'per month',
      features: ['5 posts per week + stories', 'Up to 3 platforms', 'Replies to comments and messages', 'Monthly strategy call'],
    },
  ],
  intl: [
    {
      name: 'Maintenance',
      price: '$199',
      period: 'per month',
      features: ['Security updates', 'Weekly backups', 'Uptime monitoring', '1 hour of support'],
    },
    {
      name: 'Social media',
      price: '$999',
      period: 'per month',
      features: ['4 posts per week', '2 platforms', 'Content calendar', 'Monthly report'],
    },
    {
      name: 'Email marketing',
      price: '$599',
      period: 'per month',
      features: ['4 newsletters per month', 'Automation sequences', 'List management', 'Monthly analytics'],
    },
    {
      name: 'Full marketing',
      price: '$1,499',
      period: 'per month',
      features: ['Social media + email', 'Monthly strategy call', 'Priority support', 'Quarterly review'],
    },
  ],
};

export const addOns: Record<Market, AddOn[]> = {
  ug: [
    { name: 'WhatsApp Business automation', price: 'From UGX 3,000,000', detail: 'Catalogue, quick replies, auto-answers and lead capture.' },
    { name: 'Business automation', price: 'From UGX 3,000,000', detail: 'Forms, invoices, reminders and reports that run themselves.' },
    { name: 'Brand identity', price: 'Quoted per project', detail: 'Logo, colours, fonts and a simple brand guide.' },
    { name: 'Google Business Profile', price: 'Included in Business', detail: 'Or set up on its own, quoted per location.' },
  ],
  intl: [
    { name: 'Brand identity kit', price: '$799', detail: 'Logo, colour palette, typography and brand guide.' },
    { name: 'E-commerce setup', price: '$3,500', detail: 'Up to 50 products, payments and order management.' },
    { name: 'Business automation', price: 'From $2,500', detail: 'Up to 3 workflows, CRM integration, triggers.' },
    { name: 'Extra pages', price: '$300 each', detail: 'Added to any website package.' },
  ],
};

export const paymentTerms: Record<Market, string[]> = {
  ug: [
    'Projects under UGX 5,000,000: 60% to start, 40% at launch.',
    'Larger projects: 50% to start, 25% at design approval, 25% at launch.',
    'Pay with MTN Mobile Money, Airtel Money, card or bank transfer.',
  ],
  intl: [
    '50% to start, 25% at design approval, 25% at launch.',
    'Pay by credit or debit card, US ACH or bank transfer.',
  ],
};

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readTime: string;
  category: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: 'website-cost-uganda',
    title: 'How much does a website cost in Uganda?',
    description:
      'What you should expect to pay for a business website in Uganda, what changes the price, and how to avoid paying twice.',
    date: '2026-11-20',
    readTime: '5 min',
    category: 'Websites',
    body: [
      { type: 'p', text: 'Ask five web designers in Kampala for a price and you will get five very different answers. That is because "a website" can mean anything from a single page built on a free template to a full online shop with Mobile Money payments. Here is how to think about the cost, and what you should get for your money.' },
      { type: 'h2', text: 'What changes the price' },
      { type: 'ul', items: [
        'Number of pages — a 5-page site is very different from a 30-page one.',
        'Custom design versus a template that many other businesses also use.',
        'Features such as online booking, an online shop or Mobile Money payments.',
        'Who writes the text and provides the photos.',
        'Whether hosting, the domain, SSL and support are included.',
      ] },
      { type: 'h2', text: 'Our prices' },
      { type: 'p', text: 'We publish our prices so you can plan. A Starter website (up to 5 pages, domain and SSL for the first year, WhatsApp button, Google Maps) starts at UGX 1,800,000. A Business website with custom design, a news section you can update and Google Business Profile setup starts at UGX 4,000,000. Online shops, booking systems and custom platforms start at UGX 9,000,000.' },
      { type: 'h2', text: 'Watch out for these' },
      { type: 'ul', items: [
        'A very cheap price where the designer keeps the domain in their own name. Make sure the domain is registered to your business.',
        'No mention of what happens after launch. Ask who fixes problems and what it costs.',
        'A website that looks fine on a laptop but breaks on a phone. Most of your customers will see it on a phone.',
      ] },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'Pay for what your business needs now, from someone who will still answer your call next year. If you want a fixed quote, send us a message on WhatsApp — it is free and there is no obligation.' },
    ],
  },
  {
    slug: 'whatsapp-business-setup',
    title: 'Is your WhatsApp Business costing you customers?',
    description:
      'Simple WhatsApp Business settings that help Ugandan businesses reply faster, look professional and stop losing enquiries.',
    date: '2026-11-18',
    readTime: '4 min',
    category: 'WhatsApp',
    body: [
      { type: 'p', text: 'For many businesses in Uganda, WhatsApp is where sales happen. But a busy phone, a personal profile picture and slow replies can quietly send customers to a competitor. The good news: most of the fixes are free.' },
      { type: 'h2', text: 'Five things to set up today' },
      { type: 'ul', items: [
        'Use the WhatsApp Business app, not the personal app, on your business number.',
        'Add your logo, business hours, address and website to your profile.',
        'Create a catalogue with your main products or services and their prices.',
        'Write a greeting message and an away message so nobody is left without a reply.',
        'Save quick replies for the questions you answer every day — location, prices, delivery.',
      ] },
      { type: 'h2', text: 'When to go further' },
      { type: 'p', text: 'If several people share one WhatsApp number, or you get more messages than you can answer, it may be time for automation: automatic answers to common questions, leads saved to a spreadsheet, and messages shared between staff. That needs the WhatsApp Business Platform and a careful setup.' },
      { type: 'h2', text: 'Need help?' },
      { type: 'p', text: 'We set up WhatsApp Business for shops, hotels, tour operators and schools. Send us a message and we will tell you what would make the biggest difference for your business.' },
    ],
  },
  {
    slug: 'google-business-profile-kampala',
    title: 'How to get your business on Google Maps in Kampala',
    description:
      'A step-by-step guide to setting up a Google Business Profile so customers near you can find your shop, office or hotel.',
    date: '2026-11-15',
    readTime: '5 min',
    category: 'Google',
    body: [
      { type: 'p', text: 'When someone searches "pharmacy near me" or "hotel in Entebbe", Google shows a map with a few businesses. Those listings come from Google Business Profile — and it is free.' },
      { type: 'h2', text: 'Step by step' },
      { type: 'ul', items: [
        'Go to google.com/business and sign in with a Google account you control (not a staff member’s personal account).',
        'Search for your business. If it already exists, claim it; if not, create it.',
        'Choose the right main category — this matters more than most people think.',
        'Add your exact location on the map, phone number, website and opening hours.',
        'Complete verification. Google may ask for a video of your premises or another check.',
        'Add real photos of your shopfront, inside, products and team.',
      ] },
      { type: 'h2', text: 'Keep it working for you' },
      { type: 'ul', items: [
        'Ask happy customers for a review, and reply to every review — good or bad.',
        'Update your hours for public holidays.',
        'Post an update or offer once or twice a month.',
      ] },
      { type: 'p', text: 'If you would rather we handle it, Google Business Profile setup is included in our Business website package.' },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export type IconName =
  | 'globe'
  | 'message'
  | 'megaphone'
  | 'palette'
  | 'map'
  | 'shield'
  | 'workflow'
  | 'plane'
  | 'hotel'
  | 'heart'
  | 'school'
  | 'cart'
  | 'briefcase';

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  headline: string;
  intro: string;
  includes: string[];
  goodFor: string[];
  price: { ug: string; intl: string };
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: 'websites',
    name: 'Website design',
    icon: 'globe',
    summary: 'Fast, mobile-friendly websites that make customers trust you and contact you.',
    headline: 'A website that brings you customers, not just visitors',
    intro:
      'Most people in Uganda look you up on their phone before they call or visit. We build websites that load quickly on mobile data, look professional, and make it easy to reach you on WhatsApp, by phone or by email.',
    includes: [
      'Design made for your business, not a recycled template',
      'Works well on phones and on slow connections',
      'Domain (.com or .co.ug) and SSL for the first year',
      'WhatsApp button, click-to-call and contact form',
      'Google Maps, basic SEO and analytics',
      'Training so your team can update text and photos',
    ],
    goodFor: ['Businesses with no website yet', 'Old websites that look outdated or break on phones', 'Companies that need to look credible to bigger clients'],
    price: { ug: 'From UGX 1,800,000', intl: 'From $3,500' },
    faqs: [
      { q: 'How long does a website take?', a: 'A Starter website is usually live in 5–7 working days once we have your logo, photos and text. Business websites take about two weeks.' },
      { q: 'Do I own the website?', a: 'Yes. Once the final payment is made, the domain, design and content are yours.' },
      { q: 'Can I update it myself?', a: 'Business and Premium websites include an easy editor and a training session. On Starter, we make small changes for you under the website care plan.' },
    ],
  },
  {
    slug: 'whatsapp-automation',
    name: 'WhatsApp Business automation',
    icon: 'message',
    summary: 'Answer customers instantly, share your catalogue and never lose a lead in a busy chat.',
    headline: 'Turn WhatsApp into your best salesperson',
    intro:
      'Your customers already message you on WhatsApp. We set up WhatsApp Business properly — catalogue, quick replies, greeting and away messages — and, where it makes sense, automated answers and lead capture so every enquiry gets a reply.',
    includes: [
      'WhatsApp Business profile, catalogue and labels set up',
      'Greeting, away and quick-reply messages written for you',
      'Automatic answers to common questions (prices, location, hours)',
      'Leads saved to a sheet or CRM so nobody is forgotten',
      'WhatsApp buttons and QR codes for your website and shop',
      'Staff training on handling chats',
    ],
    goodFor: ['Shops and restaurants', 'Tour operators and hotels', 'Any business getting more messages than it can answer'],
    price: { ug: 'From UGX 3,000,000', intl: 'Quoted per project' },
    faqs: [
      { q: 'Do I need the WhatsApp Business API?', a: 'Not always. Many businesses only need the free WhatsApp Business app set up well. We recommend the API only when you have high message volumes or need automation.' },
      { q: 'Can I keep my current number?', a: 'Usually yes. We will check your setup and tell you before making any change.' },
    ],
  },
  {
    slug: 'social-media',
    name: 'Social media management',
    icon: 'megaphone',
    summary: 'Regular, good-looking posts on Facebook, Instagram, TikTok or LinkedIn — done for you.',
    headline: 'Show up every week without doing it yourself',
    intro:
      'Posting consistently is hard when you are running a business. We plan, design and publish your posts, reply to comments, and send you a simple report each month.',
    includes: [
      'Monthly content plan you approve first',
      'Designed graphics and written captions',
      'Posting on 2–3 platforms',
      'Replies to comments and messages (Plus plan)',
      'Monthly report: reach, followers, enquiries',
    ],
    goodFor: ['Businesses whose pages have gone quiet', 'New brands building a following', 'Owners with no time to post'],
    price: { ug: 'From UGX 700,000 / month', intl: 'From $999 / month' },
    faqs: [
      { q: 'Is there a minimum contract?', a: 'We ask for three months, because social media takes time to show results. After that it is month to month.' },
      { q: 'Is advertising included?', a: 'Ad spend is not included. We can run paid campaigns for you, with the budget paid directly to Meta or Google.' },
    ],
  },
  {
    slug: 'branding',
    name: 'Brand identity',
    icon: 'palette',
    summary: 'A logo, colours and style that make your business look established.',
    headline: 'Look like the business you want to become',
    intro:
      'A clear brand makes customers trust you faster. We design your logo and a simple set of rules — colours, fonts and examples — so everything you print or post looks consistent.',
    includes: ['3 logo concepts and revisions', 'Colour palette and fonts', 'Brand guide (PDF)', 'Business card and letterhead design', 'Social media profile images'],
    goodFor: ['New businesses', 'Companies with a logo that no longer fits', 'Businesses preparing for bigger clients or funding'],
    price: { ug: 'Quoted per project', intl: '$799' },
    faqs: [{ q: 'Do I get the original files?', a: 'Yes — vector files (SVG, PDF) and PNGs for web and print.' }],
  },
  {
    slug: 'google-business-profile',
    name: 'Google Business Profile',
    icon: 'map',
    summary: 'Appear on Google Maps and in "near me" searches with the right details and photos.',
    headline: 'Get found on Google Maps',
    intro:
      'When someone searches for a business near them, Google shows a map with a few listings. We set up or fix your Google Business Profile so you appear with correct hours, photos, services and a link to your website and WhatsApp.',
    includes: ['Profile created or claimed and verified', 'Categories, services, hours and photos', 'Website and WhatsApp links', 'A simple process for collecting reviews', 'Tips for posting updates'],
    goodFor: ['Shops, clinics, salons, restaurants and hotels', 'Any business with a physical location'],
    price: { ug: 'Included in Business websites', intl: 'Quoted per location' },
    faqs: [{ q: 'How long does verification take?', a: 'It depends on Google. Some profiles verify the same day; others need a video or postcard check that can take a few weeks.' }],
  },
  {
    slug: 'maintenance',
    name: 'Website care',
    icon: 'shield',
    summary: 'We keep your website online, secure, backed up and up to date.',
    headline: 'Your website, looked after every month',
    intro:
      'Websites need care: updates, backups and the occasional fix. Our care plan handles it so your site stays fast and safe, and you have someone to call when you need a change.',
    includes: ['Hosting kept running', 'Security updates and backups', 'Uptime monitoring', 'Small text and photo changes each month', 'Help by WhatsApp or phone'],
    goodFor: ['Any business that does not have its own developer'],
    price: { ug: 'From UGX 150,000 / month', intl: '$199 / month' },
    faqs: [{ q: 'Can you look after a website you did not build?', a: 'Often yes. We review it first and tell you honestly whether it is worth maintaining or better to rebuild.' }],
  },
  {
    slug: 'business-automation',
    name: 'Business automation',
    icon: 'workflow',
    summary: 'Let forms, invoices, reminders and reports run themselves.',
    headline: 'Stop doing the same task by hand every day',
    intro:
      'We connect the tools you already use — forms, email, spreadsheets, accounting and WhatsApp — so repetitive work happens automatically and nothing falls through the cracks.',
    includes: ['A review of where your team loses time', 'Up to 3 automated workflows to start', 'Lead and enquiry tracking', 'Automatic invoices, receipts and reminders', 'Handover and documentation'],
    goodFor: ['Growing teams buried in admin', 'Businesses losing track of enquiries or payments'],
    price: { ug: 'From UGX 3,000,000', intl: 'From $2,500' },
    faqs: [{ q: 'What tools do you work with?', a: 'Google Workspace, Microsoft 365, WhatsApp, common CRMs and accounting tools, and most services that offer an API. We will tell you upfront if something cannot be connected.' }],
  },
];

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  headline: string;
  intro: string;
  challenges: string[];
  build: string[];
  plan: string;
};

export const industries: Industry[] = [
  {
    slug: 'tourism-safari',
    name: 'Tourism & safari',
    icon: 'plane',
    summary: 'Websites that win bookings from international travellers.',
    headline: 'Websites for tour operators that turn browsers into bookings',
    intro:
      'Travellers compare several operators before they book a gorilla trek or a safari. A fast, trustworthy website with clear itineraries, prices and easy payment helps them choose you.',
    challenges: ['Competing with large international booking sites', 'Travellers need to trust you before paying a deposit', 'Enquiries arrive across email, WhatsApp and social media'],
    build: ['Itinerary and package pages with photos and prices', 'Enquiry and booking forms that go straight to WhatsApp and email', 'Card payments for international deposits', 'Pages written to rank for the trips you sell', 'Reviews from TripAdvisor or Google shown on the site'],
    plan: 'Business or Premium',
  },
  {
    slug: 'hotels-hospitality',
    name: 'Hotels & hospitality',
    icon: 'hotel',
    summary: 'More direct bookings and fewer commissions.',
    headline: 'Get more direct bookings for your hotel or lodge',
    intro:
      'Every booking that comes directly to you saves a commission. We build hotel and lodge websites with clear rooms, rates and photos, plus booking and payment options that guests trust.',
    challenges: ['High commissions on booking platforms', 'Guests asking the same questions again and again', 'Out-of-date photos and rates online'],
    build: ['Room and rate pages with galleries', 'Booking requests or live availability', 'Mobile Money and card deposits', 'WhatsApp quick answers for common questions', 'Google Business Profile and Maps listing'],
    plan: 'Business or Premium',
  },
  {
    slug: 'ngos',
    name: 'NGOs & foundations',
    icon: 'heart',
    summary: 'Show your impact to donors and partners.',
    headline: 'Websites that help NGOs earn donor trust',
    intro:
      'Donors and partners check your website before they fund you. We build clear, credible websites that show your mission, programmes, results and team — and make it easy to donate or get in touch.',
    challenges: ['Showing impact clearly to international donors', 'Keeping news and reports up to date', 'Accepting donations from abroad'],
    build: ['Programme, impact and report pages', 'News section your team can update', 'Online donations by card and Mobile Money', 'Downloadable reports and documents', 'Fast loading for supporters in the field'],
    plan: 'Business',
  },
  {
    slug: 'schools',
    name: 'Schools',
    icon: 'school',
    summary: 'Admissions, fees information and news parents can find.',
    headline: 'A school website parents can rely on',
    intro:
      'Parents want to see your facilities, results, fees and how to apply. We build school websites that answer those questions and keep parents informed with news and announcements.',
    challenges: ['Parents calling the office for basic information', 'Admissions handled on paper', 'No easy way to share news and events'],
    build: ['Admissions information and online application forms', 'Fees, term dates and requirements pages', 'News, events and photo galleries', 'Fee payments by Mobile Money', 'WhatsApp contact for the school office'],
    plan: 'Business',
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & online shops',
    icon: 'cart',
    summary: 'Sell online with Mobile Money and delivery.',
    headline: 'Sell online across Uganda — and beyond',
    intro:
      'We build online shops that work the way Ugandan customers buy: browse on the phone, pay with Mobile Money or card, and confirm on WhatsApp.',
    challenges: ['Customers asking for prices one by one on WhatsApp', 'Taking payments and tracking orders by hand', 'Competing with larger online stores'],
    build: ['Product catalogue with prices and stock', 'Checkout with MTN Mobile Money, Airtel Money and card', 'Order notifications by WhatsApp and email', 'Delivery zones and fees', 'WhatsApp catalogue linked to your shop'],
    plan: 'Premium',
  },
  {
    slug: 'professional-services',
    name: 'Professional services',
    icon: 'briefcase',
    summary: 'Law firms, clinics, consultants and accountants.',
    headline: 'Look as professional online as you are in person',
    intro:
      'Clients choose lawyers, doctors, consultants and accountants they trust. A clear, professional website with your services, team and an easy way to book a consultation helps you win better clients.',
    challenges: ['Looking credible to corporate and international clients', 'Booking appointments by phone only', 'Explaining complex services simply'],
    build: ['Service and team profile pages', 'Appointment booking or consultation requests', 'Secure enquiry forms', 'Articles that show your expertise', 'Google Business Profile for each office'],
    plan: 'Business',
  },
];

export const homeFaqs: Faq[] = [
  {
    q: 'How much does a website cost in Uganda?',
    a: 'Our websites start at UGX 1,800,000 for a Starter site (up to 5 pages). Business websites start at UGX 4,000,000 and online shops or booking systems from UGX 9,000,000. You get a fixed written quote before we start.',
  },
  {
    q: 'How do I pay?',
    a: 'MTN Mobile Money, Airtel Money, card or bank transfer. Projects under UGX 5,000,000 are paid 60% to start and 40% at launch. Larger projects are paid 50% / 25% / 25%.',
  },
  {
    q: 'How fast can you deliver?',
    a: 'A Starter website is usually live in 5–7 working days after we receive your content. Business websites take about two weeks.',
  },
  {
    q: 'Do you work with clients outside Uganda?',
    a: 'Yes. We work with clients in the US, UK and elsewhere, priced in US dollars. See our International page.',
  },
  {
    q: 'Can I meet you in person?',
    a: 'Yes. Our team is in Kampala. Message us on WhatsApp to arrange a meeting or a call.',
  },
  {
    q: 'What happens after the website is live?',
    a: 'You get 30 days of free fixes. After that, our website care plan keeps it secure, backed up and up to date from UGX 150,000 per month.',
  },
];

export const processSteps = [
  { title: 'Free consultation', text: 'We talk on WhatsApp, by phone or in person about your business and what you need.' },
  { title: 'Fixed quote', text: 'You get a written quote and timeline. No surprises.' },
  { title: 'Design', text: 'We design your website and share it with you for feedback.' },
  { title: 'Build and review', text: 'We build it, you review it, and we make up to two rounds of changes.' },
  { title: 'Launch and support', text: 'We go live, train your team and fix anything for 30 days.' },
];

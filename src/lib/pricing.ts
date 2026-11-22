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
  /** Recurring fee shown under the one-off price, e.g. "+ UGX 350,000 / month". */
  monthly?: string;
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
    'Pay by bank transfer, Visa card, MTN Mobile Money or Airtel Money.',
  ],
  intl: [
    '50% to start, 25% at design approval, 25% at launch.',
    'Pay by credit or debit card, US ACH or bank transfer.',
  ],
};

/**
 * Packages for the app and AI services, keyed by service slug (see content.ts).
 * `price` is the one-off setup; `monthly` covers hosting, AI usage and support.
 */
export type PackageSlug = 'web-apps' | 'mobile-apps' | 'ai-chatbots' | 'document-ai' | 'ai-training';

export const servicePackages: Record<PackageSlug, Record<Market, Plan[]>> = {
  'web-apps': {
    ug: [
      {
        id: 'launch',
        name: 'Launch',
        price: 'From UGX 8,000,000',
        monthly: 'Care from UGX 500,000 / month',
        note: 'One focused system that does one job well',
        delivery: 'Live in 4–6 weeks',
        features: [
          'Bookings, orders, stock or a client portal',
          'Staff logins with up to 2 roles',
          'Admin dashboard and simple reports',
          'MTN MoMo, Airtel Money and card payments',
          'Works on any phone and installs like an app',
          '60 days of free fixes after launch',
        ],
      },
      {
        id: 'business',
        name: 'Business system',
        price: 'From UGX 18,000,000',
        monthly: 'Care from UGX 900,000 / month',
        note: 'School, clinic, sales or stock management',
        delivery: 'Live in 8–12 weeks',
        featured: true,
        features: [
          'Several user roles, branches and permissions',
          'Reports, exports and an owner’s dashboard',
          'SMS and WhatsApp notifications',
          'Connects to accounting, payments and your website',
          'Data moved over from your old spreadsheets',
          'Staff training and a written user guide',
        ],
      },
      {
        id: 'platform',
        name: 'Platform',
        price: 'From UGX 40,000,000',
        monthly: 'Care quoted per project',
        note: 'Software you sell to other businesses',
        delivery: 'Timeline agreed per project',
        features: [
          'Subscriptions and separate accounts per customer',
          'APIs for partners and other systems',
          'Built to grow to thousands of users',
          'Security review before launch',
          'Monitoring and backups from day one',
        ],
      },
    ],
    intl: [
      {
        id: 'launch',
        name: 'Launch',
        price: 'From $7,500',
        monthly: 'Care from $299 / month',
        note: 'A focused MVP to test your idea',
        delivery: '4–6 weeks',
        features: ['One core workflow', 'Logins and 2 user roles', 'Admin dashboard', 'Card payments', 'Installable web app (PWA)', '60 days of fixes'],
      },
      {
        id: 'business',
        name: 'Business system',
        price: 'From $18,000',
        monthly: 'Care from $599 / month',
        note: 'Internal tools and customer portals',
        delivery: '8–12 weeks',
        featured: true,
        features: ['Multiple roles and teams', 'Reports and dashboards', 'Email and SMS notifications', 'Integrations with your tools', 'Data migration', 'Training and documentation'],
      },
      {
        id: 'platform',
        name: 'Platform / SaaS',
        price: 'From $40,000',
        monthly: 'Care quoted per project',
        note: 'Multi-tenant products',
        delivery: 'Custom timeline',
        features: ['Subscriptions and multi-tenancy', 'Public and partner APIs', 'Built to scale', 'Security review', 'Monitoring and backups'],
      },
    ],
  },
  'mobile-apps': {
    ug: [
      {
        id: 'android',
        name: 'Android app',
        price: 'From UGX 15,000,000',
        monthly: 'Care from UGX 700,000 / month',
        note: 'Most phones in Uganda run Android',
        delivery: 'On Google Play in 8–10 weeks',
        features: [
          'Published on Google Play under your name',
          'Customer logins and push notifications',
          'Mobile Money and card payments',
          'Works offline and syncs when back online',
          'Admin panel to manage content and orders',
          '60 days of free fixes after launch',
        ],
      },
      {
        id: 'both',
        name: 'Android + iPhone',
        price: 'From UGX 28,000,000',
        monthly: 'Care from UGX 1,000,000 / month',
        note: 'One app on both stores',
        delivery: 'On both stores in 10–14 weeks',
        featured: true,
        features: [
          'Everything in the Android app',
          'Published on the Apple App Store too',
          'One codebase, so updates cost less',
          'Store listings, screenshots and review handled',
          'Analytics to see how customers use the app',
        ],
      },
    ],
    intl: [
      {
        id: 'android',
        name: 'Android app',
        price: 'From $12,000',
        monthly: 'Care from $399 / month',
        note: 'Fast route to market',
        delivery: '8–10 weeks',
        features: ['Google Play publishing', 'Logins and push notifications', 'Card payments', 'Offline support', 'Admin panel', '60 days of fixes'],
      },
      {
        id: 'both',
        name: 'Android + iOS',
        price: 'From $22,000',
        monthly: 'Care from $699 / month',
        note: 'Cross-platform, one codebase',
        delivery: '10–14 weeks',
        featured: true,
        features: ['Everything in Android', 'App Store publishing', 'Store listings handled', 'Analytics', 'Priority support for 3 months'],
      },
    ],
  },
  'ai-chatbots': {
    ug: [
      {
        id: 'answer',
        name: 'Answer bot',
        price: 'UGX 2,500,000',
        monthly: '+ UGX 350,000 / month',
        note: 'Replies to customer questions, day and night',
        delivery: 'Live in 1–2 weeks',
        features: [
          'Trained on your prices, services, hours and FAQs',
          'Works on WhatsApp and on your website',
          'Passes the chat to your staff when needed',
          'Up to 1,000 conversations a month included',
          'Monthly report of what customers ask most',
        ],
      },
      {
        id: 'sales',
        name: 'Sales bot',
        price: 'UGX 5,500,000',
        monthly: '+ UGX 650,000 / month',
        note: 'Takes orders and bookings, not just questions',
        delivery: 'Live in 2–3 weeks',
        featured: true,
        features: [
          'Everything in the Answer bot',
          'Shows your catalogue, menu or rooms',
          'Takes orders, bookings and appointments',
          'Sends a Mobile Money payment request',
          'Replies in English, Luganda or Swahili',
          'Up to 3,000 conversations a month included',
        ],
      },
      {
        id: 'agent',
        name: 'AI agent',
        price: 'From UGX 12,000,000',
        monthly: 'From UGX 1,200,000 / month',
        note: 'Connected to your own systems',
        delivery: 'Timeline agreed per project',
        features: [
          'Checks stock, bookings or accounts live',
          'Completes multi-step tasks on its own',
          'Understands voice notes',
          'Several numbers, branches or departments',
          'Dashboard for your team to review chats',
        ],
      },
    ],
    intl: [
      {
        id: 'answer',
        name: 'Answer bot',
        price: '$2,500',
        monthly: '+ $199 / month',
        note: '24/7 answers on WhatsApp and web',
        delivery: '1–2 weeks',
        features: ['Trained on your content', 'WhatsApp and website chat', 'Human handover', '1,000 conversations / month', 'Monthly insights report'],
      },
      {
        id: 'sales',
        name: 'Sales bot',
        price: '$5,000',
        monthly: '+ $399 / month',
        note: 'Orders, bookings and payments',
        delivery: '2–3 weeks',
        featured: true,
        features: ['Everything in Answer', 'Catalogue and bookings', 'Payment links', 'Multilingual replies', '3,000 conversations / month'],
      },
      {
        id: 'agent',
        name: 'AI agent',
        price: 'From $10,000',
        monthly: 'From $799 / month',
        note: 'Integrated with your systems',
        delivery: 'Custom timeline',
        features: ['Live data from your systems', 'Multi-step tasks', 'Voice notes', 'Multiple channels', 'Review dashboard'],
      },
    ],
  },
  'document-ai': {
    ug: [
      {
        id: 'single',
        name: 'One workflow',
        price: 'UGX 4,000,000',
        monthly: '+ UGX 400,000 / month',
        note: 'One type of document, read automatically',
        delivery: 'Live in 2–3 weeks',
        featured: true,
        features: [
          'Invoices, receipts, delivery notes, forms or IDs',
          'Data entered into Google Sheets, Excel or your accounting tool',
          'Unclear items flagged for a person to check',
          'Up to 1,000 pages a month included',
          'Send documents by email, WhatsApp or upload',
        ],
      },
      {
        id: 'multi',
        name: 'Back office',
        price: 'From UGX 9,000,000',
        monthly: 'From UGX 800,000 / month',
        note: 'Several document types and approvals',
        delivery: 'Timeline agreed per project',
        features: [
          'Up to 4 document types',
          'Approval steps before anything is posted',
          'Connects to your accounting or ERP system',
          'Up to 5,000 pages a month included',
          'Monthly accuracy report',
        ],
      },
    ],
    intl: [
      {
        id: 'single',
        name: 'One workflow',
        price: '$3,000',
        monthly: '+ $249 / month',
        note: 'One document type, automated',
        delivery: '2–3 weeks',
        featured: true,
        features: ['Invoices, receipts or forms', 'Into Sheets, Excel or accounting', 'Human review of unclear items', '1,000 pages / month'],
      },
      {
        id: 'multi',
        name: 'Back office',
        price: 'From $7,500',
        monthly: 'From $499 / month',
        note: 'Multiple documents and approvals',
        delivery: 'Custom timeline',
        features: ['Up to 4 document types', 'Approval workflow', 'ERP or accounting integration', '5,000 pages / month'],
      },
    ],
  },
  'ai-training': {
    ug: [
      {
        id: 'assessment',
        name: 'AI assessment',
        price: 'UGX 2,000,000',
        note: 'Find where AI saves you time and money',
        delivery: 'Report in 1 week',
        features: [
          'Interviews with you and key staff',
          'Review of how work flows through the business',
          'Written report with 3–5 opportunities and costs',
          'A 6-month plan, in order of payback',
          'Fee credited if you build with us within 3 months',
        ],
      },
      {
        id: 'workshop',
        name: 'Team workshop',
        price: 'UGX 1,500,000',
        note: 'Half a day, up to 15 staff',
        delivery: 'At your office or online',
        featured: true,
        features: [
          'Hands-on with ChatGPT, Claude and Copilot',
          'Emails, reports, Excel and marketing with AI',
          'What not to share with AI, and why',
          'Printed prompt guide for every participant',
          'AI use policy template for your company',
        ],
      },
      {
        id: 'programme',
        name: 'Full-day programme',
        price: 'UGX 3,500,000',
        note: 'A full day, up to 20 staff',
        delivery: 'At your office',
        features: [
          'Everything in the workshop',
          'Exercises for each department',
          'Your company AI policy written with you',
          '30 days of follow-up help on WhatsApp',
        ],
      },
    ],
    intl: [
      {
        id: 'assessment',
        name: 'AI assessment',
        price: '$1,500',
        note: 'Opportunities and a roadmap',
        delivery: '1 week',
        features: ['Stakeholder interviews', 'Process review', 'Written report and costs', '6-month roadmap', 'Credited against a build'],
      },
      {
        id: 'workshop',
        name: 'Team workshop',
        price: '$1,200',
        note: 'Half day, online, up to 15 people',
        delivery: 'Online',
        featured: true,
        features: ['Hands-on with leading AI tools', 'Practical exercises', 'Safe-use guidance', 'Prompt guide', 'AI policy template'],
      },
      {
        id: 'programme',
        name: 'Full-day programme',
        price: '$2,500',
        note: 'Full day, up to 20 people',
        delivery: 'Online or on site',
        features: ['Everything in the workshop', 'Department exercises', 'Custom AI policy', '30 days of follow-up'],
      },
    ],
  },
};

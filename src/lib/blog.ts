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
  /** Slug of the service this article supports, if any. */
  service?: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: 'whatsapp-chatbot-cost-uganda',
    title: 'What does an AI chatbot for WhatsApp cost in Uganda?',
    description:
      'What an AI WhatsApp chatbot can do for a Ugandan business, what it costs to set up and run, and how to tell if you are ready for one.',
    date: '2026-11-22',
    readTime: '6 min',
    category: 'AI',
    service: 'ai-chatbots',
    body: [
      { type: 'p', text: 'Most Ugandan businesses already sell on WhatsApp. The problem is time: the same ten questions arrive all day — prices, location, opening hours, delivery, “is it available?” — and every slow reply is a customer who asks the next shop instead. An AI chatbot answers those messages instantly, in good English, at 2am on a Sunday, and passes the serious buyers to your staff.' },
      { type: 'h2', text: 'What a good chatbot actually does' },
      { type: 'ul', items: [
        'Answers common questions using your own prices, products and policies — not made-up answers from the internet.',
        'Takes orders and bookings, and collects the customer’s name, phone number and what they want.',
        'Hands the conversation to a real person when it should: a complaint, a big order, or a question it is not sure about.',
        'Saves every lead to a spreadsheet or your system so nobody is forgotten.',
        'Works in English, and can be set up to understand common Luganda and Swahili phrases customers mix in.',
      ] },
      { type: 'h2', text: 'What it costs' },
      { type: 'p', text: 'We publish our prices. An Answer bot that handles your frequently asked questions costs UGX 2,500,000 to set up and UGX 350,000 a month. A Sales bot that also takes orders, books appointments and saves leads costs UGX 5,500,000 plus UGX 650,000 a month — this is the one most shops, clinics, hotels and schools choose. A full AI agent connected to your stock, bookings or payments system starts from UGX 12,000,000.' },
      { type: 'p', text: 'The monthly fee covers hosting, the AI usage, updates to the bot’s knowledge when your prices change, and support. WhatsApp itself charges small fees for some business messages; we explain these upfront so there are no surprises.' },
      { type: 'h2', text: 'Signs you are ready' },
      { type: 'ul', items: [
        'You get more than about 30 WhatsApp messages a day.',
        'Customers message outside working hours and you reply the next morning.',
        'Your staff spend hours a day copying and pasting the same answers.',
        'You have lost a sale because someone replied too late.',
      ] },
      { type: 'h2', text: 'What to watch out for' },
      { type: 'ul', items: [
        'A bot with no “talk to a person” option. Customers hate being trapped.',
        'A bot that guesses. It should only answer from information you have approved.',
        'Your customers’ data stored carelessly. Under Uganda’s Data Protection and Privacy Act you are responsible for it, so ask where it is kept.',
        'Using an unofficial WhatsApp tool that can get your number banned. A proper setup uses the official WhatsApp Business Platform.',
      ] },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'A chatbot will not replace your team — it frees them to close sales instead of answering “where are you located?” for the hundredth time. If you want to see one working, send us a message on WhatsApp and we will show you a demo built around a business like yours.' },
    ],
  },
  {
    slug: 'web-app-cost-uganda',
    title: 'Web app development in Uganda: what it costs and what you get',
    description:
      'When a Ugandan business needs a web app instead of a website, what it costs to build one, and how to plan it so you do not pay twice.',
    date: '2026-11-22',
    readTime: '6 min',
    category: 'Apps',
    service: 'web-apps',
    body: [
      { type: 'p', text: 'A website tells people about your business. A web app runs part of it. If your team tracks orders in an exercise book, sends stock levels on WhatsApp, or keeps customer records in five different Excel files, a web app can bring all of that into one place that works on any phone or computer with a browser.' },
      { type: 'h2', text: 'Examples of web apps we build' },
      { type: 'ul', items: [
        'A booking and payments system for a clinic, salon or tour company.',
        'Stock and sales tracking across several branches.',
        'A customer portal where clients see their orders, invoices and statements.',
        'A school system for fees, results and parent communication.',
        'A dashboard that shows the owner today’s sales without calling anyone.',
      ] },
      { type: 'h2', text: 'What it costs' },
      { type: 'p', text: 'A Launch web app — one main workflow, logins for your team, and Mobile Money or card payments if needed — starts from UGX 8,000,000 and takes about 4 to 6 weeks. A Business system with several user roles, reports and connections to tools like WhatsApp or your accounting software starts from UGX 18,000,000 and takes 8 to 12 weeks. Larger platforms with many users or outside customers start from UGX 40,000,000.' },
      { type: 'p', text: 'After launch, a care plan from UGX 500,000 a month covers hosting, backups, security updates and small changes. Software that nobody looks after slowly breaks — budget for it from the start.' },
      { type: 'h2', text: 'How to keep the cost under control' },
      { type: 'ul', items: [
        'Start with the one process that wastes the most time or money. Build that first, then add more.',
        'Write down how the work is done today — who does what, on paper or in Excel. That is the best brief you can give a developer.',
        'Insist on a fixed written quote and a clear list of what is and is not included.',
        'Make sure you own the code, the domain and the data, and can move them if you ever change provider.',
      ] },
      { type: 'h2', text: 'Web app or mobile app?' },
      { type: 'p', text: 'For most internal business tools, a web app is the better first step: it works on every phone and laptop, there is nothing to install, and updates reach everyone at once. A mobile app makes sense when your customers will use it often, or you need features like offline use, the camera or notifications. We will tell you honestly which one you need.' },
      { type: 'h2', text: 'Next step' },
      { type: 'p', text: 'Send us a message describing the problem you want to solve. We will reply with a rough price range for free, and a fixed quote once we understand the details.' },
    ],
  },
  {
    slug: 'mobile-app-cost-uganda',
    title: 'How much does it cost to build a mobile app in Uganda?',
    description:
      'The real cost of building an Android or iPhone app for a Ugandan business, how long it takes, and the questions to answer before you start.',
    date: '2026-11-21',
    readTime: '6 min',
    category: 'Apps',
    service: 'mobile-apps',
    body: [
      { type: 'p', text: 'Many business owners want “an app”. Sometimes that is exactly right — a delivery business, a SACCO, a gym or a school can get real value from an app customers keep on their phone. Sometimes a good website or web app does the job for a fraction of the price. Here is how to decide, and what to budget.' },
      { type: 'h2', text: 'When a mobile app is worth it' },
      { type: 'ul', items: [
        'Customers will use it often — weekly or daily, not once a year.',
        'You need phone features: notifications, the camera, location or offline use in areas with poor network.',
        'You want customers to order, pay or book in a few taps, with their details remembered.',
        'Your competitors’ apps are taking your customers.',
      ] },
      { type: 'h2', text: 'What it costs' },
      { type: 'p', text: 'An Android app — which covers the large majority of phones in Uganda — starts from UGX 15,000,000 and takes about 8 to 10 weeks. An app for both Android and iPhone starts from UGX 28,000,000 and takes 10 to 14 weeks; this suits businesses that also serve international customers, embassies, NGOs or tourists. Both include the admin dashboard your staff use behind the app, and publishing to the Google Play Store and Apple App Store.' },
      { type: 'p', text: 'After launch, a care plan from UGX 700,000 a month keeps the app working as Android and iPhone release updates, fixes problems, and makes small improvements. An app that is not updated will eventually stop working on new phones.' },
      { type: 'h2', text: 'Questions to answer before you start' },
      { type: 'ul', items: [
        'What is the one thing customers must be able to do in the app? Build that first.',
        'How will customers pay — MTN Mobile Money, Airtel Money, card, or cash on delivery?',
        'Who will manage orders, content and customer questions once the app is live?',
        'How will people find out about the app? Budget for promotion, not only development.',
      ] },
      { type: 'h2', text: 'Avoid these mistakes' },
      { type: 'ul', items: [
        'Building every feature at once. Launch small, learn what customers use, then add.',
        'Making the app heavy. Many customers have older phones and limited data — it should be light and fast.',
        'Publishing the app under the developer’s store account instead of your own.',
      ] },
      { type: 'h2', text: 'Not sure yet?' },
      { type: 'p', text: 'Tell us on WhatsApp what you want the app to do. If a web app or website would serve you better and cost less, we will say so.' },
    ],
  },
  {
    slug: 'document-ai-invoices-uganda',
    title: 'Let AI read your invoices and receipts: a guide for Ugandan businesses',
    description:
      'How document AI reads invoices, receipts and forms, types the data into your system, and saves your team hours of manual work every week.',
    date: '2026-11-21',
    readTime: '5 min',
    category: 'AI',
    service: 'document-ai',
    body: [
      { type: 'p', text: 'In many Ugandan offices, someone spends hours every week typing numbers from paper invoices, receipts, delivery notes or application forms into Excel or accounting software. It is slow, boring and full of mistakes. Document AI does that typing for you.' },
      { type: 'h2', text: 'How it works' },
      { type: 'ul', items: [
        'Your team takes a photo, scans the document, or forwards it by email or WhatsApp.',
        'The AI reads it — supplier, date, amounts, TIN, line items — even from a slightly crumpled photo.',
        'It checks the data against rules you set, and flags anything odd for a person to look at.',
        'The clean data goes straight into your spreadsheet, accounting software or system.',
      ] },
      { type: 'h2', text: 'Where it helps most' },
      { type: 'ul', items: [
        'Accounts teams processing supplier invoices and expense receipts.',
        'Checking that supplier invoices carry a fiscal (EFRIS) receipt number before payment.',
        'Schools, SACCOs and insurers handling application and claim forms.',
        'Logistics and distribution companies matching delivery notes to orders.',
      ] },
      { type: 'h2', text: 'What it costs' },
      { type: 'p', text: 'One workflow — for example, supplier invoices into your accounting software — costs UGX 4,000,000 to set up and UGX 400,000 a month. A back-office package covering several document types and connected systems starts from UGX 9,000,000, with running costs from UGX 800,000 a month. If it saves one staff member a day of typing each week, it usually pays for itself quickly.' },
      { type: 'h2', text: 'Is it safe?' },
      { type: 'p', text: 'Your documents contain sensitive information, so treat this seriously. We keep data access limited to the people who need it, use providers that do not train their AI on your documents, and set things up so you can meet your duties under Uganda’s Data Protection and Privacy Act. A person still approves anything unusual — the AI does the typing, your team keeps control.' },
      { type: 'h2', text: 'Try it on your own documents' },
      { type: 'p', text: 'Send us a few sample documents (with private details covered if you prefer) and we will show you what the AI extracts from them, free of charge.' },
    ],
  },
  {
    slug: 'ai-training-for-staff-uganda',
    title: 'AI training for your staff: where Ugandan businesses should start',
    description:
      'Why AI training pays off for Ugandan teams, what staff can learn in a single workshop, and how to use AI tools safely at work.',
    date: '2026-11-21',
    readTime: '5 min',
    category: 'AI',
    service: 'ai-training',
    body: [
      { type: 'p', text: 'Your staff are probably already using AI tools like ChatGPT — on their own phones, without guidance, and sometimes pasting in customer details they should not. Training turns that quiet, risky habit into a real advantage: faster letters, reports, proposals, social media posts and research, done safely.' },
      { type: 'h2', text: 'What staff learn in one workshop' },
      { type: 'ul', items: [
        'How to ask AI for what you want and get useful answers, not generic ones.',
        'Writing emails, reports, proposals and adverts in minutes, in your company’s tone.',
        'Summarising long documents, meeting notes and tenders.',
        'Building simple spreadsheets and formulas with AI’s help.',
        'What not to share with AI tools, and how to check AI answers before using them.',
      ] },
      { type: 'h2', text: 'Our training options' },
      { type: 'p', text: 'A half-day Team workshop for up to 15 people costs UGX 1,500,000 and is the best place to start. A Full-day programme with hands-on exercises built around your own work costs UGX 3,500,000. If you want a plan for where AI fits in your whole business, an AI assessment costs UGX 2,000,000: we look at how your teams work and give you a written list of the opportunities worth acting on, with costs.' },
      { type: 'p', text: 'We train at your office in Kampala or at ours in Acacia Mall, and can run sessions online for teams elsewhere in Uganda.' },
      { type: 'h2', text: 'Set simple rules' },
      { type: 'ul', items: [
        'Never paste customer personal details, passwords or confidential figures into public AI tools.',
        'A person checks every AI-written document before it goes out.',
        'Agree which tools are approved for work use.',
      ] },
      { type: 'p', text: 'We give every team a one-page AI policy they can adopt after the training.' },
      { type: 'h2', text: 'Book a session' },
      { type: 'p', text: 'Send us a message on WhatsApp with your team size and the kind of work they do, and we will suggest the right session and a date.' },
    ],
  },
  {
    slug: 'website-cost-uganda',
    title: 'How much does a website cost in Uganda?',
    description:
      'What you should expect to pay for a business website in Uganda, what changes the price, and how to avoid paying twice.',
    date: '2026-11-20',
    readTime: '5 min',
    category: 'Websites',
    service: 'websites',
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

export function getServicePost(serviceSlug: string) {
  return posts.find((p) => p.service === serviceSlug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

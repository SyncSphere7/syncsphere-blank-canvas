/**
 * Business details used across the site. Change them here, not in pages.
 */
export const site = {
  name: 'SyncSphere',
  legalName: 'SyncSphere LLC',
  url: 'https://www.syncspherellc.com',
  tagline: 'Websites, apps and AI for Ugandan businesses',
  description:
    'SyncSphere builds websites, web and mobile apps, and AI chatbots and automation for businesses in Uganda and abroad. Kampala team, US-registered company, pay with Mobile Money or card.',
  phone: '+256 787 308 564',
  phoneHref: 'tel:+256787308564',
  /** Digits only, international format, for wa.me links. */
  whatsapp: '256787308564',
  email: 'info@syncspherellc.com',
  salesEmail: 'sales@syncspherellc.com',
  financeEmail: 'finance@syncspherellc.com',
  kampalaAddress: '4th Floor, Acacia Mall, Plot 14-18 Cooper Road, Kampala, Uganda',
  registration: {
    state: 'Montana, USA',
    fileNo: '16835344',
    ein: '35-2932039',
    office: '127 N Higgins Ave, Ste 307D #2082, Missoula, MT 59802, United States',
  },
  hours: 'Monday – Saturday, 8:00 – 18:00 EAT',
  social: {
    facebook: 'https://www.facebook.com/syncsphereofficial',
    instagram: 'https://www.instagram.com/syncsphereofficial/',
    linkedin: 'https://www.linkedin.com/company/106670846',
    x: 'https://x.com/syncsphereoffic',
  },
  gaId: 'G-MV2NBJSC0B',
  googleSiteVerification: '2WOJcIC44_x-AAkkXTwrrBMD5jh7Aemz8ixEJXJySMI',
} as const;

export function whatsappLink(message = "Hello SyncSphere, I'd like to talk about a website for my business.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

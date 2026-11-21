import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  // Only the production domain should be indexed; preview deployments are not.
  const isProduction = process.env.VERCEL_ENV === 'production' || !process.env.VERCEL_ENV;
  return {
    rules: isProduction ? [{ userAgent: '*', allow: '/', disallow: ['/api/', '/pay'] }] : [{ userAgent: '*', disallow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

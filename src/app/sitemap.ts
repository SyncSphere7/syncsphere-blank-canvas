import type { MetadataRoute } from 'next';
import { industries, services } from '@/lib/content';
import { posts } from '@/lib/blog';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  });

  return [
    page('', 1),
    page('/pricing', 0.9),
    page('/services', 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8)),
    page('/industries', 0.8),
    ...industries.map((i) => page(`/industries/${i.slug}`, 0.7)),
    page('/international', 0.7),
    page('/about', 0.6),
    page('/contact', 0.7),
    page('/blog', 0.6),
    ...posts.map((p) => ({ ...page(`/blog/${p.slug}`, 0.5), lastModified: new Date(`${p.date}T00:00:00Z`) })),
    page('/tools/website-grader', 0.6),
    page('/privacy-policy', 0.2),
    page('/terms-of-service', 0.2),
    page('/refund-policy', 0.2),
  ];
}

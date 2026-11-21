import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { CtaBand, JsonLd } from '@/components/ui';
import { formatDate, getPost, posts } from '@/lib/blog';
import { pageMeta } from '@/lib/meta';
import { site } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta(`/blog/${post.slug}`, post.title, post.description);
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { '@type': 'Organization', name: site.name },
          publisher: { '@type': 'Organization', name: site.legalName, logo: { '@type': 'ImageObject', url: `${site.url}/syncsphere-logo.png` } },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />
      <article className="section">
        <div className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-ink-soft hover:text-brand">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-brand">{post.category}</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-ink-muted">{formatDate(post.date)} · {post.readTime} read</p>
          <div className="prose prose-lg mt-10 max-w-none prose-headings:font-extrabold prose-p:text-ink-soft prose-li:text-ink-soft">
            {post.body.map((block, i) => {
              if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
              if (block.type === 'ul') return <ul key={i}>{block.items.map((it) => <li key={it}>{it}</li>)}</ul>;
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  );
}

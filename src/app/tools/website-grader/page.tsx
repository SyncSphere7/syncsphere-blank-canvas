import { Grader } from '@/components/Grader';
import { PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta(
  '/tools/website-grader',
  'Free Website Grader — Check Your Website in 30 Seconds',
  'Free check of your website’s mobile setup, Google basics, WhatsApp and link previews. Get a score out of 100 and a list of what to fix.',
);

export default function GraderPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="How good is your website?"
        intro="Enter your website address. We check the basics that matter to customers and to Google — mobile setup, page titles, link previews, WhatsApp and speed — and give you a score out of 100."
      />
      <section className="section">
        <div className="container max-w-5xl">
          <Grader />
        </div>
      </section>
    </>
  );
}

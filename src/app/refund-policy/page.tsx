import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { pageMeta } from '@/lib/meta';
import { site } from '@/lib/site';

export const metadata = pageMeta('/refund-policy', 'Refund & Cancellation Policy', 'How deposits, milestones, cancellations and refunds work for SyncSphere projects.');

/*
 * Keep this page in step with the payment terms in src/lib/pricing.ts.
 */
export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="22 November 2026">
      <h2>1. Scope</h2>
      <p>This policy applies to all website, software, marketing and automation services provided by SyncSphere LLC. Read it together with our <Link href="/terms-of-service">Terms of Service</Link> and the written quote for your project. Where a signed quote sets out different terms, the quote takes precedence.</p>

      <h2>2. Milestone billing</h2>
      <p>Fees are paid against agreed milestones rather than in one payment. Our standard schedules are:</p>
      <ul>
        <li>Projects under UGX 5,000,000: 60% to start and 40% at launch.</li>
        <li>Larger projects and international projects: 50% to start, 25% at design approval and 25% at launch.</li>
      </ul>
      <p>A milestone payment is refundable until work on that milestone begins, and non-refundable once it has begun.</p>

      <h2>3. Cancelling before work starts</h2>
      <p>You may cancel before work on a milestone starts. Fees paid for milestones that have not started are refunded in full within 14 business days. The deposit covers reserved time, planning and scheduling, and becomes non-refundable once work on the first milestone begins.</p>

      <h2>4. Cancelling during a project</h2>
      <p>If you cancel while a milestone is in progress, work completed to date is not refundable. We will:</p>
      <ul>
        <li>Give you a written summary of the work completed.</li>
        <li>Hand over the designs, files and code produced so far.</li>
        <li>Refund any fees paid in advance for milestones that have not started, within 14 business days.</li>
      </ul>
      <p>You remain responsible for paying for work completed up to cancellation. That work transfers to you once it is paid for.</p>

      <h2>5. Client delays</h2>
      <p>Timelines assume prompt feedback and timely supply of content and approvals. If the project is waiting for your input, the schedule pauses. Long delays may lead to extra charges, which we will always agree with you in writing first.</p>

      <h2>6. 30-day defect warranty</h2>
      <p>After launch and final payment, we fix defects in the delivered work that come from our own build, free of charge, for 30 days. This warranty covers fixes, not new features, design changes, content updates or failures of third-party services. If we cannot fix a defect within the warranty period, we will refund the fees for the affected, unresolved part of the work.</p>

      <h2>7. Third-party costs</h2>
      <p>Domain registration, hosting upgrades, paid plugins, advertising budgets and similar third-party costs are passed on at cost and are generally non-refundable once bought for you, because they follow the provider’s own terms. Any refund a provider gives will be passed on to you.</p>

      <h2>8. How refunds are paid</h2>
      <p>To request a refund, email <a href={`mailto:${site.email}`}>{site.email}</a> with the project name, the milestone and the reason. Approved refunds are paid to the original payment method (bank, card or Mobile Money) within 14 business days of written approval. If that method is no longer available, we will agree an alternative with you in writing.</p>

      <h2>9. Disputes</h2>
      <p>Please raise any concern with us first so we can resolve it quickly. This policy is governed by the laws of the State of Montana, United States, as set out in our Terms of Service.</p>

      <h2>10. Changes</h2>
      <p>We may update this policy from time to time. The version in effect when you accept your quote governs your project.</p>
    </LegalPage>
  );
}

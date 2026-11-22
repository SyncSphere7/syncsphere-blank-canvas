import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('/terms-of-service', 'Terms of Service', 'The terms that govern use of the SyncSphere website and services.');

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="22 November 2026">
      <h2>Introduction</h2>
      <p>These Terms of Service govern your use of the SyncSphere website and the services offered by SyncSphere LLC (&quot;SyncSphere&quot;, &quot;we&quot;). By using our website or services, you agree to these Terms. If you do not agree, please do not use our services.</p>

      <h2>Quotes and projects</h2>
      <p>Every project is based on a written quote or statement of work that sets out the scope, price, timeline and payment schedule. Where a signed quote or statement of work sets out different terms for a project, it takes precedence over these Terms for that project.</p>

      <h2>Payments</h2>
      <p>Payments are made against the milestones in your quote. Payments may be processed by our payment partner, Flutterwave, which supports bank, card and Mobile Money payments. Our refund and cancellation terms are set out in the <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</p>

      <h2>Use of services</h2>
      <p>You agree to use our services only for lawful purposes. You agree not to:</p>
      <ul>
        <li>Use our services in any way that breaks any applicable law or regulation.</li>
        <li>Try to gain unauthorised access to our services, other accounts, systems or networks.</li>
        <li>Use our services to send material that is harmful, threatening, abusive, harassing, defamatory or otherwise objectionable.</li>
        <li>Interfere with anyone else’s use of our services.</li>
      </ul>

      <h2>Your content</h2>
      <p>You keep ownership of the content you give us (text, photos, logos and data). You give us permission to use it to deliver your project. You confirm that you have the right to use that content and that it does not infringe anyone else’s rights.</p>

      <h2>Ownership of delivered work</h2>
      <p>When your project is paid in full, ownership of the delivered website design and content passes to you, except for third-party software, fonts, images or plugins, which remain subject to their own licences. Your domain name is registered in your name or your business’s name.</p>

      <h2>Our website</h2>
      <p>The content of this website, including text, graphics and logos, belongs to SyncSphere or its licensors. You may not copy or republish it without our written permission.</p>

      <h2>Limitation of liability</h2>
      <p>To the extent permitted by law, SyncSphere, its directors, employees, partners and agents are not liable for any indirect, incidental, special, consequential or punitive damages, including loss of profits, data, use or goodwill, arising from your use of, or inability to use, our services.</p>

      <h2>Changes to these Terms</h2>
      <p>We may update these Terms from time to time. If a change is material, we will give at least 30 days’ notice before it takes effect. The version in effect when you accept a quote governs that project.</p>

      <h2>Governing law and disputes</h2>
      <p>Please raise any concern with us directly first so we can resolve it quickly. These Terms are governed by the laws of the State of Montana, United States, without regard to its conflict of law provisions, and the parties submit to the exclusive jurisdiction of the state and federal courts located in Montana.</p>
    </LegalPage>
  );
}

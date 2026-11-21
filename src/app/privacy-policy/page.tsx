import { LegalPage } from '@/components/LegalPage';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('/privacy-policy', 'Privacy Policy', 'How SyncSphere collects, uses and protects your personal data.');

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="22 November 2026">
      <h2>Introduction</h2>
      <p>SyncSphere LLC respects your privacy. This policy explains what personal data we collect when you visit our website or work with us, how we use it, and your rights. We aim to handle personal data in line with Uganda’s Data Protection and Privacy Act, 2019 and other laws that apply to us.</p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Contact details</strong> you give us: name, email, phone or WhatsApp number, business name and your message.</li>
        <li><strong>Payment details</strong> needed to process a payment: name, email, phone number, amount and reference. Card and Mobile Money details are entered on Flutterwave’s secure page — we never see or store your full card number or PIN.</li>
        <li><strong>Website usage data</strong> (pages visited, device and browser type, approximate location), collected through Google Analytics only if you accept analytics cookies.</li>
        <li><strong>Website grader data</strong>: the web address you ask us to check and, if you choose to receive the report, your email.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and prepare quotes.</li>
        <li>To deliver and support the services you buy from us.</li>
        <li>To process payments and keep financial records.</li>
        <li>To understand how our website is used and improve it.</li>
        <li>To meet legal and tax obligations.</li>
      </ul>
      <p>We do not sell your personal data.</p>

      <h2>Who we share it with</h2>
      <p>We share data only with service providers that help us run our business, and only as much as they need:</p>
      <ul>
        <li>Flutterwave — payment processing.</li>
        <li>Resend — sending emails from our website.</li>
        <li>Google — analytics (only with your consent) and maps.</li>
        <li>Vercel — website hosting.</li>
        <li>WhatsApp (Meta) — if you choose to message us there.</li>
      </ul>
      <p>Some of these providers process data outside Uganda. We rely on their published security and data protection commitments.</p>

      <h2>Cookies</h2>
      <p>Our website works without cookies. We use Google Analytics cookies only after you click “Accept” on the cookie banner. You can change your choice at any time using “Cookie settings” at the bottom of every page.</p>

      <h2>How long we keep it</h2>
      <p>We keep enquiry data for up to two years after our last contact, and client and payment records for as long as tax and accounting law requires.</p>

      <h2>Security</h2>
      <p>We use appropriate technical and organisational measures to protect your data, and we limit access to people who need it to do their work.</p>

      <h2>Your rights</h2>
      <p>You can ask us to access, correct or delete your personal data, to stop or restrict processing, or to withdraw consent. Email us and we will respond within 30 days.</p>
    </LegalPage>
  );
}

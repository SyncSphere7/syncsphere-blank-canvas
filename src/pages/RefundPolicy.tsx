
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Refund & Cancellation Policy — SyncSphere LLC
 *
 * This policy documents SyncSphere LLC's existing commercial terms. It does
 * not create obligations beyond those already published on the pricing and
 * service pages, and the milestone schedule, warranty period and payment
 * methods stated here must be kept in step with that marketing copy.
 */
const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-16">
          <Link to="/" className="inline-flex items-center text-foreground/70 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-foreground">Refund &amp; Cancellation Policy</h1>

          <div className="prose prose-invert max-w-4xl mx-auto">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">1. Scope</h2>
              <p className="text-white/70 mb-4">
                This Refund and Cancellation Policy applies to all website design, software
                development, marketing and business automation services provided by SyncSphere LLC.
                It should be read together with our{' '}
                <Link to="/terms-of-service" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and the written scope or statement of work for your project. Where a signed
                statement of work sets out different terms for a specific engagement, that statement
                of work takes precedence.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">2. Milestone-Based Billing</h2>
              <p className="text-white/70 mb-4">
                Because each engagement is scoped to your requirements, fees are invoiced against
                agreed project milestones rather than as a single payment. Our standard payment
                schedule is 50% upfront to begin a project, 25% at design approval, and 25% on
                delivery and handover of the completed work.
              </p>
              <p className="text-white/70 mb-4">
                A milestone is non-refundable once work on that specific milestone has commenced. A
                milestone remains refundable until that work begins.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. Cancellation Before Work Commences</h2>
              <p className="text-white/70 mb-4">
                You may cancel a project at any point before engineering work on the relevant
                milestone has started. In that case, any fees already paid in respect of milestones
                that have not yet started are refunded in full within 14 business days.
              </p>
              <p className="text-white/70 mb-4">
                The upfront deposit covers reserved capacity, scoping and scheduling. It becomes
                non-refundable once work on the first milestone commences, because that capacity can
                no longer be released to another client.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. Cancellation During Active Development</h2>
              <p className="text-white/70 mb-4">
                If you cancel while a milestone is in progress, work completed to date is not
                refundable. On cancellation we will:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Provide a written account of all work completed against each milestone.</li>
                <li>Hand over all work-in-progress files, designs and code produced to date.</li>
                <li>
                  Refund any fees paid in advance for milestones that have not yet started, within
                  14 business days.
                </li>
              </ul>
              <p className="text-white/70 mt-4">
                You remain responsible for payment of all work completed up to the point of
                cancellation. Work delivered to date transfers to you on receipt of payment in full.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">5. Client Delays</h2>
              <p className="text-white/70 mb-4">
                Project timelines assume prompt client feedback and the timely supply of content,
                assets and approvals. Where a delay is caused by outstanding client input, the
                schedule pauses for the duration of that delay. Delays of this kind may attract
                additional charges, which we will quote and agree with you in writing before
                additional work begins.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">6. Defect Warranty</h2>
              <p className="text-white/70 mb-4">
                Following delivery and final payment, SyncSphere LLC provides a 30-day warranty
                covering the correction of defects present in the delivered work and arising from our
                own implementation.
              </p>
              <p className="text-white/70 mb-4">
                This warranty is a commitment to fix defects. It is not a refund, and it does not
                cover new features, design changes, third-party service failures, or content updates
                requested after delivery. If a defect cannot be resolved within the warranty period,
                we will refund the fees attributable to the affected, unresolved portion of the
                work.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
              <p className="text-white/70 mb-4">
                Where a project includes third-party services such as domain registration, hosting,
                payment processing or third-party licences, those fees are passed through at cost
                and are generally non-refundable once procured on your behalf, as they are subject to
                the provider's own terms. Any refund those providers allow will be passed on to you.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">8. How to Request a Refund</h2>
              <p className="text-white/70 mb-4">
                To request a refund, contact us at{' '}
                <a href="mailto:info@syncspherellc.com" className="text-primary hover:underline">
                  info@syncspherellc.com
                </a>{' '}
                with the project name, the milestone in question, and the grounds for the request.
                Approved refunds are issued to the original payment method within 14 business days of
                written approval. Where the original payment method is no longer valid, an
                alternative method will be agreed in writing.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">9. Disputes</h2>
              <p className="text-white/70 mb-4">
                We ask that any concerns be raised with us directly first, so that they can be
                addressed promptly. These Terms are governed by the laws of the State of Montana,
                United States, without regard to its conflict of law provisions, and the parties
                submit to the exclusive jurisdiction of the state and federal courts located in
                Montana.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-white/70 mb-4">
                We may update this policy from time to time. The version in effect at the time your
                service agreement is executed governs that engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-white/70 mb-4">
                SyncSphere LLC — a domestic limited liability company registered in Montana, USA
                (File No. 16835344, EIN 35-2932039).
                <br />
                Registered office: 127 N Higgins Ave, Ste 307D #2082, Missoula, MT 59802, United
                States.
                <br />
                Engineering &amp; operations: Plot 32 Lumumba Ave, Kampala, Uganda.
                <br />
                <a href="mailto:info@syncspherellc.com" className="text-primary hover:underline">
                  info@syncspherellc.com
                </a>{' '}
                ·{' '}
                <a href="tel:+256757727965" className="text-primary hover:underline">
                  +256 757 727 965
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;

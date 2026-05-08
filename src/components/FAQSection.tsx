import React from 'react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from 'react-helmet-async';
import ScrollReveal from './ScrollReveal';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: "How much does a website cost?", answer: "Our website packages start at $2,500 (Starter, delivered in 48 hours), $5,000 (Professional, 5 days), and $8,000+ (Premium, custom timeline). All packages include a .com domain for 1 year and SSL certificate. Maintenance is $149/month." },
  { question: "What is your payment policy?", answer: "We require 50% upfront before work begins, 25% at design approval, and 25% on delivery. All payments are processed securely through PayPal for your protection." },
  { question: "How fast can you deliver?", answer: "Our fastest delivery is 48 hours for Starter websites. Professional websites take 5 days, Premium packages are quoted on scope. Social media and email marketing can start within 1 week." },
  { question: "What's included in the website packages?", answer: "All website packages include custom design, responsive mobile-friendly layout, .com domain registration (1 year), SSL certificate, and SEO setup. Higher tiers include more pages, blog/CMS, analytics, and integrations." },
  { question: "Do you offer revisions?", answer: "Yes, up to 2 rounds of revisions are included at each milestone. Additional revisions are available at $100/hour. We work closely with you to make sure the final product matches your vision." },
  { question: "What payment methods do you accept?", answer: "We accept PayPal for all transactions. This ensures buyer protection and secure payment processing for both parties. USD is our primary currency, with GBP and EUR pricing available on request." },
  { question: "Can you manage my social media and email marketing?", answer: "Absolutely! Social Media Management is $499/month (4 posts/week, 2 platforms, monthly report). Email Marketing is $349/month (4 newsletters, automation, analytics). Or get both plus a strategy call for $899/month with Full Marketing." },
  { question: "Do you offer maintenance after the site is live?", answer: "Yes! Our maintenance plan is $149/month and includes security updates, weekly backups, uptime monitoring, and 1 hour of support. We also offer 30 days of free bug-fix support after launch." },
];

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <section id="faq" className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-30 blur-3xl -z-10" />
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="px-4 py-2 bg-card/50 rounded-full text-muted-foreground text-sm mb-6 inline-block border border-border backdrop-blur-sm">
                Common Questions
              </span>
              <h2 className="text-foreground text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Everything you need to know about our services, pricing, and delivery.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 border border-border/50 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-foreground">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default FAQSection;

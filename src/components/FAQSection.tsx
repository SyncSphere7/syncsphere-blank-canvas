import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from 'react-helmet-async';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How much does a website cost?",
    answer: "Our website packages start at $499 (Starter, delivered in 48 hours), $899 (Business, 72 hours), and $1,499 (Growth, 5 days). All packages include a .com domain for 1 year and SSL certificate. We also offer hosting retainers at $99/month."
  },
  {
    question: "What is your payment policy?",
    answer: "We require 50% upfront before work begins and 50% on delivery after your approval. All payments are processed securely through PayPal for your protection."
  },
  {
    question: "How fast can you deliver?",
    answer: "Our fastest delivery is 48 hours for Starter websites. Business websites take 72 hours, Growth packages 5 days. Chatbots are typically set up within 3-5 days, and automation workflows within 5-7 days."
  },
  {
    question: "What's included in the website packages?",
    answer: "All website packages include custom design for your business, responsive mobile-friendly layout, .com domain registration (1 year), SSL certificate, and basic SEO setup. Higher tiers include more pages, features, and integrations."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, revisions are included in every package. Additional revisions beyond what's included are available at $30 each. We work closely with you to make sure the final product matches your vision."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept PayPal for all transactions. This ensures buyer protection and secure payment processing for both parties. USD is our primary currency, with GBP and EUR pricing available on request."
  },
  {
    question: "Can you manage my social media and email marketing?",
    answer: "Absolutely! Our Social Media Management starts at $199/month (3 posts/week, 2 platforms) and Email Marketing starts at $149/month. We handle everything — content creation, scheduling, analytics, and optimization."
  },
  {
    question: "Do you offer bundle discounts?",
    answer: "Yes! Our SyncSphere Bundles combine multiple services at discounted rates. The Starter Pack starts at $799 setup + $99/month, going up to the Complete Pack at $3,499 setup + $699/month. Check our pricing page for full details."
  }
];

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <section id="faq" className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-30 blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-white/5 dark:bg-white/5 rounded-full text-foreground/80 text-sm mb-6 inline-block border border-white/10 dark:border-white/10 backdrop-blur-sm">
              Common Questions
            </span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
              Everything you need to know about our services, pricing, and delivery.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;

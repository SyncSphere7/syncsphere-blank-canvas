import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustBadges from '../components/TrustBadges';
import ClientLogos from '../components/ClientLogos';
import WhySyncSphere from '../components/WhySyncSphere';
import ReviewsSection from '../components/ReviewsSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import AskAIButton from '../components/AskAIButton';
import PersonalizationEngine from '../components/PersonalizationEngine';
import BehavioralTriggers from '../components/BehavioralTriggers';

const Index = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SyncSphere Digital Agency",
    "description": "Full-service digital agency offering website design, chatbots, social media management, email marketing, business automation, and brand identity services. Fast delivery, affordable pricing.",
    "url": "https://syncsphereofficial.com",
    "logo": "https://syncsphereofficial.com/syncsphere-logo.png",
    "sameAs": [
      "https://twitter.com/SyncSphere",
      "https://www.linkedin.com/company/syncsphere",
      "https://www.facebook.com/syncsphereofficial"
    ],
    "address": { "@type": "PostalAddress", "addressCountry": "US" },
    "telephone": "+1-815-472-7760",
    "email": "contact@syncsphereofficial.com",
    "priceRange": "$79-$3,499",
    "paymentAccepted": "PayPal",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Chatbot Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity" } },
      ]
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncSphere Digital Agency",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5", "worstRating": "1" }
  };

  return (
    <PersonalizationEngine>
      {({ greeting, pricing, testimonial, cta, urgency, industry }) => (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Helmet>
            <title>SyncSphere | Full-Service Digital Agency — Websites, Chatbots, Marketing & Automation</title>
            <meta name="description" content="Custom websites from $499 in 48 hours. Chatbots, social media, email marketing, automation & branding. 50% upfront, 50% on delivery. PayPal accepted. USA registered." />
            <link rel="canonical" href="https://syncsphereofficial.com" />
            <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
          </Helmet>

          <Header />
          <main>
            <HeroSection personalization={{ greeting, cta, urgency }} />
            <TrustBadges />
            <ClientLogos />
            <ServicesSection />
            <WhySyncSphere />
            <ProcessSection />
            <ReviewsSection />
            <TestimonialsSection testimonial={testimonial} industry={industry} />
            <FAQSection />
            <ContactSection />
            <StickyCTA />
            <AskAIButton />
            <BehavioralTriggers onTrigger={(type, data) => {
              console.log('Behavioral trigger:', type, data);
            }} />
          </main>
          <Footer />
        </div>
      )}
    </PersonalizationEngine>
  );
};

export default Index;

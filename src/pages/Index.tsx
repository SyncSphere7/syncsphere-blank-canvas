import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustBadges from '../components/TrustBadges';
import ReviewsSection from '../components/ReviewsSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
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
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "telephone": "+1-815-472-7760",
    "email": "contact@syncsphereofficial.com",
    "priceRange": "$79-$3,499",
    "paymentAccepted": "PayPal",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development", "description": "Custom designed websites delivered in 48 hours to 5 days" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Chatbot Solutions", "description": "Smart chatbots for customer engagement across multiple platforms" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management", "description": "Content creation and management across all major platforms" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing", "description": "Newsletter campaigns and marketing automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation", "description": "Streamline operations with intelligent workflow solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity", "description": "Complete brand kits and visual identity packages" } }
      ]
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncSphere Digital Agency",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our website packages start at $499 for a Starter site (delivered in 48 hours), $899 for Business sites (72 hours), and $1,499 for Growth sites (5 days). All packages include domain and SSL certificate." }
      },
      {
        "@type": "Question",
        "name": "What is your payment policy?",
        "acceptedAnswer": { "@type": "Answer", "text": "We require 50% upfront before work begins, and 50% on delivery after your approval. We accept payments via PayPal for secure, protected transactions." }
      },
      {
        "@type": "Question",
        "name": "How fast can you deliver?",
        "acceptedAnswer": { "@type": "Answer", "text": "Our fastest delivery is 48 hours for Starter websites. Business sites take 72 hours, and Growth packages are delivered within 5 days. Chatbots and automation setups typically take 3-7 days." }
      },
      {
        "@type": "Question",
        "name": "Do you offer revisions?",
        "acceptedAnswer": { "@type": "Answer", "text": "Each package includes revisions as specified. Additional revisions are available at $30 each. We work closely with you to ensure the final product meets your expectations." }
      }
    ]
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
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
          </Helmet>

          <Header />
          <main>
            <HeroSection personalization={{ greeting, cta, urgency }} />
            <TrustBadges />
            <ServicesSection />
            <ProcessSection />
            <ReviewsSection />
            <TestimonialsSection testimonial={testimonial} industry={industry} />
            <FAQSection />
            <ContactSection />
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

import React from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const services = [
  {
    title: 'Website Design & Development',
    description: 'Custom designed websites that convert visitors into customers. From starter sites delivered in 48 hours to full premium platforms with animations, integrations, and CMS. Every package includes a .com domain, SSL certificate, mobile-responsive design, and basic SEO setup. We build on modern frameworks for speed and security.',
    delay: '0.1s',
    link: '/services/web-development'
  },
  {
    title: 'Social Media Management',
    description: 'Content creation and community management across all major platforms including Facebook, Instagram, LinkedIn, and Twitter/X. Our package includes 4 posts per week, custom graphics, engaging captions, hashtag strategy, community engagement, and monthly analytics reporting. We help you build a loyal following that converts into customers.',
    delay: '0.2s',
    link: '/services/social-media'
  },
  {
    title: 'Email Marketing',
    description: 'Newsletter campaigns, automated sequences, and subscriber management that nurture your audience on autopilot. We set up welcome series, abandoned cart flows, promotional campaigns, and regular newsletters. Our $599/month package includes 4 emails per month, automation setup, list segmentation, and detailed analytics.',
    delay: '0.3s',
    link: '/services/email-marketing'
  },
  {
    title: 'Maintenance & Support',
    description: 'Keep your website secure, fast, and up to date with our ongoing maintenance plan. For $199/month we provide weekly backups, security patches, uptime monitoring, performance optimization, and 1 hour of support. We also offer 30 days of free bug-fix support after every launch. Never worry about your website again.',
    delay: '0.4s',
    link: '/pricing'
  },
  {
    title: 'Brand Identity',
    description: 'Professional brand identity kit that makes your business instantly recognizable. Our Brand Identity package ($799 add-on) includes custom logo design (3 concepts, unlimited revisions), color palette selection, typography guidelines, brand style guide PDF, business card design, and social media profile templates. Build a brand that customers trust.',
    delay: '0.5s',
    link: '/services/brand-identity'
  },
  {
    title: 'Business Automation',
    description: 'Streamline your operations with intelligent workflows that save you 20+ hours per week. We connect your forms, email, CRM, and other tools so repetitive tasks handle themselves. From lead capture to invoice generation, we automate the processes that eat up your day. Custom automation packages start at $2,500.',
    delay: '0.6s',
    link: '/services/automations'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-30 blur-3xl -z-10" />
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-card/50 rounded-full text-muted-foreground text-sm mb-6 inline-block border border-border backdrop-blur-sm">
              Our Services
            </span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Everything Your Business Needs to Grow Online</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From websites to marketing to automation — we handle it all so you can focus on what matters most: running your business. Every service is designed to deliver measurable results.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Link to={service.link} className="block h-full">
                <ServiceCard title={service.title} description={service.description} delay={service.delay} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Not sure which service is right for you? <a href="https://wa.me/447424819094?text=Hi! I'd like to discuss my digital service needs." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Chat with us on WhatsApp</a> for a free consultation. We'll analyze your business needs and recommend the perfect package — no pressure, no obligation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;

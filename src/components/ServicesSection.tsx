import React from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const services = [
  { title: 'Website Design & Development', description: 'Custom designed websites that convert visitors into customers. From starter sites delivered in 48 hours to full premium platforms. Domain and SSL included on all packages.', delay: '0.1s', link: '/services/web-development' },
  { title: 'Social Media Management', description: 'Content creation and community management across all major platforms. 4 posts per week, analytics, and monthly reporting to grow your online presence.', delay: '0.2s', link: '/services/social-media' },
  { title: 'Email Marketing', description: 'Newsletter campaigns, automated sequences, and subscriber management. Set up once and let our system nurture your audience on autopilot.', delay: '0.3s', link: '/services/email-marketing' },
  { title: 'Maintenance & Support', description: 'Keep your site secure, fast, and up to date. Weekly backups, security patches, uptime monitoring, and 1 hour of support every month.', delay: '0.4s', link: '/pricing' },
  { title: 'Brand Identity', description: 'Professional brand identity kit with logo, colors, typography, and brand guidelines. Everything you need for a consistent, professional look.', delay: '0.5s', link: '/services/brand-identity' },
  { title: 'Business Automation', description: 'Streamline your operations with intelligent workflows. Connect your forms, email, and CRM so repetitive tasks handle themselves.', delay: '0.6s', link: '/services/automations' },
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
              From websites to marketing to automation — we handle it all so you can focus on your business.
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
      </div>
    </section>
  );
};

export default ServicesSection;

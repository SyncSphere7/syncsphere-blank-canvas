import React from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const services = [
  { title: 'Website Design & Development', description: 'Custom designed websites for your business. From starter sites delivered in 48 hours to full growth platforms. Domain and SSL included on all packages.', delay: '0.1s', link: '/services/web-development' },
  { title: 'AI Chatbot Solutions', description: 'Smart chatbots that engage your customers 24/7 across WhatsApp, web, and social media. CRM integration available for seamless lead management.', delay: '0.2s', link: '/services/chatbots' },
  { title: 'Appointment Booking Systems', description: 'Automated scheduling systems with calendar sync, reminders, and payment integration. Let your clients book anytime, anywhere.', delay: '0.3s', link: '/services/appointment-booking' },
  { title: 'Social Media Management', description: 'Content creation and management across all major platforms. From 3 posts per week to daily content, handled by our team.', delay: '0.4s', link: '/services/social-media' },
  { title: 'Email Marketing', description: 'Newsletter campaigns, automated sequences, and subscriber management. Set up once and let our system nurture your audience.', delay: '0.5s', link: '/services/email-marketing' },
  { title: 'Google Business Management', description: 'Optimize your Google Business profile, manage reviews, and boost local visibility. Monthly reporting on performance and growth.', delay: '0.6s', link: '/services/google-business' },
  { title: 'Business Automation', description: 'Streamline your operations with intelligent workflows. From single processes to multi-department integration, handled by our team.', delay: '0.7s', link: '/services/automations' },
  { title: 'Brand Identity', description: 'Professional brand kits and full visual identity packages. Logo, colors, typography, and brand guidelines custom designed for your business.', delay: '0.8s', link: '/services/brand-identity' },
  { title: 'Micro MVP Development', description: 'Landing page, waitlist, authentication, and deployment — everything you need to validate your startup idea quickly and affordably.', delay: '0.9s', link: '/services/micro-mvp' },
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

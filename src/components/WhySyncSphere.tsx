import React from 'react';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';
import { CheckCircle, Clock, Shield, DollarSign, Headphones, Zap, Globe, TrendingUp, Users } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: '48-Hour Delivery',
    description: 'Get your website live in as little as 48 hours. While other agencies take weeks or months, we deliver professional websites in 2 days. Our streamlined process eliminates bottlenecks without cutting corners on quality.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: '50% upfront, 25% at design approval, 25% on launch. No hidden fees, no surprises. Our Starter package starts at $3,500, Professional at $6,500, and Premium at $10,000+. Every deliverable is clearly defined before we begin.'
  },
  {
    icon: Shield,
    title: 'PayPal Protected',
    description: 'All payments processed through PayPal for buyer protection and security. You\'re covered by PayPal\'s buyer protection policy. If something isn\'t right, you have recourse. We also offer a 30-day bug-fix guarantee after launch.'
  },
  {
    icon: Zap,
    title: 'All-In-One Agency',
    description: 'Websites, marketing, automation, branding — everything your business needs under one roof. No need to juggle multiple vendors. We handle web development, social media management, email marketing, SEO, and business automation.'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Direct phone access to your project manager. Real humans, fast responses. We don\'t use ticketing systems or make you wait 48 hours for a reply. When you have a question, you get an answer — usually within minutes.'
  },
  {
    icon: CheckCircle,
    title: 'Proven Results',
    description: 'We focus on delivering quality results for every client. Our team combines technical expertise with business strategy to build digital solutions that drive real growth. Client satisfaction is our top priority.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We serve clients worldwide. Time zones don\'t matter when your website works 24/7. We\'ve helped businesses across multiple countries establish their online presence.'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimized',
    description: 'Every website we build is optimized for search engines from day one. Proper meta tags, structured data, fast loading speed, mobile responsiveness, and clean code. We don\'t just make sites look good — we make them rank.'
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    description: 'We work closely with you at every stage. From initial consultation to final launch, you\'re involved in every decision. We provide up to 2 rounds of revisions at each milestone to ensure the final product matches your vision exactly.'
  }
];

const WhySyncSphere = () => {
  return (
    <section className="py-20 bg-background relative" id="why-us">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30 blur-3xl -z-10" />
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-6 inline-block border border-primary/20 backdrop-blur-sm">
              Why Choose Us
            </span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Why Businesses Choose SyncSphere</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We're not just another digital agency. We're your growth partner. Here's what makes us different from the competition.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <div className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="inline-block p-8 rounded-2xl bg-card/30 border border-border/50 max-w-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Promise to You</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe every business deserves a professional online presence — regardless of budget. That's why we've built our agency around three core principles: <strong className="text-foreground">speed, transparency, and results</strong>. No hidden fees. No endless timelines. No excuses. Just professional digital services delivered on time, every time.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Whether you need a simple starter website or a complete digital marketing strategy, we have the skills, experience, and dedication to help your business grow online. We're ready to earn your trust.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhySyncSphere;

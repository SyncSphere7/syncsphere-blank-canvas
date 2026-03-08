import React from 'react';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';
import { CheckCircle, Clock, Shield, DollarSign, Headphones, Zap } from 'lucide-react';

const reasons = [
  { icon: Clock, title: '48-Hour Delivery', description: 'Get your website live in as little as 48 hours. No waiting weeks or months.' },
  { icon: DollarSign, title: 'Transparent Pricing', description: '50% upfront, 50% on delivery. No hidden fees, no surprises.' },
  { icon: Shield, title: 'PayPal Protected', description: 'All payments processed through PayPal for buyer protection and security.' },
  { icon: Zap, title: 'All-In-One Agency', description: 'Websites, chatbots, marketing, automation, branding — everything under one roof.' },
  { icon: Headphones, title: 'Dedicated Support', description: 'Direct WhatsApp access to your project manager. Real humans, fast responses.' },
  { icon: CheckCircle, title: 'Proven Results', description: '150+ projects delivered with 98% client satisfaction across 12+ countries.' },
];

const WhySyncSphere = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30 blur-3xl -z-10" />
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-6 inline-block border border-primary/20 backdrop-blur-sm">
              Why Choose Us
            </span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Why Businesses Choose SyncSphere</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We're not just another agency. Here's what makes us different.
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
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhySyncSphere;

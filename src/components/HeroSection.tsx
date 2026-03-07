import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Zap, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  personalization?: {
    greeting: string;
    cta: string;
    urgency: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalization }) => {
  return (
    <section id="home" className="bg-background py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {personalization?.urgency && (
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm mb-4 animate-fadeIn">
            {personalization.urgency}
          </Badge>
        )}
        <span className="px-4 py-2 bg-white/5 dark:bg-white/5 rounded-full text-foreground/80 text-sm mb-6 border border-white/10 dark:border-white/10 backdrop-blur-sm animate-fadeIn">
          Full-Service Digital Agency — Websites, Marketing & Automation
        </span>
        <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6 animate-fadeIn leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Your Digital Partner</span> for Growth & Innovation
        </h1>
        <p className="text-foreground/80 text-xl md:text-2xl mb-10 max-w-3xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Custom websites from $499 in 48 hours. Chatbots, social media management, email marketing, business automation, and brand identity — all handled by our expert team.
        </p>
        <div className="flex flex-col items-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/447424819094?text=Hi! I'd like to get started with a website or digital service." target="_blank" rel="noopener noreferrer">
              <Button 
                className="group bg-gradient-to-r from-[#0EA5E9] to-primary hover:from-primary hover:to-[#0EA5E9] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg flex items-center gap-2 border border-primary/30 shadow-lg shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto" 
              >
                <Globe className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                Get Started — From $499
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            <Link to="/pricing">
              <Button 
                variant="outline"
                className="group backdrop-blur-sm bg-white/5 text-foreground border-foreground/20 hover:bg-foreground/10 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg flex items-center gap-2 shadow-lg shadow-black/5 transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto"
              >
                <Zap className="h-5 w-5" />
                View All Services & Pricing
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center">
            <a href="https://wa.me/447424819094?text=Hi! I'd like a free consultation about your digital services." target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                className="text-foreground/70 hover:text-foreground text-sm flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Free WhatsApp Consultation
              </Button>
            </a>
          </div>
        </div>
        <div className="mt-6 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
          <p className="text-foreground/60 text-sm">
            48-hour delivery available • 50% upfront, 50% on delivery • PayPal protected payments
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

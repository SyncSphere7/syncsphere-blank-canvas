import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Zap, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {personalization?.urgency && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm mb-4">
              {personalization.urgency}
            </Badge>
          </motion.div>
        )}
        
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-2 bg-card/50 rounded-full text-muted-foreground text-sm mb-6 border border-border backdrop-blur-sm"
        >
          Full-Service Digital Agency — Websites, Marketing & Automation
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-foreground text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Your Digital Partner</span> for Growth & Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground text-xl md:text-2xl mb-10 max-w-3xl"
        >
          Custom websites from $499 in 48 hours. Chatbots, social media management, email marketing, business automation, and brand identity — all handled by our expert team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/447424819094?text=Hi! I'd like to get started with a website or digital service." target="_blank" rel="noopener noreferrer">
              <Button 
                className="group bg-gradient-to-r from-primary to-blue-400 hover:from-blue-400 hover:to-primary text-primary-foreground px-6 md:px-8 py-4 md:py-6 text-base md:text-lg flex items-center gap-2 border border-primary/30 shadow-lg shadow-primary/25 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/30 w-full sm:w-auto" 
              >
                <Globe className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                Get Started — From $499
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            <Link to="/pricing">
              <Button 
                variant="outline"
                className="group backdrop-blur-sm bg-card/50 text-foreground border-border hover:bg-accent px-6 md:px-8 py-4 md:py-6 text-base md:text-lg flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px] w-full sm:w-auto"
              >
                <Zap className="h-5 w-5" />
                View All Services & Pricing
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center">
            <a href="https://wa.me/447424819094?text=Hi! I'd like a free consultation about your digital services." target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Free WhatsApp Consultation
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6"
        >
          <p className="text-muted-foreground/70 text-sm">
            48-hour delivery available • 50% upfront, 50% on delivery • PayPal protected payments
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

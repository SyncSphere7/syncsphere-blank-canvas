import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Cookie, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-foreground text-2xl font-bold mb-6">SyncSphere</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your full-service digital agency. Websites, chatbots, marketing, automation, and branding — all under one roof.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a href="tel:+18154727760" className="hover:text-primary transition-colors">+1 815 472 7760</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>info@syncsphereofficial.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CreditCard size={16} className="text-primary" />
                <span>PayPal Protected Payments</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                </svg>
                <a href="https://wa.me/447424819094" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground text-lg font-bold mb-6">Services</h3>
            <div className="space-y-3">
              <Link to="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Website Design</Link>
              <Link to="/services/chatbots" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Chatbot Solutions</Link>
              <Link to="/services/social-media" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Social Media</Link>
              <Link to="/services/email-marketing" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Email Marketing</Link>
              <Link to="/services/automations" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Business Automation</Link>
              <Link to="/services/brand-identity" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Brand Identity</Link>
            </div>
          </div>

          <div>
            <h3 className="text-foreground text-lg font-bold mb-6">Company</h3>
            <div className="space-y-3">
              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Portfolio</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Blog</Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Pricing</Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors block text-sm">Terms of Service</Link>
              <button onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))} className="text-muted-foreground hover:text-primary transition-colors text-left flex items-center gap-2 text-sm">
                <Cookie size={14} />Cookie Settings
              </button>
            </div>
            <div className="mt-6 space-y-2 text-xs text-muted-foreground/70">
              <p>Payment: 50% upfront, 50% on delivery</p>
              <p>All prices in USD. GBP/EUR available.</p>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-foreground text-lg font-bold mb-6">Connect With Us</h3>
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/syncsphereofficial", icon: Facebook },
                { href: "https://www.instagram.com/syncsphereofficial/", icon: Instagram },
                { href: "https://www.linkedin.com/company/106670846", icon: Linkedin },
                { href: "https://x.com/syncsphereoffic", icon: Twitter },
              ].map(({ href, icon: Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="bg-card/50 border border-border p-3 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                  <Icon size={20} className="text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground/70">
          <p>&copy; 2026 SyncSphere. All rights reserved. Your Full-Service Digital Agency.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

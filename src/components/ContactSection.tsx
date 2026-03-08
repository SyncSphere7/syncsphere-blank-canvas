import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal, Check, CreditCard } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@/styles/phone-input.css';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'contact', service: 'General Inquiry' }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed');
      }
    } catch {
      setIsSubmitting(false);
      toast({ title: "Error", description: "Please email us directly at info@syncsphereofficial.com", variant: "destructive" });
    }
  };

  return (
    <section id="contact" className="bg-background py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 opacity-30 blur-3xl -z-10" />
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-card/50 rounded-full text-muted-foreground text-sm mb-6 inline-block border border-border backdrop-blur-sm">
              Get in Touch
            </span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Ready to Grow Your Business?</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Tell us what you need and we'll get back to you within 24 hours with a plan and quote.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card/50 border border-border/50 rounded-lg p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-muted-foreground">Full Name *</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="bg-background/50 border-border focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground">Email Address *</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required className="bg-background/50 border-border focus:border-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-muted-foreground">Phone Number</label>
                    <PhoneInput country={'us'} value={formData.phone} onChange={(value: string) => setFormData(prev => ({ ...prev, phone: value }))} inputProps={{ name: 'phone', id: 'phone', placeholder: 'Phone Number' }} containerClass="phone-input-container" buttonClass="phone-input-button" dropdownClass="phone-input-dropdown" searchClass="phone-input-search" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm text-muted-foreground">Company (Optional)</label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className="bg-background/50 border-border focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">Message *</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project — what services are you interested in?" required className="bg-background/50 border-border focus:border-primary min-h-32" />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button type="submit" disabled={isSubmitting || isSubmitted} className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-400 hover:from-blue-400 hover:to-primary text-primary-foreground px-8 py-6 text-lg flex items-center gap-2 border border-primary/30 shadow-lg shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px]">
                    {isSubmitting ? 'Sending...' : isSubmitted ? <><Check size={20} /> Sent!</> : <><SendHorizontal size={20} /> Send Message</>}
                  </Button>
                  <div className="flex items-center gap-2 text-muted-foreground/70 text-sm">
                    <CreditCard size={16} />
                    <span>Payments via PayPal - 50% upfront, 50% on delivery</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;

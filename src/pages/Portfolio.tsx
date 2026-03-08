import React from 'react';
import SEOProvider from '@/components/SEOProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, MessageSquare, Calendar, Share2, Zap, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const projects = [
  { title: 'E-Commerce Website Redesign', category: 'Web Development', description: 'Complete redesign and rebuild for a UK-based fashion retailer. Delivered in 72 hours with integrated booking system.', result: '+180% online sales', icon: Globe, link: '/services/web-development' },
  { title: 'Customer Support Chatbot', category: 'AI Chatbots', description: 'Multi-platform chatbot deployment across WhatsApp, web, and Instagram for a SaaS company.', result: '-70% support tickets', icon: MessageSquare, link: '/services/chatbots' },
  { title: 'Medical Clinic Booking System', category: 'Appointment Booking', description: 'Custom scheduling system with SMS reminders and payment integration for a US dental practice.', result: '-40% no-shows', icon: Calendar, link: '/services/appointment-booking' },
  { title: 'Restaurant Social Media Campaign', category: 'Social Media', description: 'Full social media management across Instagram, Facebook, and TikTok with daily content creation.', result: '+300% engagement', icon: Share2, link: '/services/social-media' },
  { title: 'Logistics Workflow Automation', category: 'Automation', description: 'End-to-end automation of order processing, inventory tracking, and customer notifications.', result: '-80% manual work', icon: Zap, link: '/services/automations' },
  { title: 'Startup Brand Identity', category: 'Brand Identity', description: 'Complete brand kit including logo, color palette, typography, and guidelines for a fintech startup.', result: 'Launch-ready in 5 days', icon: Palette, link: '/services/brand-identity' },
];

const Portfolio = () => {
  return (
    <SEOProvider title="Our Work & Portfolio | SyncSphere Digital Agency" description="See examples of websites, chatbots, automations, and branding we've delivered for businesses worldwide. 150+ projects completed.">
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-primary text-primary">Our Work</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Portfolio</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A selection of projects we've delivered for businesses around the world. Each project was custom-built to solve real business challenges.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-card/50 border border-border/50 h-full hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <project.icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">{project.category}</Badge>
                      </div>
                      <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/20">{project.result}</Badge>
                        <Link to={project.link}>
                          <Button variant="ghost" size="sm" className="text-primary p-0 h-auto hover:bg-transparent">
                            View Service <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal>
              <div className="text-center">
                <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Be Our Next Success Story?</h2>
                    <p className="text-muted-foreground mb-6">Tell us about your project and we'll get back to you within 24 hours.</p>
                    <a href="https://wa.me/447424819094?text=Hi! I'd like to discuss a project." target="_blank" rel="noopener noreferrer">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </main>
        <Footer />
      </div>
    </SEOProvider>
  );
};

export default Portfolio;

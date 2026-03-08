import React from 'react';
import SEOProvider from '@/components/SEOProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const posts = [
  { title: '5 Reasons Your Business Needs a Chatbot in 2026', excerpt: 'Chatbots aren't just for big tech anymore. Here's why small and medium businesses are adopting AI chatbots to boost customer engagement and reduce costs.', category: 'AI & Chatbots', readTime: '4 min', date: 'March 5, 2026' },
  { title: 'How to Get Your Website Live in 48 Hours', excerpt: 'Speed matters. Learn how our streamlined process delivers professional websites in just 2 days without cutting corners on quality.', category: 'Web Development', readTime: '3 min', date: 'March 1, 2026' },
  { title: 'The Complete Guide to Social Media Management for Small Businesses', excerpt: 'From content calendars to analytics dashboards — everything you need to know about managing your social media presence effectively.', category: 'Social Media', readTime: '6 min', date: 'February 25, 2026' },
  { title: 'Business Automation: What to Automate First', excerpt: 'Not sure where to start with automation? We break down the top 5 business processes you should automate today for immediate ROI.', category: 'Automation', readTime: '5 min', date: 'February 20, 2026' },
  { title: 'Why Brand Identity Matters More Than You Think', excerpt: 'Your brand is more than a logo. Discover how a cohesive brand identity can transform customer perception and drive business growth.', category: 'Branding', readTime: '4 min', date: 'February 15, 2026' },
  { title: 'Email Marketing vs Social Media: Where Should You Invest?', excerpt: 'Both channels have their strengths. We compare ROI, reach, and engagement to help you decide where to focus your marketing budget.', category: 'Marketing', readTime: '5 min', date: 'February 10, 2026' },
];

const Blog = () => {
  return (
    <SEOProvider title="Blog | Digital Marketing Tips & Business Growth | SyncSphere" description="Expert insights on web development, AI chatbots, social media, email marketing, and business automation. Practical tips to grow your business online.">
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-primary text-primary">Blog</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Insights & Resources</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Expert tips on growing your business online — from web development to marketing to AI automation.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-card/50 border border-border/50 h-full hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">{post.category}</Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />{post.readTime}
                        </span>
                      </div>
                      <h3 className="text-foreground font-semibold text-lg mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <Button variant="ghost" size="sm" className="text-primary p-0 h-auto hover:bg-transparent">
                          Read More <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal>
              <div className="text-center">
                <p className="text-muted-foreground">More articles coming soon. Want to stay updated?</p>
                <a href="https://wa.me/447424819094?text=Hi! I'd like to subscribe to your blog updates." target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="mt-4">
                    Get Notified <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </main>
        <Footer />
      </div>
    </SEOProvider>
  );
};

export default Blog;

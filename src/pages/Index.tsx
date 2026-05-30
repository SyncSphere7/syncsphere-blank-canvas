import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustBadges from '../components/TrustBadges';
import ClientLogos from '../components/ClientLogos';
import WhySyncSphere from '../components/WhySyncSphere';
import ReviewsSection from '../components/ReviewsSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  { slug: 'why-your-business-needs-website-2026', title: 'Why Your Business Needs a Professional Website in 2026', excerpt: '93% of online experiences begin with a search engine. Learn why investing in a professional website is the most important digital marketing decision.', category: 'Web Development', readTime: '5 min', date: 'May 10, 2026' },
  { slug: 'how-to-choose-digital-agency', title: 'How to Choose the Right Digital Agency: A Complete Guide', excerpt: 'Choosing the wrong digital agency can cost you thousands. This guide covers red flags, must-have capabilities, and questions to ask.', category: 'Business', readTime: '7 min', date: 'May 8, 2026' },
  { slug: 'social-media-management-roi', title: 'Social Media Management: How to Measure ROI', excerpt: 'Stop guessing whether your social media is working. Learn the exact metrics that matter and what ROI to expect.', category: 'Social Media', readTime: '6 min', date: 'May 5, 2026' },
];

const Index = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SyncSphere Digital Agency",
    "description": "Professional digital agency offering website design, social media management, email marketing, business automation, and brand identity. Websites from $3,500 with domain and SSL included.",
    "url": "https://syncsphere-blank-canvas.vercel.app",
    "logo": "https://syncsphere-blank-canvas.vercel.app/syncsphere-logo.png",
    "sameAs": [
      "https://twitter.com/SyncSphere",
      "https://www.linkedin.com/company/syncsphere"
    ],
    "address": { "@type": "PostalAddress", "addressCountry": "US" },
    "priceRange": "$3,500-$10,000+",
    "paymentAccepted": "Stripe, bank transfer, Visa, debit",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maintenance & Support" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation" } },
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Helmet>
        <title>SyncSphere | Premium Digital Agency — Websites, Marketing & Automation</title>
        <meta name="description" content="Professional websites from $3,500. Social media management, email marketing, business automation & brand identity. 50/25/25 payment terms. Stripe, bank transfer, Visa & debit accepted. Domain & SSL included." />
        <link rel="canonical" href="https://syncsphere-blank-canvas.vercel.app" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <ClientLogos />
        <ServicesSection />
        <WhySyncSphere />
        <ProcessSection />
        <ReviewsSection />
        <TestimonialsSection />

        {/* Blog Section */}
        <section className="py-20 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30 blur-3xl -z-10"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary text-primary">Blog</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Latest Insights & Tips</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expert advice on web development, digital marketing, social media, and business automation to help you grow online.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                      <Link to={`/blog/${post.slug}`} className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/blog">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View All Posts <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FAQSection />
        <ContactSection />
        <StickyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

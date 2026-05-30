import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Globe, Smartphone, Zap, Shield } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <SEOProvider
      title="Website Design & Development | Custom Sites from $3,500 | SyncSphere"
      description="Professional website design delivered in 48 hours. Starter $3,500, Professional $6,500, Premium $10,000+. Domain and SSL included. Custom designed for your business."
      keywords="website design, web development, custom websites, fast delivery, professional websites, small business website"
      service="web-development"
    >
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary"><Globe className="w-4 h-4 mr-2" />Website Design</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Website Design & Development</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Custom designed websites for your business. Fast delivery, professional quality, and everything you need to get online — domain and SSL included.
            </p>
            <a href="tel:+14326920996" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From $3,500<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Globe className="h-12 w-12 text-primary mx-auto mb-4" />, title: 'Custom Design', desc: 'Unique designs created specifically for your business' },
              { icon: <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />, title: 'Mobile-Friendly', desc: 'Responsive on all devices — phones, tablets, desktops' },
              { icon: <Zap className="h-12 w-12 text-primary mx-auto mb-4" />, title: 'Fast Delivery', desc: 'Starter sites delivered in just 48 hours' },
              { icon: <Shield className="h-12 w-12 text-primary mx-auto mb-4" />, title: 'Domain & SSL', desc: '.com domain and SSL certificate included' }
            ].map((f, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  {f.icon}
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Website Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <div className="text-3xl font-bold">$3,500</div>
                  <p className="text-sm text-muted-foreground">Delivered in 48 hours</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['Up to 3 pages', 'Custom responsive design', '.com domain (1 year)', 'SSL certificate', 'Basic SEO setup', 'Contact form'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                    ))}
                  </ul>
                  <a href="tel:+14326920996" target="_blank" rel="noopener noreferrer" className="mt-4 block">
                    <Button className="w-full" variant="outline">Get Started</Button>
                  </a>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle>Professional</CardTitle>
                  <div className="text-3xl font-bold">$6,500</div>
                  <p className="text-sm text-muted-foreground">Delivered in 5 days</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['Up to 7 pages', 'Custom responsive design', '.com domain (1 year)', 'SSL certificate', 'Advanced SEO', 'Blog/CMS integration', 'Analytics setup', 'Social media integration'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                    ))}
                  </ul>
                  <a href="tel:+14326920996" target="_blank" rel="noopener noreferrer" className="mt-4 block">
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <div className="text-3xl font-bold">$10,000+</div>
                  <p className="text-sm text-muted-foreground">Custom timeline</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['7+ pages', 'Premium custom design', '.com domain (1 year)', 'SSL certificate', 'Full SEO optimization', 'Animations & interactions', 'Integrations (CRM, booking, payments)'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                    ))}
                  </ul>
                  <a href="tel:+14326920996" target="_blank" rel="noopener noreferrer" className="mt-4 block">
                    <Button className="w-full" variant="outline">Get Started</Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-foreground/70 flex items-center justify-center gap-2">
                  Payment: 50/25/25 • Stripe, bank transfer, Visa & debit accepted
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default WebDevelopment;

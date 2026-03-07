import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, MapPin, CreditCard } from 'lucide-react';

const GoogleBusiness = () => {
  return (
    <SEOProvider title="Google Business Management | SyncSphere" description="Optimize your Google Business profile and boost local visibility. Monthly management from $99.">
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary"><MapPin className="w-4 h-4 mr-2" />Google Business</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Google Business Management</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Get found by local customers. We optimize your Google Business profile, manage reviews, and boost your local search visibility.</p>
            <a href="https://wa.me/447424819094?text=Hi! I'm interested in Google Business management." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From $99/mo<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader><CardTitle>Basic</CardTitle><div className="text-3xl font-bold">$99<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Profile optimization", "Weekly posts", "Review monitoring", "Monthly report"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Basic Google Business package ($99/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader><Badge className="w-fit mb-2">Most Popular</Badge><CardTitle>Standard</CardTitle><div className="text-3xl font-bold">$199<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Full profile optimization", "3x weekly posts", "Review management & responses", "Competitor analysis", "Bi-weekly reporting"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Standard Google Business package ($199/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Growth</CardTitle><div className="text-3xl font-bold">$299<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Everything in Standard", "Daily posts", "Local SEO optimization", "Google Ads management", "Weekly reporting", "Priority support"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Growth Google Business package ($299/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-primary/5 border-primary/20"><CardContent className="p-8"><p className="text-foreground/70 flex items-center justify-center gap-2"><CreditCard className="h-4 w-4" />Payment: 50% upfront, 50% on delivery • PayPal accepted</p></CardContent></Card>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default GoogleBusiness;

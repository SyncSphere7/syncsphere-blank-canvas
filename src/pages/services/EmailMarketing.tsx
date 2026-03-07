import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Mail, CreditCard } from 'lucide-react';

const EmailMarketing = () => {
  return (
    <SEOProvider title="Email Marketing Services | SyncSphere" description="Professional email marketing from $149/month. Newsletter campaigns, automated sequences, and subscriber management.">
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary"><Mail className="w-4 h-4 mr-2" />Email Marketing</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Email Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Reach your audience directly with professionally crafted newsletters and automated email sequences. Setup and ongoing management by our team.</p>
            <a href="https://wa.me/447424819094?text=Hi! I'm interested in email marketing services." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From $149/mo<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader><CardTitle>Setup Only</CardTitle><div className="text-3xl font-bold">$199</div><p className="text-sm text-muted-foreground">One-time setup</p></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Email platform setup", "Template design", "List import & segmentation", "Welcome sequence (3 emails)"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Email Setup Only package ($199)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader><Badge className="w-fit mb-2">Most Popular</Badge><CardTitle>Starter</CardTitle><div className="text-3xl font-bold">$149<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["2 newsletters per month", "Template design", "List management", "Performance reporting", "A/B testing"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Starter Email Marketing package ($149/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Growth</CardTitle><div className="text-3xl font-bold">$299<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["4 newsletters per month", "Marketing automation", "Advanced segmentation", "Detailed analytics", "Drip campaigns", "Priority support"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Growth Email Marketing package ($299/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
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

export default EmailMarketing;

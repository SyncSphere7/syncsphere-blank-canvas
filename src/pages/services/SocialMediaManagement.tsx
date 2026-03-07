import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Share2, CreditCard } from 'lucide-react';

const SocialMediaManagement = () => {
  return (
    <SEOProvider title="Social Media Management | SyncSphere" description="Professional social media management from $199/month. Content creation, scheduling, and analytics across all major platforms.">
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary"><Share2 className="w-4 h-4 mr-2" />Social Media</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Social Media Management</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Consistent, quality content across all your platforms. Our team handles everything — strategy, creation, scheduling, and reporting.</p>
            <a href="https://wa.me/447424819094?text=Hi! I'm interested in social media management." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From $199/mo<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader><CardTitle>Basic</CardTitle><div className="text-3xl font-bold">$199<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["3 posts per week", "2 platforms", "Content calendar", "Monthly analytics report"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Basic Social Media package ($199/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader><Badge className="w-fit mb-2">Most Popular</Badge><CardTitle>Standard</CardTitle><div className="text-3xl font-bold">$349<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["5 posts per week", "3 platforms", "Content calendar", "Engagement management", "Bi-weekly reporting"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Standard Social Media package ($349/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Growth</CardTitle><div className="text-3xl font-bold">$599<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Daily posts", "4 platforms", "Content strategy", "Community management", "Weekly reporting", "Paid ad management"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Growth Social Media package ($599/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-foreground/70 flex items-center justify-center gap-2"><CreditCard className="h-4 w-4" />Payment: 50% upfront, 50% on delivery • PayPal accepted</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ServiceLayout>
    </SEOProvider>
  );
};

export default SocialMediaManagement;

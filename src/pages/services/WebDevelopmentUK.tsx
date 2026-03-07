import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Globe, CreditCard } from 'lucide-react';

const WebDevelopmentUK = () => (
  <SEOProvider title="Website Design UK | Custom Sites from £399 | SyncSphere" description="Professional website design for UK businesses from £399. Delivered in 48 hours. Domain and SSL included." region="uk" service="web-development">
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary"><Globe className="w-4 h-4 mr-2" />UK Web Design</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Website Design — UK</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Custom designed websites for UK businesses. Fast delivery, domain and SSL included.</p>
          <a href="https://wa.me/447424819094?text=Hi! I'm a UK business looking for a website." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From £399<ArrowRight className="ml-2 h-4 w-4" /></Button>
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card><CardHeader><CardTitle>Starter</CardTitle><div className="text-3xl font-bold">£399</div><p className="text-sm text-muted-foreground">48 hours delivery</p></CardHeader><CardContent><ul className="space-y-2">{["Up to 3 pages","Responsive design","Domain + SSL","Basic SEO","Contact form"].map((f,i)=><li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/><span className="text-sm">{f}</span></li>)}</ul></CardContent></Card>
          <Card className="border-primary"><CardHeader><Badge className="w-fit mb-2">Popular</Badge><CardTitle>Business</CardTitle><div className="text-3xl font-bold">£699</div><p className="text-sm text-muted-foreground">72 hours delivery</p></CardHeader><CardContent><ul className="space-y-2">{["Up to 7 pages","Custom design","Domain + SSL","Advanced SEO","Blog/CMS","Analytics"].map((f,i)=><li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/><span className="text-sm">{f}</span></li>)}</ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Growth</CardTitle><div className="text-3xl font-bold">£1,199</div><p className="text-sm text-muted-foreground">5 days delivery</p></CardHeader><CardContent><ul className="space-y-2">{["Up to 15 pages","Premium design","Domain + SSL","Full SEO","E-commerce ready","Booking integration"].map((f,i)=><li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/><span className="text-sm">{f}</span></li>)}</ul></CardContent></Card>
        </div>
        <div className="text-center"><Card className="bg-primary/5 border-primary/20"><CardContent className="p-8"><p className="text-foreground/70 flex items-center justify-center gap-2"><CreditCard className="h-4 w-4"/>50% upfront, 50% on delivery • PayPal accepted • Hosting: £79/month</p></CardContent></Card></div>
      </div>
    </ServiceLayout>
  </SEOProvider>
);
export default WebDevelopmentUK;

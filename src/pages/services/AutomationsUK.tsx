import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Zap, CreditCard } from 'lucide-react';

const AutomationsUK = () => (
  <SEOProvider title="Business Automation UK | SyncSphere" description="Business automation for UK companies. Starter £399, Business £1,199. 50% upfront, 50% on delivery." region="uk" service="automations">
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary"><Zap className="w-4 h-4 mr-2" />UK Business Automation</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Business Automation — UK</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Streamline your UK business operations with intelligent workflows handled by our team.</p>
          <a href="https://wa.me/447424819094?text=Hi! I'm a UK business interested in automation services." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From £399<ArrowRight className="ml-2 h-4 w-4" /></Button>
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card><CardHeader><CardTitle>Starter</CardTitle><div className="text-3xl font-bold">£399</div><p className="text-sm text-muted-foreground">+ £59/month</p></CardHeader><CardContent><ul className="space-y-2">{["1 workflow automation","Process analysis","Setup & configuration","Email support"].map((f,i)=><li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/><span className="text-sm">{f}</span></li>)}</ul></CardContent></Card>
          <Card className="border-primary"><CardHeader><Badge className="w-fit mb-2">Best Value</Badge><CardTitle>Business</CardTitle><div className="text-3xl font-bold">£1,199</div><p className="text-sm text-muted-foreground">+ £119/month</p></CardHeader><CardContent><ul className="space-y-2">{["3–5 workflows","Cross-department integration","Custom dashboards","Priority support"].map((f,i)=><li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/><span className="text-sm">{f}</span></li>)}</ul></CardContent></Card>
        </div>
        <div className="text-center"><Card className="bg-primary/5 border-primary/20"><CardContent className="p-8"><p className="text-foreground/70 flex items-center justify-center gap-2"><CreditCard className="h-4 w-4"/>50% upfront, 50% on delivery • PayPal accepted</p></CardContent></Card></div>
      </div>
    </ServiceLayout>
  </SEOProvider>
);
export default AutomationsUK;

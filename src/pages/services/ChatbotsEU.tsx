import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, MessageSquare, CreditCard } from 'lucide-react';

const ChatbotsEU = () => (
  <SEOProvider title="AI Chatbot Solutions EU | SyncSphere" description="AI chatbot solutions for EU businesses from €359. GDPR compliant. Smart customer engagement.">
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary"><MessageSquare className="w-4 h-4 mr-2" />EU Chatbot Solutions</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">AI Chatbot Solutions — EU</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Smart, GDPR-compliant chatbots for European businesses. Handled by our team.</p>
          <a href="https://wa.me/447424819094?text=Hi! I'm an EU business interested in chatbot solutions." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From €359<ArrowRight className="ml-2 h-4 w-4" /></Button>
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card><CardHeader><CardTitle>Basic</CardTitle><div className="text-3xl font-bold">€359</div><p className="text-sm text-muted-foreground">+ €45/month</p></CardHeader><CardContent><ul className="space-y-2">{["1 platform","FAQ responses","GDPR compliant","Basic analytics"].map((f,i)=><li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/><span className="text-sm">{f}</span></li>)}</ul></CardContent></Card>
          <Card className="border-primary"><CardHeader><Badge className="w-fit mb-2">Popular</Badge><CardTitle>Standard</CardTitle><div className="text-3xl font-bold">€719</div><p className="text-sm text-muted-foreground">+ €89/month</p></CardHeader><CardContent><ul className="space-y-2">{["2 platforms","Smart responses","CRM integration","Analytics dashboard"].map((f,i)=><li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/><span className="text-sm">{f}</span></li>)}</ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Advanced</CardTitle><div className="text-3xl font-bold">€1,349</div><p className="text-sm text-muted-foreground">+ €129/month</p></CardHeader><CardContent><ul className="space-y-2">{["3+ platforms + CRM","Multi-language","Custom integrations","Priority support"].map((f,i)=><li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/><span className="text-sm">{f}</span></li>)}</ul></CardContent></Card>
        </div>
        <div className="text-center"><Card className="bg-primary/5 border-primary/20"><CardContent className="p-8"><p className="text-foreground/70 flex items-center justify-center gap-2"><CreditCard className="h-4 w-4"/>50% upfront, 50% on delivery • PayPal accepted</p></CardContent></Card></div>
      </div>
    </ServiceLayout>
  </SEOProvider>
);
export default ChatbotsEU;

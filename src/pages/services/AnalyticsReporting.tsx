import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, BarChart3, CreditCard } from 'lucide-react';

const AnalyticsReporting = () => {
  return (
    <SEOProvider title="Analytics & Reporting | SyncSphere" description="Professional analytics and reporting dashboards from $79/month. Track your business performance with clear, actionable insights.">
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary"><BarChart3 className="w-4 h-4 mr-2" />Analytics</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Analytics & Reporting</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Know exactly how your business is performing. Clear, actionable reports and dashboards delivered by our team.</p>
            <a href="https://wa.me/447424819094?text=Hi! I'm interested in analytics and reporting." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From $79/mo<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card>
              <CardHeader><CardTitle>Basic Report</CardTitle><div className="text-3xl font-bold">$79<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Monthly performance report", "Website traffic analysis", "Social media metrics", "Key insights & recommendations"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Basic Analytics Report ($79/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader><Badge className="w-fit mb-2">Recommended</Badge><CardTitle>Full Dashboard</CardTitle><div className="text-3xl font-bold">$149<span className="text-lg font-normal">/mo</span></div></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Live analytics dashboard", "All channel tracking", "Conversion tracking", "Competitor benchmarking", "Weekly automated reports", "Strategy recommendations"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Full Dashboard Analytics package ($149/mo)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
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

export default AnalyticsReporting;

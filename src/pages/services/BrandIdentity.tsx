import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Palette, CreditCard } from 'lucide-react';

const BrandIdentity = () => {
  return (
    <SEOProvider title="Brand Identity Design | SyncSphere" description="Professional brand identity packages from $199. Logo design, color palette, typography, and complete brand guidelines.">
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary"><Palette className="w-4 h-4 mr-2" />Brand Identity</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Brand Identity</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Stand out from the crowd with a professional brand identity. Custom designed logos, color palettes, and brand guidelines for your business.</p>
            <a href="https://wa.me/447424819094?text=Hi! I'm interested in brand identity design." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From $199<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card>
              <CardHeader><CardTitle>Basic Brand Kit</CardTitle><div className="text-3xl font-bold">$199</div><p className="text-sm text-muted-foreground">One-time</p></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Logo design (3 concepts)", "Color palette", "Typography selection", "Social media profile kit", "Digital files (PNG, SVG, PDF)"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Basic Brand Kit ($199)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader><Badge className="w-fit mb-2">Complete Package</Badge><CardTitle>Full Brand Identity</CardTitle><div className="text-3xl font-bold">$499</div><p className="text-sm text-muted-foreground">One-time</p></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Logo design (5 concepts)", "Full color system", "Typography guidelines", "Brand guidelines document", "Business card design", "Social media kit", "Letterhead & invoice template", "All digital files"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Full Brand Identity package ($499)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
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

export default BrandIdentity;

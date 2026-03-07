import React from 'react';
import SEOProvider from '@/components/SEOProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Rocket, CreditCard } from 'lucide-react';

const StartupMVP = () => {
  return (
    <SEOProvider title="Micro MVP Development | Launch Your Idea Fast | SyncSphere" description="Micro MVP development from $1,499. Landing page, waitlist, authentication, and deployment. Validate your idea quickly and affordably.">
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 text-center">
              <Badge variant="outline" className="mb-4 border-primary text-primary"><Rocket className="w-4 h-4 mr-2" />Micro MVP</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Micro MVP</span> Development
              </h1>
              <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
                Everything you need to validate your startup idea. Landing page, waitlist, authentication, and deployment — built by our team and delivered fast.
              </p>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4">
              <Card className="border-primary">
                <CardHeader className="text-center">
                  <Badge className="mx-auto mb-2">All-In-One Package</Badge>
                  <CardTitle className="text-2xl">Micro MVP</CardTitle>
                  <div className="text-4xl font-bold text-foreground mt-4">$1,499 – $2,999</div>
                  <p className="text-foreground/60 mt-2">Depends on complexity and features</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4 text-foreground">What's Included</h3>
                      <ul className="space-y-2">
                        {["Custom landing page", "Waitlist / signup system", "User authentication", "Deployment & hosting setup", "Domain configuration", "Mobile-responsive design", "Basic analytics", "30 days post-launch support"].map((f, i) => (
                          <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 text-foreground">Perfect For</h3>
                      <ul className="space-y-2 text-sm text-foreground/70">
                        <li>✅ Validating a startup idea before full build</li>
                        <li>✅ Collecting early adopter signups</li>
                        <li>✅ Testing market demand quickly</li>
                        <li>✅ Building investor-ready demos</li>
                        <li>✅ Launching a product waitlist</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <a href="https://wa.me/447424819094?text=Hi! I'm interested in the Micro MVP package for my startup idea." target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started<ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </a>
                    <p className="text-foreground/50 text-sm mt-4 flex items-center justify-center gap-2"><CreditCard className="h-4 w-4" />50% upfront, 50% on delivery • PayPal accepted</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SEOProvider>
  );
};

export default StartupMVP;

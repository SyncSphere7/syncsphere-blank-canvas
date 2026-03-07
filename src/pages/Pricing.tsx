import React from 'react';
import { Link } from 'react-router-dom';
import SEOProvider from '@/components/SEOProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Check, Phone, CreditCard, Shield, Lock } from 'lucide-react';

const Pricing = () => {
  return (
    <SEOProvider
      title="Pricing | Affordable Digital Services | SyncSphere"
      description="Transparent pricing for websites, chatbots, social media, email marketing, automation, and more. Starting from $79/month. 50% upfront, 50% on delivery."
      keywords="website pricing, chatbot pricing, social media management pricing, digital agency pricing, affordable web design"
    >
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-20 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30 blur-3xl -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-foreground text-4xl md:text-6xl font-bold mb-6">
                Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Transparent Pricing</span>
              </h1>
              <p className="text-foreground/80 text-xl mb-8 max-w-3xl mx-auto">
                No hidden fees. 50% upfront, 50% on delivery. PayPal protected payments.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80"><Shield className="h-4 w-4 mr-2" />USA Registered</Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80"><Lock className="h-4 w-4 mr-2" />SSL Secured</Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80"><CreditCard className="h-4 w-4 mr-2" />PayPal Protected</Badge>
              </div>
            </div>
          </section>

          {/* Website Design */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Website Design & Development</h2>
              <p className="text-center text-foreground/70 mb-12">Domain (.com, 1 year) and SSL included on all packages</p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <Card>
                  <CardHeader className="text-center"><CardTitle>Starter</CardTitle><div className="text-3xl font-bold text-foreground">$499</div><p className="text-sm text-foreground/60">48 hours delivery</p></CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">{["Up to 3 pages", "Responsive design", "Domain + SSL", "Basic SEO", "Contact form"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>)}</ul>
                    <Link to="/services/web-development"><Button className="w-full" variant="outline" size="sm">Learn More</Button></Link>
                  </CardContent>
                </Card>
                <Card className="border-primary">
                  <CardHeader className="text-center"><Badge className="mx-auto mb-2">Most Popular</Badge><CardTitle>Business</CardTitle><div className="text-3xl font-bold text-foreground">$899</div><p className="text-sm text-foreground/60">72 hours delivery</p></CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">{["Up to 7 pages", "Custom design", "Domain + SSL", "Advanced SEO", "Blog/CMS", "Analytics"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>)}</ul>
                    <Link to="/services/web-development"><Button className="w-full bg-primary hover:bg-primary/90" size="sm">Learn More</Button></Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center"><CardTitle>Growth</CardTitle><div className="text-3xl font-bold text-foreground">$1,499</div><p className="text-sm text-foreground/60">5 days delivery</p></CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">{["Up to 15 pages", "Premium design", "Domain + SSL", "Full SEO", "E-commerce ready", "Booking integration"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>)}</ul>
                    <Link to="/services/web-development"><Button className="w-full" variant="outline" size="sm">Learn More</Button></Link>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-foreground/50 text-sm">Hosting retainer: $99/month • Additional revisions: $30 each</p>
            </div>
          </section>

          {/* AI Chatbots */}
          <section className="py-16 bg-white/5">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">AI Chatbot Solutions</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card><CardHeader className="text-center"><CardTitle>Basic</CardTitle><div className="text-3xl font-bold text-foreground">$399</div><p className="text-sm text-foreground/60">+ $49/month</p></CardHeader><CardContent><ul className="space-y-2 mb-4">{["1 platform", "FAQ responses", "Lead capture", "Basic analytics"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>)}</ul><Link to="/services/chatbots"><Button className="w-full" variant="outline" size="sm">Learn More</Button></Link></CardContent></Card>
                <Card className="border-primary"><CardHeader className="text-center"><Badge className="mx-auto mb-2">Most Popular</Badge><CardTitle>Standard</CardTitle><div className="text-3xl font-bold text-foreground">$799</div><p className="text-sm text-foreground/60">+ $99/month</p></CardHeader><CardContent><ul className="space-y-2 mb-4">{["2 platforms", "Smart responses", "Appointment booking", "CRM integration", "Analytics"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>)}</ul><Link to="/services/chatbots"><Button className="w-full bg-primary hover:bg-primary/90" size="sm">Learn More</Button></Link></CardContent></Card>
                <Card><CardHeader className="text-center"><CardTitle>Advanced</CardTitle><div className="text-3xl font-bold text-foreground">$1,499</div><p className="text-sm text-foreground/60">+ $149/month</p></CardHeader><CardContent><ul className="space-y-2 mb-4">{["3+ platforms", "CRM integration", "Custom training", "Priority support", "Advanced analytics"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>)}</ul><Link to="/services/chatbots"><Button className="w-full" variant="outline" size="sm">Learn More</Button></Link></CardContent></Card>
              </div>
            </div>
          </section>

          {/* More Services Grid */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">More Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Appointment Booking */}
                <Card><CardHeader><CardTitle className="text-lg">Appointment Booking</CardTitle></CardHeader><CardContent><div className="space-y-2 text-sm mb-4"><p><strong>Starter:</strong> $199 + $39/mo</p><p><strong>Business:</strong> $499 + $79/mo</p><p><strong>Advanced:</strong> $899 + $129/mo</p></div><Link to="/services/appointment-booking"><Button className="w-full" variant="outline" size="sm">View Details</Button></Link></CardContent></Card>
                {/* Social Media */}
                <Card><CardHeader><CardTitle className="text-lg">Social Media Management</CardTitle></CardHeader><CardContent><div className="space-y-2 text-sm mb-4"><p><strong>Basic:</strong> $199/mo (3 posts/wk, 2 platforms)</p><p><strong>Standard:</strong> $349/mo (5 posts/wk, 3 platforms)</p><p><strong>Growth:</strong> $599/mo (daily, 4 platforms)</p></div><Link to="/services/social-media"><Button className="w-full" variant="outline" size="sm">View Details</Button></Link></CardContent></Card>
                {/* Email Marketing */}
                <Card><CardHeader><CardTitle className="text-lg">Email Marketing</CardTitle></CardHeader><CardContent><div className="space-y-2 text-sm mb-4"><p><strong>Setup Only:</strong> $199 one-time</p><p><strong>Starter:</strong> $149/mo (2 newsletters)</p><p><strong>Growth:</strong> $299/mo (4 newsletters + automation)</p></div><Link to="/services/email-marketing"><Button className="w-full" variant="outline" size="sm">View Details</Button></Link></CardContent></Card>
                {/* Google Business */}
                <Card><CardHeader><CardTitle className="text-lg">Google Business Management</CardTitle></CardHeader><CardContent><div className="space-y-2 text-sm mb-4"><p><strong>Basic:</strong> $99/mo</p><p><strong>Standard:</strong> $199/mo</p><p><strong>Growth:</strong> $299/mo</p></div><Link to="/services/google-business"><Button className="w-full" variant="outline" size="sm">View Details</Button></Link></CardContent></Card>
                {/* Analytics */}
                <Card><CardHeader><CardTitle className="text-lg">Analytics & Reporting</CardTitle></CardHeader><CardContent><div className="space-y-2 text-sm mb-4"><p><strong>Basic Report:</strong> $79/mo</p><p><strong>Full Dashboard:</strong> $149/mo</p></div><Link to="/services/analytics"><Button className="w-full" variant="outline" size="sm">View Details</Button></Link></CardContent></Card>
                {/* Business Automation */}
                <Card><CardHeader><CardTitle className="text-lg">Business Automation</CardTitle></CardHeader><CardContent><div className="space-y-2 text-sm mb-4"><p><strong>Starter:</strong> $499 + $79/mo (1 workflow)</p><p><strong>Business:</strong> $1,499 + $149/mo (3-5 workflows)</p></div><Link to="/services/automations"><Button className="w-full" variant="outline" size="sm">View Details</Button></Link></CardContent></Card>
                {/* Brand Identity */}
                <Card><CardHeader><CardTitle className="text-lg">Brand Identity</CardTitle></CardHeader><CardContent><div className="space-y-2 text-sm mb-4"><p><strong>Basic Brand Kit:</strong> $199</p><p><strong>Full Brand Identity:</strong> $499</p></div><Link to="/services/brand-identity"><Button className="w-full" variant="outline" size="sm">View Details</Button></Link></CardContent></Card>
                {/* Micro MVP */}
                <Card><CardHeader><CardTitle className="text-lg">Micro MVP</CardTitle></CardHeader><CardContent><div className="space-y-2 text-sm mb-4"><p><strong>Landing + waitlist + auth + deploy:</strong> $1,499–$2,999</p></div><Link to="/services/micro-mvp"><Button className="w-full" variant="outline" size="sm">View Details</Button></Link></CardContent></Card>
              </div>
            </div>
          </section>

          {/* Bundles */}
          <section className="py-16 bg-white/5">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4 text-foreground">SyncSphere Bundles</h2>
              <p className="text-center text-foreground/70 mb-12">Save more when you bundle services together</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card><CardHeader className="text-center"><CardTitle className="text-lg">Starter Pack</CardTitle><div className="text-2xl font-bold text-foreground">$799 <span className="text-sm font-normal">setup</span></div><p className="text-primary font-medium">$99/month</p></CardHeader><CardContent><ul className="space-y-1 text-xs">{["Starter website", "Basic Google Business", "Monthly report"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" />{f}</li>)}</ul></CardContent></Card>
                <Card><CardHeader className="text-center"><CardTitle className="text-lg">Business Pack</CardTitle><div className="text-2xl font-bold text-foreground">$1,499 <span className="text-sm font-normal">setup</span></div><p className="text-primary font-medium">$249/month</p></CardHeader><CardContent><ul className="space-y-1 text-xs">{["Business website", "Basic chatbot", "Social media (Basic)", "Google Business", "Monthly analytics"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" />{f}</li>)}</ul></CardContent></Card>
                <Card className="border-primary"><CardHeader className="text-center"><Badge className="mx-auto mb-2">Best Value</Badge><CardTitle className="text-lg">Growth Pack</CardTitle><div className="text-2xl font-bold text-foreground">$2,499 <span className="text-sm font-normal">setup</span></div><p className="text-primary font-medium">$499/month</p></CardHeader><CardContent><ul className="space-y-1 text-xs">{["Growth website", "Standard chatbot", "Social media (Standard)", "Email marketing", "Google Business", "Full analytics"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" />{f}</li>)}</ul></CardContent></Card>
                <Card><CardHeader className="text-center"><CardTitle className="text-lg">Complete Pack</CardTitle><div className="text-2xl font-bold text-foreground">$3,499 <span className="text-sm font-normal">setup</span></div><p className="text-primary font-medium">$699/month</p></CardHeader><CardContent><ul className="space-y-1 text-xs">{["Growth website", "Advanced chatbot", "Social media (Growth)", "Email marketing (Growth)", "Google Business (Growth)", "Full dashboard", "Business automation", "Brand identity"].map((f, i) => <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" />{f}</li>)}</ul></CardContent></Card>
              </div>
            </div>
          </section>

          {/* Payment Policy */}
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">Payment Policy</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">50%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Upfront</h4>
                  <p className="text-foreground/70 text-sm">50% payment before work begins to secure your project slot.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">50%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">On Delivery</h4>
                  <p className="text-foreground/70 text-sm">Remaining 50% after your review and approval of the final product.</p>
                </div>
              </div>
              <p className="text-foreground/50 text-sm mt-6">All payments via PayPal • Prices in USD • GBP/EUR available on request</p>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">Message us on WhatsApp for a free consultation and custom quote.</p>
              <a href="https://wa.me/447424819094?text=Hi! I'd like to discuss pricing and services for my business." target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                  <Phone className="h-5 w-5 mr-2" />WhatsApp Us Now<ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SEOProvider>
  );
};

export default Pricing;

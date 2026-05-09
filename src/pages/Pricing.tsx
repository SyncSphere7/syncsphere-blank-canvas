import React from 'react';
import { Link } from 'react-router-dom';
import SEOProvider from '@/components/SEOProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Phone, CreditCard, Shield, Lock } from 'lucide-react';

const Pricing = () => {
  return (
    <SEOProvider
      title="Pricing | Website Design & Digital Services | SyncSphere"
      description="Transparent pricing for websites, social media, email marketing, and maintenance. Websites from $2,500. 50% upfront, 50% on delivery. PayPal accepted."
      keywords="website pricing, web design cost, social media management pricing, email marketing pricing, small business website"
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
                No hidden fees. 50% upfront, 25% at design approval, 25% on delivery. PayPal protected.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80"><Shield className="h-4 w-4 mr-2" />USA Registered</Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80"><Lock className="h-4 w-4 mr-2" />SSL Secured</Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white/5 border-white/10 text-foreground/80"><CreditCard className="h-4 w-4 mr-2" />PayPal Protected</Badge>
              </div>
            </div>
          </section>

          {/* Website Design — Core Product */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Website Design & Development</h2>
              <p className="text-center text-foreground/70 mb-12">Domain (.com, 1 year) and SSL included on all packages</p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Starter */}
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Starter</CardTitle>
                    <div className="text-3xl font-bold text-foreground">$2,500</div>
                    <p className="text-sm text-foreground/60">48 hours delivery</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {["Up to 3 pages", "Responsive design", "Domain (.com) + SSL", "Basic SEO setup", "Contact form"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>
                      ))}
                    </ul>
                    <Link to="/services/web-development"><Button className="w-full" variant="outline" size="sm">Learn More</Button></Link>
                  </CardContent>
                </Card>

                {/* Professional — Most Popular */}
                <Card className="border-primary">
                  <CardHeader className="text-center">
                    <Badge className="mx-auto mb-2">Most Popular</Badge>
                    <CardTitle>Professional</CardTitle>
                    <div className="text-3xl font-bold text-foreground">$5,000</div>
                    <p className="text-sm text-foreground/60">5 days delivery</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {["Up to 7 pages", "Custom design", "Domain (.com) + SSL", "Advanced SEO", "Blog/CMS", "Analytics setup"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>
                      ))}
                    </ul>
                    <Link to="/services/web-development"><Button className="w-full bg-primary hover:bg-primary/90" size="sm">Learn More</Button></Link>
                  </CardContent>
                </Card>

                {/* Premium */}
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Premium</CardTitle>
                    <div className="text-3xl font-bold text-foreground">$8,000+</div>
                    <p className="text-sm text-foreground/60">Custom timeline</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {["7+ pages", "Premium custom design", "Domain (.com) + SSL", "Full SEO + schema", "Animations & interactions", "Integrations (CRM, booking, payments)"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>
                      ))}
                    </ul>
                    <Link to="/services/web-development"><Button className="w-full" variant="outline" size="sm">Learn More</Button></Link>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-foreground/50 text-sm">
                Extra revisions: $100/hour • Extra pages: $200 each • Maintenance: $149/month
              </p>
            </div>
          </section>

          {/* Monthly Retainers */}
          <section className="py-16 bg-white/5">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Monthly Retainers</h2>
              <p className="text-center text-foreground/70 mb-4">Predictable pricing. Cancel anytime. Scale up or down as you grow.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Maintenance */}
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Maintenance</CardTitle>
                    <div className="text-2xl font-bold text-foreground">$149<span className="text-sm font-normal">/mo</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {["Security updates", "Weekly backups", "Uptime monitoring", "1hr support/month", "Performance checks"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span>{f}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Social Media</CardTitle>
                    <div className="text-2xl font-bold text-foreground">$499<span className="text-sm font-normal">/mo</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {["4 posts per week", "2 platforms", "Content calendar", "Monthly report", "Community engagement"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span>{f}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Email Marketing */}
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Email Marketing</CardTitle>
                    <div className="text-2xl font-bold text-foreground">$349<span className="text-sm font-normal">/mo</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {["4 newsletters/month", "Automation sequences", "List management", "A/B testing", "Monthly analytics"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span>{f}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Full Marketing */}
                <Card className="border-primary">
                  <CardHeader className="text-center">
                    <Badge className="mx-auto mb-2">Best Value</Badge>
                    <CardTitle className="text-lg">Full Marketing</CardTitle>
                    <div className="text-2xl font-bold text-foreground">$899<span className="text-sm font-normal">/mo</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {["Social media (all)", "Email marketing", "Monthly strategy call", "Priority support", "Quarterly review"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span>{f}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Vertical-Specific Packages */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Industry-Specific Packages</h2>
              <p className="text-center text-foreground/70 mb-12">Pre-built for your industry — faster delivery, lower cost</p>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Medical */}
                <Card className="border-primary/50">
                  <CardHeader className="text-center">
                    <Badge className="mx-auto mb-2 bg-red-500/10 text-red-400 border-red-500/20">Medical & Dental</Badge>
                    <CardTitle>Medical Practice</CardTitle>
                    <div className="text-3xl font-bold text-foreground">$3,500</div>
                    <p className="text-sm text-foreground/60">7 days delivery</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {["Patient-facing design", "Online appointment booking", "Service pages (procedures, conditions)", "HIPAA-compliant forms", "Google Maps integration", "Review display widget"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>
                      ))}
                    </ul>
                    <p className="text-xs text-foreground/50 mb-4">Perfect for: dentists, doctors, chiropractors, clinics</p>
                    <Link to="/services/web-development"><Button className="w-full bg-primary hover:bg-primary/90" size="sm">Get Started</Button></Link>
                  </CardContent>
                </Card>

                {/* Legal */}
                <Card className="border-primary/50">
                  <CardHeader className="text-center">
                    <Badge className="mx-auto mb-2 bg-blue-500/10 text-blue-400 border-blue-500/20">Legal</Badge>
                    <CardTitle>Law Firm</CardTitle>
                    <div className="text-3xl font-bold text-foreground">$4,500</div>
                    <p className="text-sm text-foreground/60">7 days delivery</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {["Professional, trust-building design", "Attorney profiles & bios", "Practice area pages", "Case results / testimonials", "Secure client intake forms", "Legal blog setup"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>
                      ))}
                    </ul>
                    <p className="text-xs text-foreground/50 mb-4">Perfect for: law firms, solo attorneys, legal consultancies</p>
                    <Link to="/services/web-development"><Button className="w-full bg-primary hover:bg-primary/90" size="sm">Get Started</Button></Link>
                  </CardContent>
                </Card>

                {/* E-Commerce */}
                <Card className="border-primary/50">
                  <CardHeader className="text-center">
                    <Badge className="mx-auto mb-2 bg-green-500/10 text-green-400 border-green-500/20">E-Commerce</Badge>
                    <CardTitle>Online Store</CardTitle>
                    <div className="text-3xl font-bold text-foreground">$5,500</div>
                    <p className="text-sm text-foreground/60">10 days delivery</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {["Up to 100 products", "Stripe & PayPal payments", "Inventory management", "Order notifications", "Abandoned cart recovery", "Mobile-optimized checkout"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span className="text-sm">{f}</span></li>
                      ))}
                    </ul>
                    <p className="text-xs text-foreground/50 mb-4">Perfect for: retailers, DTC brands, service businesses selling online</p>
                    <Link to="/services/web-development"><Button className="w-full bg-primary hover:bg-primary/90" size="sm">Get Started</Button></Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Add-ons */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Add-On Services</h2>
              <p className="text-center text-foreground/70 mb-12">One-time services to enhance your digital presence</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Brand Identity Kit</CardTitle>
                    <div className="text-2xl font-bold text-foreground">$499</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {["Logo design", "Color palette", "Typography selection", "Brand guidelines PDF"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span>{f}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Extra Pages</CardTitle>
                    <div className="text-2xl font-bold text-foreground">$200<span className="text-sm font-normal">/page</span></div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">Add pages to any website package. Same design, responsive, SEO-optimized.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">E-Commerce Setup</CardTitle>
                    <div className="text-2xl font-bold text-foreground">$2,500</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {["Up to 50 products", "Payment integration (Stripe/PayPal)", "Order management", "Mobile-optimized checkout"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span>{f}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Business Automation</CardTitle>
                    <div className="text-2xl font-bold text-foreground">$1,500</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {["Up to 3 workflows", "Form-to-email automation", "CRM integration", "Trigger-based actions"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="h-3 w-3 text-green-500" /><span>{f}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Payment Policy */}
          <section className="py-16 bg-white/5">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">Payment Policy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-sm">50%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Upfront</h4>
                  <p className="text-foreground/70 text-sm">50% payment before work begins to secure your project slot.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-sm">25%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Design Approval</h4>
                  <p className="text-foreground/70 text-sm">25% due when you approve the design mockup.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-sm">25%</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">On Launch</h4>
                  <p className="text-foreground/70 text-sm">Remaining 25% before your site goes live.</p>
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

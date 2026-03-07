import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import SEOProvider from '@/components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Calendar, Clock, CreditCard } from 'lucide-react';

const AppointmentBooking = () => {
  return (
    <SEOProvider title="Appointment Booking Systems | SyncSphere" description="Automated scheduling systems with calendar sync, reminders, and payment integration. Packages from $199.">
      <ServiceLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary"><Calendar className="w-4 h-4 mr-2" />Appointment Booking</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent">Appointment Booking Systems</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Let your clients book appointments anytime, anywhere. Automated reminders, calendar sync, and payment integration — all set up by our team.</p>
            <a href="https://wa.me/447424819094?text=Hi! I'm interested in an appointment booking system." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started — From $199<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader><CardTitle>Starter</CardTitle><div className="text-3xl font-bold">$199</div><p className="text-sm text-muted-foreground">+ $39/month</p></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Basic booking page", "Calendar integration", "Email confirmations", "Up to 50 bookings/month"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Starter Appointment Booking package ($199)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader><Badge className="w-fit mb-2">Most Popular</Badge><CardTitle>Business</CardTitle><div className="text-3xl font-bold">$499</div><p className="text-sm text-muted-foreground">+ $79/month</p></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Custom booking page", "Multi-staff calendars", "SMS & email reminders", "Payment integration", "Unlimited bookings"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Business Appointment Booking package ($499)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                  <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Advanced</CardTitle><div className="text-3xl font-bold">$899</div><p className="text-sm text-muted-foreground">+ $129/month</p></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Full custom design", "Multi-location support", "CRM integration", "Automated follow-ups", "Analytics dashboard", "Priority support"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span className="text-sm">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/447424819094?text=Hi! I'd like the Advanced Appointment Booking package ($899)." target="_blank" rel="noopener noreferrer" className="mt-4 block">
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

export default AppointmentBooking;

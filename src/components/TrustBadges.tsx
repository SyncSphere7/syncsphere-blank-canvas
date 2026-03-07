import React from 'react';
import { Shield, Lock, CreditCard } from 'lucide-react';

const TrustBadges = () => {
  return (
    <section className="bg-background py-8 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-foreground/70">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">USA Registered Business</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <Lock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <CreditCard className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">PayPal Protected Payments</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <span className="text-sm font-medium">50% Upfront, 50% on Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

import React from 'react';
import { Shield, Lock, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const badges = [
  { icon: Shield, label: 'USA Registered Business' },
  { icon: Lock, label: 'SSL Secured' },
  { icon: CreditCard, label: 'PayPal Protected Payments' },
  { icon: null, label: '50% Upfront, 50% on Delivery' },
];

const TrustBadges = () => {
  return (
    <section className="bg-background py-8 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {badge.icon && <badge.icon className="h-5 w-5 text-primary" />}
              <span className="text-sm font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

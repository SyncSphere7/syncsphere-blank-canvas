import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '48hr', label: 'Fastest Delivery' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Countries Served' },
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClientLogos;

import React from 'react';
import ScrollReveal from './ScrollReveal';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-30 blur-3xl -z-10" />
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-card/50 rounded-full text-muted-foreground text-sm mb-6 inline-block border border-border backdrop-blur-sm">
              Our Work
            </span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Client Results</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              We're growing our portfolio. Check back soon for case studies and client results.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;

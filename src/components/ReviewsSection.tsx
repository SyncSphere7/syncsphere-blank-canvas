import React from 'react';
import ScrollReveal from './ScrollReveal';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-30 blur-3xl -z-10" />
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-card/50 rounded-full text-muted-foreground text-sm mb-6 inline-block border border-border backdrop-blur-sm">
              Client Reviews
            </span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">What Our Clients Are Saying</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              We're collecting reviews from our clients. Check back soon.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReviewsSection;

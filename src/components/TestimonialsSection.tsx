import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { name: "Jennifer Martinez", company: "Global Tech Solutions", text: "SyncSphere transformed our customer service with their AI chatbot platform. Response times decreased by 80% and our team now focuses on complex issues while the AI handles routine inquiries seamlessly.", rating: 5 },
  { name: "Michael Chen", company: "International Retail Group", text: "The voice agent solution from SyncSphere has revolutionized our call center operations. The AI handles over 70% of our customer inquiries without human intervention, improving efficiency dramatically.", rating: 5 },
  { name: "Sarah Johnson", company: "FinTech Innovations Inc", text: "We've been using SyncSphere's automation solutions for our back-office operations and have seen remarkable improvements in efficiency, accuracy, and overall productivity across our global teams.", rating: 5 },
];

interface TestimonialsSectionProps {
  testimonial?: { text: string; author: string; company: string; metric: string };
  industry?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonial, industry }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-30 blur-3xl -z-10" />
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-card/50 rounded-full text-muted-foreground text-sm mb-6 inline-block border border-border backdrop-blur-sm">
              Client Success Stories
            </span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Learn how our solutions have transformed businesses worldwide.
            </p>
          </div>
        </ScrollReveal>

        {testimonial && (
          <ScrollReveal className="mb-16">
            <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {industry ? industry.charAt(0).toUpperCase() + industry.slice(1) : 'Industry'} Success Story
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    <TrendingUp className="h-3 w-3 mr-1" />{testimonial.metric}
                  </Badge>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <blockquote className="text-lg md:text-xl text-foreground/90 mb-6 italic">"{testimonial.text}"</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        )}

        {/* Testimonial Carousel */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-card/50 border border-border/50 backdrop-blur-sm">
                  <CardContent className="p-8 md:p-12 text-center">
                    <div className="flex gap-1 justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className={i < testimonials[current].rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"} />
                      ))}
                    </div>
                    <p className="text-foreground/90 text-lg md:text-xl mb-8 italic leading-relaxed">"{testimonials[current].text}"</p>
                    <div>
                      <p className="font-semibold text-foreground text-lg">{testimonials[current].name}</p>
                      <p className="text-muted-foreground">{testimonials[current].company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="ghost" size="sm" onClick={() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)} className="p-2">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`} />
                ))}
              </div>
              <Button variant="ghost" size="sm" onClick={() => setCurrent(c => (c + 1) % testimonials.length)} className="p-2">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;

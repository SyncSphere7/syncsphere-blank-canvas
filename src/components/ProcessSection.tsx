import React from 'react';
import { Check, MessageSquare, PenLine, PlayCircle, Settings, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  { icon: <MessageSquare className="w-10 h-10 text-primary" />, title: "Initial Consultation", description: "We begin with a thorough discussion of your business needs, challenges, and goals to understand how we can create value for you." },
  { icon: <PenLine className="w-10 h-10 text-primary" />, title: "Solution Design", description: "Our team designs a customized solution blueprint that addresses your specific requirements and integrates with your existing systems." },
  { icon: <Settings className="w-10 h-10 text-primary" />, title: "Development & Configuration", description: "We develop and configure your solution, adapting it to your business processes, branding, and communication style." },
  { icon: <PlayCircle className="w-10 h-10 text-primary" />, title: "Implementation & Testing", description: "The solution is implemented in your environment and thoroughly tested to ensure performance, reliability, and security." },
  { icon: <Users className="w-10 h-10 text-primary" />, title: "Training & Onboarding", description: "We provide comprehensive training for your team to ensure they can effectively manage and utilize the new tools." },
  { icon: <Check className="w-10 h-10 text-primary" />, title: "Ongoing Support & Optimization", description: "Our relationship continues with dedicated support and regular optimization to ensure your solution evolves with your business." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-30 blur-3xl -z-10" />
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-card/50 rounded-full text-muted-foreground text-sm mb-6 inline-block border border-border backdrop-blur-sm">
              How We Work
            </span>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A structured approach to implementing solutions that deliver real business value.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 relative">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0 items-center`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <h3 className="text-foreground text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  <motion.div
                    className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 bg-background p-2 rounded-full border-4 border-border"
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <div className="md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

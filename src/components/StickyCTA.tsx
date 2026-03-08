import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-3 md:p-4"
        >
          <div className="container mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-foreground">
                🚀 Limited slots this month — <span className="text-primary">3 spots left</span> for March delivery
              </p>
            </div>
            <p className="sm:hidden text-xs font-medium text-foreground">
              🚀 <span className="text-primary">3 spots left</span> for March
            </p>
            <div className="flex items-center gap-2">
              <a href="https://wa.me/447424819094?text=Hi! I'd like to get started with a project." target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm whitespace-nowrap">
                  Claim Your Spot <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </a>
              <Button variant="ghost" size="sm" className="p-1 h-auto" onClick={() => setDismissed(true)}>
                <X className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;

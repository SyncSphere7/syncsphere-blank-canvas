import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  delay: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <Card className="bg-card/50 border border-border/50 backdrop-blur-sm h-full hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group cursor-pointer hover:translate-y-[-4px] hover:shadow-lg hover:shadow-primary/10">
      <CardHeader>
        <CardTitle className="text-foreground text-xl md:text-2xl group-hover:text-primary transition-colors flex items-center justify-between">
          {title}
          <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

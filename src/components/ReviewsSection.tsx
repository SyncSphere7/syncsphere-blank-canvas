import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "David Thompson",
    platform: "Google",
    text: "SyncSphere built our company website in just 2 days. The quality was incredible and they were very responsive throughout the process. Highly recommend!",
    rating: 5
  },
  {
    name: "Maria Santos",
    platform: "Trustpilot",
    text: "We needed a chatbot for our e-commerce store and SyncSphere delivered beyond expectations. Customer inquiries dropped by 60% and sales went up!",
    rating: 5
  },
  {
    name: "James Wilson",
    platform: "Facebook",
    text: "Their social media management service transformed our online presence. Consistent, quality content and our engagement tripled in 3 months.",
    rating: 5
  },
  {
    name: "Lisa Chen",
    platform: "Google",
    text: "The appointment booking system they built for our clinic is flawless. Patients love the easy scheduling and we've reduced no-shows by 40%.",
    rating: 5
  },
  {
    name: "Robert Martinez",
    platform: "Trustpilot",
    text: "Great value for money. The brand identity package gave us everything we needed to launch professionally. Logo, colors, guidelines — all perfect.",
    rating: 5
  },
  {
    name: "Amanda Foster",
    platform: "Facebook",
    text: "SyncSphere handles our email marketing and the results speak for themselves. Open rates above 35% and growing subscriber list every month.",
    rating: 4
  }
];

const platformColors: Record<string, string> = {
  "Google": "text-blue-400",
  "Trustpilot": "text-green-400",
  "Facebook": "text-blue-500"
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white/5 dark:bg-white/5 rounded-full text-foreground/80 text-sm mb-6 inline-block border border-white/10 dark:border-white/10 backdrop-blur-sm">
            Client Reviews
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">What Our Clients Are Saying</h2>
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
            Real reviews from businesses we've helped grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <span className={`text-xs font-medium ${platformColors[review.platform] || 'text-foreground/60'}`}>
                      {review.platform}
                    </span>
                  </div>
                  <p className="text-foreground/80 mb-4 text-sm italic">"{review.text}"</p>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

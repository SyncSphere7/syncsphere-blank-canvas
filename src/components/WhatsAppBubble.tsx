import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppBubble = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="tel:+143****0996"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Call us"
        title="Call us"
      >
        <Phone className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppBubble;

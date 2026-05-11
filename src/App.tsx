import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import WhatsAppBubble from "./components/WhatsAppBubble";
import SEOProvider from "./components/SEOProvider";
import CookieConsent from "./components/CookieConsent";
import ErrorBoundary from "./components/ErrorBoundary";

// Service Pages
import WebDevelopment from "./pages/services/WebDevelopment";
import Automations from "./pages/services/Automations";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import EmailMarketing from "./pages/services/EmailMarketing";
import BrandIdentity from "./pages/services/BrandIdentity";

// Regional Service Pages
import AutomationsUK from "./pages/services/AutomationsUK";
import AutomationsUS from "./pages/services/AutomationsUS";
import AutomationsEU from "./pages/services/AutomationsEU";
import WebDevelopmentUK from "./pages/services/WebDevelopmentUK";

// Content Pages
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Policy Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Pricing
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <SEOProvider />
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Service Routes */}
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/automations" element={<Automations />} />
                <Route path="/services/social-media" element={<SocialMediaManagement />} />
                <Route path="/services/email-marketing" element={<EmailMarketing />} />
                <Route path="/services/brand-identity" element={<BrandIdentity />} />
                
                {/* Regional Service Routes */}
                <Route path="/automations/uk" element={<AutomationsUK />} />
                <Route path="/automations/us" element={<AutomationsUS />} />
                <Route path="/automations/eu" element={<AutomationsEU />} />
                <Route path="/web-development/uk" element={<WebDevelopmentUK />} />
                
                {/* Content Routes */}
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                
                {/* Pricing */}
                <Route path="/pricing" element={<Pricing />} />
                
                {/* Policy Routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
              <WhatsAppBubble />
              <CookieConsent />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;

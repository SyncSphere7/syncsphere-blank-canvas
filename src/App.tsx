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
import AskAIButton from "./components/AskAIButton";
import OpenRouterChat from "./components/OpenRouterChat";
import ErrorBoundary from "./components/ErrorBoundary";

// Service Pages
import WebDevelopment from "./pages/services/WebDevelopment";
import Chatbots from "./pages/services/Chatbots";
import Automations from "./pages/services/Automations";
import AppointmentBooking from "./pages/services/AppointmentBooking";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import EmailMarketing from "./pages/services/EmailMarketing";
import GoogleBusiness from "./pages/services/GoogleBusiness";
import AnalyticsReporting from "./pages/services/AnalyticsReporting";
import BrandIdentity from "./pages/services/BrandIdentity";

// Regional Service Pages
import AutomationsUK from "./pages/services/AutomationsUK";
import AutomationsUS from "./pages/services/AutomationsUS";
import AutomationsEU from "./pages/services/AutomationsEU";
import ChatbotsUK from "./pages/services/ChatbotsUK";
import ChatbotsUS from "./pages/services/ChatbotsUS";
import ChatbotsEU from "./pages/services/ChatbotsEU";
import WebDevelopmentUK from "./pages/services/WebDevelopmentUK";

// Content Pages
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

// Policy Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Pricing & MVP
import Pricing from "./pages/Pricing";
import StartupMVP from "./pages/StartupMVP";

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
              <AskAIButton />
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Service Routes */}
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/chatbots" element={<Chatbots />} />
                <Route path="/services/automations" element={<Automations />} />
                <Route path="/services/appointment-booking" element={<AppointmentBooking />} />
                <Route path="/services/social-media" element={<SocialMediaManagement />} />
                <Route path="/services/email-marketing" element={<EmailMarketing />} />
                <Route path="/services/google-business" element={<GoogleBusiness />} />
                <Route path="/services/analytics" element={<AnalyticsReporting />} />
                <Route path="/services/brand-identity" element={<BrandIdentity />} />
                
                {/* Regional Service Routes */}
                <Route path="/automations/uk" element={<AutomationsUK />} />
                <Route path="/automations/us" element={<AutomationsUS />} />
                <Route path="/automations/eu" element={<AutomationsEU />} />
                <Route path="/chatbots/uk" element={<ChatbotsUK />} />
                <Route path="/chatbots/us" element={<ChatbotsUS />} />
                <Route path="/chatbots/eu" element={<ChatbotsEU />} />
                <Route path="/web-development/uk" element={<WebDevelopmentUK />} />
                
                {/* Content Routes */}
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                
                {/* Pricing & MVP */}
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services/micro-mvp" element={<StartupMVP />} />
                
                {/* Policy Routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                
                {/* Chat Agent Route */}
                <Route path="/chat-agent" element={<ErrorBoundary><OpenRouterChat /></ErrorBoundary>} />
                
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

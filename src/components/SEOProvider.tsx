import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useSearchParams } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  keywords?: string;
  region?: 'uk' | 'us' | 'eu' | 'global';
  service?: string;
  children?: React.ReactNode;
}

const SEOProvider: React.FC<SEOProps> = ({
  title = "SyncSphere Digital Agency",
  description = "Full-service digital agency offering custom websites, AI chatbots, social media management, email marketing, business automation, and brand identity. Fast delivery, affordable pricing.",
  canonicalUrl = "https://syncsphereofficial.com",
  ogImageUrl = "https://syncsphereofficial.com/syncsphere-logo.png",
  keywords = "website design, web development, AI chatbots, social media management, email marketing, business automation, brand identity, digital agency",
  region = 'global',
  service,
  children
}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isEmbedded = searchParams.get('embedded') === 'true';

  const regionalKeywords: Record<string, string> = {
    uk: "web design uk, chatbots uk, social media management uk, business automation uk, digital agency uk, email marketing uk",
    us: "web design us, chatbots us, social media management us, business automation us, digital agency us, email marketing us",
    eu: "web design eu, chatbots eu, social media management eu, business automation eu, digital agency eu, email marketing eu",
    global: "website design, web development, AI chatbots, social media management, email marketing, business automation, brand identity, digital agency"
  };

  const serviceDescriptions: Record<string, Record<string, string>> = {
    chatbots: {
      uk: "AI chatbot solutions for UK businesses. Smart customer engagement across platforms, handled by our team. From £329.",
      us: "AI chatbot solutions for US businesses. Smart customer engagement across platforms, handled by our team. From $399.",
      eu: "AI chatbot solutions for European businesses. Multilingual customer engagement across platforms with GDPR compliance. From €369.",
      global: "AI chatbot solutions for businesses worldwide. Smart customer engagement across multiple platforms, handled by our team."
    },
    automations: {
      uk: "Business automation services for UK enterprises. Intelligent workflow solutions to streamline operations. From £399.",
      us: "Business automation services for US enterprises. Intelligent workflow solutions to streamline operations. From $499.",
      eu: "Business automation services for European enterprises. GDPR-compliant workflow solutions. From €459.",
      global: "Business automation services. Intelligent workflow solutions to streamline your operations worldwide."
    },
    'web-development': {
      uk: "Custom website design & development for UK businesses. Starter sites from £399 delivered in 48 hours.",
      us: "Custom website design & development for US businesses. Starter sites from $499 delivered in 48 hours.",
      eu: "Custom website design & development for European businesses. Starter sites from €459 delivered in 48 hours.",
      global: "Custom website design & development. Starter sites from $499 delivered in 48 hours. Business and Growth packages available."
    }
  };

  let dynamicTitle = title;
  let dynamicDescription = description;
  let dynamicKeywords = keywords;

  const pathParts = location.pathname.split('/');
  const detectedService = pathParts.find(part =>
    ['chatbots', 'automations', 'web-development', 'appointment-booking', 'social-media', 'email-marketing', 'google-business', 'analytics', 'brand-identity', 'micro-mvp'].includes(part)
  );
  const detectedRegion = pathParts.find(part => ['uk', 'us', 'eu'].includes(part)) as 'uk' | 'us' | 'eu' | undefined;

  const currentRegion = region !== 'global' ? region : detectedRegion || 'global';
  const currentService = service || detectedService;

  if (currentService && serviceDescriptions[currentService]) {
    const serviceData = serviceDescriptions[currentService];
    dynamicDescription = serviceData[currentRegion] || serviceData.global;
    const regionSuffix = currentRegion !== 'global' ? ` ${currentRegion.toUpperCase()}` : '';
    dynamicTitle = `${currentService.charAt(0).toUpperCase() + currentService.slice(1).replace(/-/g, ' ')}${regionSuffix} | SyncSphere Digital Agency`;
  }

  dynamicKeywords = regionalKeywords[currentRegion];

  if (location.pathname === '/chat-agent') {
    dynamicTitle = "AI Assistant | SyncSphere Digital Agency";
    dynamicDescription = "Chat with our AI assistant to learn about SyncSphere's digital services.";
  }

  if (location.pathname === '/pricing') {
    dynamicTitle = "Pricing | SyncSphere Digital Agency — Transparent & Affordable";
    dynamicDescription = "Websites from $499, chatbots from $399, social media from $199/mo. 50% upfront, 50% on delivery. PayPal accepted. View all service packages and bundles.";
  }

  if (isEmbedded) {
    return <>{children}</>;
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncSphere Digital Agency",
    "url": "https://syncsphereofficial.com",
    "logo": "https://syncsphereofficial.com/syncsphere-logo.png",
    "description": "Full-service digital agency offering website design, AI chatbots, social media management, email marketing, business automation, and brand identity services.",
    "sameAs": [
      "https://twitter.com/SyncSphere",
      "https://www.linkedin.com/company/syncsphere",
      "https://www.facebook.com/syncsphereofficial"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-815-472-7760",
      "contactType": "sales",
      "availableLanguage": ["English"],
      "areaServed": ["US", "GB", "EU"]
    }],
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Place", "name": "European Union" }
    ]
  };

  const serviceSchema = currentService ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${currentService.charAt(0).toUpperCase() + currentService.slice(1).replace(/-/g, ' ')} Services`,
    "provider": { "@type": "Organization", "name": "SyncSphere Digital Agency" },
    "areaServed": currentRegion !== 'global' ? [currentRegion.toUpperCase()] : ["US", "GB", "EU"],
    "description": dynamicDescription
  } : null;

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
        <meta name="keywords" content={dynamicKeywords} />
        <link rel="canonical" href={`${canonicalUrl}${location.pathname}`} />

        {currentService && (
          <>
            <link rel="alternate" hrefLang="en-gb" href={`${canonicalUrl}/${currentService}/uk`} />
            <link rel="alternate" hrefLang="en-us" href={`${canonicalUrl}/${currentService}/us`} />
            <link rel="alternate" hrefLang="en" href={`${canonicalUrl}/${currentService}/eu`} />
            <link rel="alternate" hrefLang="x-default" href={`${canonicalUrl}/services/${currentService}`} />
          </>
        )}

        <meta property="og:title" content={dynamicTitle} />
        <meta property="og:description" content={dynamicDescription} />
        <meta property="og:url" content={`${canonicalUrl}${location.pathname}`} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SyncSphere Digital Agency" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dynamicTitle} />
        <meta name="twitter:description" content={dynamicDescription} />
        <meta name="twitter:image" content={ogImageUrl} />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="SyncSphere Digital Agency" />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        {serviceSchema && (
          <script type="application/ld+json">
            {JSON.stringify(serviceSchema)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};

export default SEOProvider;

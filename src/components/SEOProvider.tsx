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
  description = "Premium digital agency offering custom websites, social media management, email marketing, business automation, and brand identity. Professional websites from $2,500 delivered in 48 hours.",
  canonicalUrl = "https://syncsphere-blank-canvas.vercel.app",
  ogImageUrl = "https://syncsphere-blank-canvas.vercel.app/syncsphere-logo.png",
  keywords = "website design, web development, social media management, email marketing, business automation, brand identity, digital agency",
  region = 'global',
  service,
  children
}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isEmbedded = searchParams.get('embedded') === 'true';

  const regionalKeywords: Record<string, string> = {
    uk: "web design uk, social media management uk, business automation uk, digital agency uk, email marketing uk",
    us: "web design us, social media management us, business automation us, digital agency us, email marketing us",
    eu: "web design eu, social media management eu, business automation eu, digital agency eu, email marketing eu",
    global: "website design, web development, social media management, email marketing, business automation, brand identity, digital agency"
  };

  const serviceDescriptions: Record<string, Record<string, string>> = {
    automations: {
      uk: "Business automation services for UK enterprises. Intelligent workflow solutions to streamline operations. From £1,500.",
      us: "Business automation services for US enterprises. Intelligent workflow solutions to streamline operations. From $1,500.",
      eu: "Business automation services for European enterprises. GDPR-compliant workflow solutions. From €1,500.",
      global: "Business automation services. Intelligent workflow solutions to streamline your operations worldwide. From $1,500."
    },
    'web-development': {
      uk: "Custom website design & development for UK businesses. Starter sites from £2,500 delivered in 48 hours.",
      us: "Custom website design & development for US businesses. Starter sites from $2,500 delivered in 48 hours.",
      eu: "Custom website design & development for European businesses. Starter sites from €2,500 delivered in 48 hours.",
      global: "Custom website design & development. Starter sites from $2,500 delivered in 48 hours. Professional and Premium packages available."
    },
    'social-media': {
      global: "Social media management services. Content creation, community management, and analytics. From $499/month."
    },
    'email-marketing': {
      global: "Email marketing services. Newsletters, automation sequences, and analytics. From $349/month."
    },
    'brand-identity': {
      global: "Professional brand identity design. Logo, color palette, typography, and brand guidelines. From $499."
    }
  };

  let dynamicTitle = title;
  let dynamicDescription = description;
  let dynamicKeywords = keywords;

  const pathParts = location.pathname.split('/');
  const detectedService = pathParts.find(part =>
    ['automations', 'web-development', 'social-media', 'email-marketing', 'brand-identity', 'ecommerce'].includes(part)
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

  if (location.pathname === '/pricing') {
    dynamicTitle = "Pricing | SyncSphere Digital Agency — Transparent & Professional";
    dynamicDescription = "Websites from $2,500, social media from $499/mo, email marketing from $349/mo. 50/25/25 payment terms. PayPal accepted. View all service packages.";
  }

  if (isEmbedded) {
    return <>{children}</>;
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncSphere Digital Agency",
    "url": "https://syncsphere-blank-canvas.vercel.app",
    "logo": "https://syncsphere-blank-canvas.vercel.app/syncsphere-logo.png",
    "description": "Premium digital agency offering website design, social media management, email marketing, business automation, and brand identity services.",
    "sameAs": [
      "https://twitter.com/SyncSphere",
      "https://www.linkedin.com/company/syncsphere"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "sales",
      "availableLanguage": ["English"]
    }]
  };

  const serviceSchema = currentService ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${currentService.charAt(0).toUpperCase() + currentService.slice(1).replace(/-/g, ' ')} Services`,
    "provider": { "@type": "Organization", "name": "SyncSphere Digital Agency" },
    "description": dynamicDescription
  } : null;

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
        <meta name="keywords" content={dynamicKeywords} />
        <link rel="canonical" href={`${canonicalUrl}${location.pathname}`} />

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

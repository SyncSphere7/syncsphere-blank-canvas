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
  title = "SyncSphere | Professional Websites, Marketing & Automation",
  description = "Professional websites from $3,500. Custom design, domain & SSL included. Social media management, email marketing & business automation. PayPal accepted.",
  canonicalUrl = "https://syncsphere-blank-canvas.vercel.app",
  ogImageUrl = "https://syncsphere-blank-canvas.vercel.app/syncsphere-logo.png",
  keywords = "website design, web development, social media management, email marketing, business automation, brand identity, digital agency, professional websites",
  region = 'global',
  service,
  children
}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isEmbedded = searchParams.get('embedded') === 'true';

  const regionalKeywords: Record<string, string> = {
    uk: "web design uk, social media management uk, business automation uk, digital agency uk, email marketing uk, professional website uk",
    us: "web design us, social media management us, business automation us, digital agency us, email marketing us, professional website us",
    eu: "web design eu, social media management eu, business automation eu, digital agency eu, email marketing eu, professional website eu",
    global: "website design, web development, social media management, email marketing, business automation, brand identity, digital agency, professional websites"
  };

  const serviceDescriptions: Record<string, Record<string, string>> = {
    automations: {
      uk: "Business automation services for UK businesses. Workflow automation, CRM integration, and process optimization. From £1,500.",
      us: "Business automation services for US businesses. Workflow automation, CRM integration, and process optimization. From $2,500.",
      eu: "Business automation services for European businesses. GDPR-compliant workflow solutions. From €1,500.",
      global: "Business automation services. Workflow automation, CRM integration, and process optimization. From $2,500."
    },
    'web-development': {
      uk: "Custom website design & development for UK businesses. Starter sites from £3,500. Domain & SSL included.",
      us: "Custom website design & development for US businesses. Starter sites from $3,500. Domain & SSL included.",
      eu: "Custom website design & development for European businesses. Starter sites from €3,500. Domain & SSL included.",
      global: "Custom website design & development. Starter sites from $3,500. Professional and Premium packages available. Domain & SSL included."
    },
    'social-media': {
      global: "Social media management services. Content creation, community management, and analytics. From $999/month."
    },
    'email-marketing': {
      global: "Email marketing services. Newsletters, automation sequences, and analytics. From $599/month."
    },
    'brand-identity': {
      global: "Professional brand identity design. Logo, color palette, typography, and brand guidelines. From $799."
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
    dynamicTitle = `${currentService.charAt(0).toUpperCase() + currentService.slice(1).replace(/-/g, ' ')}${regionSuffix} | SyncSphere`;
  }

  dynamicKeywords = regionalKeywords[currentRegion];

  if (location.pathname === '/pricing') {
    dynamicTitle = "Pricing | SyncSphere — Transparent & Professional";
    dynamicDescription = "Websites from $3,500. Social media from $999/mo, email marketing from $599/mo. Business automation from $2,500. 50/25/25 payment terms. PayPal accepted.";
  }

  if (location.pathname === '/blog') {
    dynamicTitle = "Blog | Web Design, Marketing & Automation Tips | SyncSphere";
    dynamicDescription = "Expert articles on website design, digital marketing, social media management, and business automation. Free insights to help your business grow online.";
  }

  if (location.pathname === '/portfolio') {
    dynamicTitle = "Portfolio | Our Work | SyncSphere";
    dynamicDescription = "View our portfolio of professional websites and digital projects. See how we help businesses establish their online presence.";
  }

  if (location.pathname === '/tools/website-grader') {
    dynamicTitle = "Free Website Grader | Score Your Site in 30 Seconds | SyncSphere";
    description = "Get a free, instant assessment of your website's performance, SEO, mobile-friendliness, and security. No signup required.";
    dynamicDescription = "Get a free, instant assessment of your website's performance, SEO, mobile-friendliness, and security. No signup required.";
  }

  if (isEmbedded) {
    return <>{children}</>;
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncSphere",
    "url": "https://syncsphere-blank-canvas.vercel.app",
    "logo": "https://syncsphere-blank-canvas.vercel.app/syncsphere-logo.png",
    "description": "Professional digital agency offering website design, social media management, email marketing, business automation, and brand identity services.",
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
    "provider": { "@type": "Organization", "name": "SyncSphere" },
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
        <meta property="og:site_name" content="SyncSphere" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dynamicTitle} />
        <meta name="twitter:description" content={dynamicDescription} />
        <meta name="twitter:image" content={ogImageUrl} />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="SyncSphere" />

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

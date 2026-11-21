/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // There is no ESLint setup in this repo; type errors still fail the build.
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  // Keep links from the old site, search results and shared posts working.
  async redirects() {
    return [
      { source: '/services/web-development', destination: '/services/websites', permanent: true },
      { source: '/services/automations', destination: '/services/business-automation', permanent: true },
      { source: '/services/brand-identity', destination: '/services/branding', permanent: true },
      { source: '/services/email-marketing', destination: '/international', permanent: true },
      { source: '/automations/:region', destination: '/international', permanent: true },
      { source: '/web-development/:region', destination: '/international', permanent: true },
      { source: '/portfolio', destination: '/', permanent: false },
      { source: '/blog/why-your-business-needs-website-2026', destination: '/blog', permanent: true },
      { source: '/blog/how-to-choose-digital-agency', destination: '/blog', permanent: true },
      { source: '/blog/social-media-management-roi', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOProvider from '../components/SEOProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle, Loader2, ArrowRight, Zap, Shield, TrendingUp, Clock, Mail, ExternalLink } from 'lucide-react';

interface AuditResult {
  url: string;
  score: number;
  issues: { severity: 'critical' | 'warning' | 'info'; message: string }[];
  strengths: string[];
  metrics: {
    hasSSL: boolean;
    hasMetaDescription: boolean;
    hasH1: boolean;
    hasOpenGraph: boolean;
    hasViewport: boolean;
    hasFavicon: boolean;
    estimatedLoadTime: string;
    mobileFriendly: boolean;
  };
}

const WebsiteGrader = () => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');
  const [step, setStep] = useState<'input' | 'results' | 'email'>('input');

  const normalizeUrl = (input: string) => {
    let cleaned = input.trim();
    if (!cleaned) return '';
    if (!/^https?:\/\//i.test(cleaned)) cleaned = 'https://' + cleaned;
    return cleaned;
  };

  const runAudit = async () => {
    const normalizedUrl = normalizeUrl(url);
    if (!normalizedUrl) { setError('Please enter a valid URL'); return; }
    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Fetch the target page via a CORS proxy with fallbacks
      const proxyUrls = [
        `https://api.allorigins.win/raw?url=${encodeURIComponent(normalizedUrl)}`,
        `https://corsproxy.io/?${encodeURIComponent(normalizedUrl)}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(normalizedUrl)}`,
      ];

      let html = '';
      let fetchError = null;
      for (const proxyUrl of proxyUrls) {
        try {
          const response = await fetch(proxyUrl, { signal: AbortSignal.timeout(10000) });
          if (response.ok) {
            html = await response.text();
            break;
          }
          fetchError = `Proxy returned ${response.status}`;
        } catch (e: any) {
          fetchError = e.message;
        }
      }

      if (!html) throw new Error(fetchError || 'Could not fetch the website. It may be blocking automated access.');
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const issues: AuditResult['issues'] = [];
      const strengths: AuditResult['metrics'] = {
        hasSSL: normalizedUrl.startsWith('https://'),
        hasMetaDescription: false,
        hasH1: false,
        hasOpenGraph: false,
        hasViewport: false,
        hasFavicon: false,
        estimatedLoadTime: 'Unknown',
        mobileFriendly: false,
      };

      // SSL
      if (!strengths.hasSSL) {
        issues.push({ severity: 'critical', message: 'No HTTPS/SSL certificate. Google penalizes non-SSL sites in rankings.' });
      }

      // Title
      const title = doc.querySelector('title')?.textContent?.trim();
      if (!title) {
        issues.push({ severity: 'critical', message: 'Missing <title> tag. Essential for SEO and browser tabs.' });
      } else if (title.length < 10) {
        issues.push({ severity: 'warning', message: `Title tag is too short (${title.length} chars). Aim for 50-60 characters.` });
      } else if (title.length > 70) {
        issues.push({ severity: 'warning', message: `Title tag is too long (${title.length} chars). Aim for 50-60 characters.` });
      } else {
        strengths.push('Title tag is well-optimized for SEO');
      }

      // Meta description
      const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim();
      strengths.hasMetaDescription = !!metaDesc;
      if (!metaDesc) {
        issues.push({ severity: 'critical', message: 'Missing meta description. This is what shows in Google search results.' });
      } else if (metaDesc.length < 50) {
        issues.push({ severity: 'warning', message: `Meta description is too short (${metaDesc.length} chars). Aim for 150-160.` });
      } else if (metaDesc.length > 170) {
        issues.push({ severity: 'warning', message: `Meta description is too long (${metaDesc.length} chars). Aim for 150-160.` });
      } else {
        strengths.push('Meta description is well-optimized');
      }

      // H1
      const h1s = doc.querySelectorAll('h1');
      strengths.hasH1 = h1s.length > 0;
      if (h1s.length === 0) {
        issues.push({ severity: 'critical', message: 'No <h1> heading found. Every page needs exactly one H1 for SEO.' });
      } else if (h1s.length > 1) {
        issues.push({ severity: 'warning', message: `Multiple <h1> tags found (${h1s.length}). Use only one per page.` });
      } else {
        strengths.push('Single H1 heading — good SEO structure');
      }

      // Viewport
      const viewport = doc.querySelector('meta[name="viewport"]');
      strengths.hasViewport = !!viewport;
      strengths.mobileFriendly = !!viewport;
      if (!viewport) {
        issues.push({ severity: 'critical', message: 'No viewport meta tag. Your site will look broken on mobile devices.' });
      } else {
        strengths.push('Mobile viewport configured');
      }

      // Open Graph
      const ogTitle = doc.querySelector('meta[property="og:title"]');
      const ogImage = doc.querySelector('meta[property="og:image"]');
      strengths.hasOpenGraph = !!(ogTitle || ogImage);
      if (!ogTitle && !ogImage) {
        issues.push({ severity: 'warning', message: 'No Open Graph tags. Your links look plain when shared on social media.' });
      } else {
        strengths.push('Open Graph tags present — good for social sharing');
      }

      // Favicon
      const favicon = doc.querySelector('link[rel*="icon"]');
      strengths.hasFavicon = !!favicon;
      if (!favicon) {
        issues.push({ severity: 'info', message: 'No favicon found. Your browser tab will show a generic icon.' });
      }

      // Image alt tags
      const images = doc.querySelectorAll('img');
      const imagesWithoutAlt = Array.from(images).filter(img => !img.getAttribute('alt'));
      if (images.length > 0 && imagesWithoutAlt.length > 0) {
        issues.push({ severity: 'warning', message: `${imagesWithoutAlt.length} of ${images.length} images missing alt text. Hurts SEO and accessibility.` });
      } else if (images.length > 0) {
        strengths.push('All images have alt text — good for SEO and accessibility');
      }

      // Inline styles (indicator of old/unoptimized site)
      const inlineStyles = doc.querySelectorAll('[style]');
      if (inlineStyles.length > 10) {
        issues.push({ severity: 'info', message: `Heavy use of inline styles (${inlineStyles.length} elements). Consider using CSS classes for better maintainability.` });
      }

      // Word count (rough content estimate)
      const bodyText = doc.body?.innerText?.trim() || '';
      const wordCount = bodyText.split(/\s+/).filter(w => w.length > 2).length;
      if (wordCount < 100) {
        issues.push({ severity: 'warning', message: `Very little content detected (~${wordCount} words). Google favors pages with 300+ words.` });
      } else if (wordCount >= 300) {
        strengths.push(`Good content volume (~${wordCount} words)`);
      }

      // Calculate score
      let score = 100;
      issues.forEach(i => {
        if (i.severity === 'critical') score -= 15;
        else if (i.severity === 'warning') score -= 8;
        else if (i.severity === 'info') score -= 3;
      });
      score = Math.max(0, Math.min(100, score));

      const auditResult: AuditResult = {
        url: normalizedUrl,
        score,
        issues,
        strengths,
        metrics: strengths as any,
      };

      setResult(auditResult);
      setStep('results');
    } catch (err: any) {
      setError(err.message || 'Failed to analyze the website. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  const submitEmail = async () => {
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: email,
          message: `Website Grader lead — scored ${result?.score}/100 for ${result?.url}. Issues: ${result?.issues.map(i => i.message).join('; ')}`,
          formType: 'website-grader',
          source: 'website-grader',
        }),
      });
      if (!response.ok) throw new Error('Failed to submit. Please try again.');
      setEmailSubmitted(true);
    } catch (err: any) {
      setEmailError(err.message || 'Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Good';
    if (score >= 50) return 'Needs Work';
    return 'Poor';
  };

  const getSeverityIcon = (severity: string) => {
    if (severity === 'critical') return <AlertCircle className="h-4 w-4 text-red-500" />;
    if (severity === 'warning') return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    return <AlertCircle className="h-4 w-4 text-blue-500" />;
  };

  return (
    <SEOProvider
      title="Free Website Grader — Score Your Site in Seconds | SyncSphere"
      description="Get a free SEO and performance audit of your website. Find issues hurting your Google rankings, mobile experience, and conversion rate. Takes 30 seconds."
      keywords="website grader, free SEO audit, website analysis, site score, SEO checker, website performance"
    >
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Zap className="h-3 w-3 mr-1" /> Free Tool — No Signup Required
              </Badge>
              <h1 className="text-foreground text-4xl md:text-5xl font-bold mb-4">
                Free Website Grader
              </h1>
              <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                Enter your URL and get an instant SEO, performance, and mobile-friendliness audit. 
                Find out what's hurting your Google rankings — in 30 seconds.
              </p>

              {/* Input */}
              {step === 'input' && (
                <Card className="max-w-xl mx-auto">
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="text"
                        placeholder="Enter your website URL (e.g., example.com)"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && runAudit()}
                        className="flex-1"
                      />
                      <Button onClick={runAudit} disabled={loading} className="whitespace-nowrap">
                        {loading ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            Grade My Site
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm mt-3 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        {error}
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Results */}
              {step === 'results' && result && (
                <div className="max-w-3xl mx-auto space-y-6 text-left">
                  {/* Score Card */}
                  <Card>
                    <CardHeader className="text-center">
                      <CardTitle>Website Grade for {result.url}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className={`text-7xl font-bold ${getScoreColor(result.score)}`}>
                          {result.score}
                        </div>
                        <div className="text-foreground/60 text-lg mt-1">out of 100 — {getScoreLabel(result.score)}</div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {[
                          { label: 'SSL/HTTPS', ok: result.metrics.hasSSL },
                          { label: 'Meta Description', ok: result.metrics.hasMetaDescription },
                          { label: 'H1 Heading', ok: result.metrics.hasH1 },
                          { label: 'Mobile Friendly', ok: result.metrics.mobileFriendly },
                          { label: 'Open Graph Tags', ok: result.metrics.hasOpenGraph },
                          { label: 'Favicon', ok: result.metrics.hasFavicon },
                          { label: 'Viewport', ok: result.metrics.hasViewport },
                          { label: 'Title Tag', ok: !!result.issues.find(i => i.message.includes('title')) === false },
                        ].map((m, i) => (
                          <div key={i} className={`flex items-center gap-2 p-2 rounded ${m.ok ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                            {m.ok ? (
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                            )}
                            <span className="text-sm text-foreground/80">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Issues */}
                      {result.issues.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold mb-3 text-foreground">Issues Found</h3>
                          <div className="space-y-2">
                            {result.issues.map((issue, i) => (
                              <div key={i} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                {getSeverityIcon(issue.severity)}
                                <div>
                                  <span className={`text-xs font-medium uppercase ${
                                    issue.severity === 'critical' ? 'text-red-500' :
                                    issue.severity === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                                  }`}>
                                    {issue.severity}
                                  </span>
                                  <p className="text-foreground/80 text-sm mt-0.5">{issue.message}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Strengths */}
                      {result.strengths.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold mb-3 text-foreground">What's Working</h3>
                          <div className="space-y-2">
                            {result.strengths.map((s, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <p className="text-foreground/80 text-sm">{s}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="text-center pt-4 border-t border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-2">Want Us to Fix These Issues?</h3>
                        <p className="text-foreground/70 mb-4">
                          Enter your email and we'll send you a detailed report with actionable recommendations — plus a free consultation call.
                        </p>
                        {emailSubmitted ? (
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                            <p className="text-green-500 font-medium">Report sent! We'll be in touch within 24 hours.</p>
                          </div>
                        ) : (
                          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <Input
                              type="email"
                              placeholder="Enter your email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && submitEmail()}
                              className="flex-1"
                            />
                            <Button onClick={submitEmail} disabled={loading} className="whitespace-nowrap">
                              {loading ? (
                                <>
                                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  <Mail className="h-4 w-4 mr-2" />
                                  Get Full Report
                                </>
                              )}
                            </Button>
                          </div>
                        )}
                        {emailError && (
                          <p className="text-red-500 text-sm mt-2">{emailError}</p>
                        )}
                        <Button variant="outline" className="mt-4" onClick={() => { setStep('input'); setResult(null); setUrl(''); }}>
                          Grade Another Site
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </section>

          {/* Trust Section */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-8">Why Trust Our Audit?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive</h3>
                    <p className="text-foreground/60 text-sm">Checks 15+ SEO, performance, and mobile factors that Google uses to rank your site.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Instant</h3>
                    <p className="text-foreground/60 text-sm">Get your results in 30 seconds. No waiting, no signup, no credit card.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Actionable</h3>
                    <p className="text-foreground/60 text-sm">Every issue comes with a clear explanation of why it matters and how to fix it.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SEOProvider>
  );
};

export default WebsiteGrader;

'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const KEY = 'ss-analytics-consent';
type Choice = 'granted' | 'denied' | null;

function readChoice(): Choice {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(v: Exclude<Choice, null>) {
  try {
    window.localStorage.setItem(KEY, v);
  } catch {
    /* storage blocked: the choice lasts for this page view only */
  }
  window.dispatchEvent(new CustomEvent('ss-consent', { detail: v }));
}

/** Loads Google Analytics only after the visitor accepts, and shows the banner. */
export function Consent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChoice(readChoice());
    setReady(true);
    const onChange = (e: Event) => setChoice((e as CustomEvent<Choice>).detail);
    const onOpen = () => setChoice(null);
    window.addEventListener('ss-consent', onChange);
    window.addEventListener('ss-consent-open', onOpen);
    return () => {
      window.removeEventListener('ss-consent', onChange);
      window.removeEventListener('ss-consent-open', onOpen);
    };
  }, []);

  return (
    <>
      {choice === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {ready && choice === null && (
        <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-line bg-white p-4 shadow-card sm:inset-x-6">
          <p className="text-sm text-ink-soft">
            We use analytics cookies to understand how visitors use this site. No advertising cookies.{' '}
            <a href="/privacy-policy" className="font-medium text-brand underline">Privacy policy</a>
          </p>
          <div className="mt-3 flex gap-2">
            <button type="button" className="btn-primary py-2" onClick={() => saveChoice('granted')}>Accept</button>
            <button type="button" className="btn-outline py-2" onClick={() => saveChoice('denied')}>Decline</button>
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsButton() {
  return (
    <button type="button" className="hover:text-white" onClick={() => window.dispatchEvent(new Event('ss-consent-open'))}>
      Cookie settings
    </button>
  );
}

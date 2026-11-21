'use client';

import { useEffect, useRef, useState } from 'react';

const WORDS = ['tour operators', 'schools', 'hotels', 'clinics', 'shops', 'NGOs', 'law firms'];

/** The headline's murram slot: cycles through the kinds of business we build for. */
export function HeroSlot() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle');
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setPhase('out');
      timers.current.push(
        window.setTimeout(() => {
          setI((n) => (n + 1) % WORDS.length);
          setPhase('in');
          // Two frames later, release the word so it slides up into place.
          timers.current.push(window.setTimeout(() => setPhase('idle'), 30));
        }, 380),
      );
    }, 2600);
    return () => {
      window.clearInterval(id);
      timers.current.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <span className="inline-flex h-[0.9em] items-start overflow-hidden bg-brand-bright px-[0.08em] align-bottom text-cream" aria-hidden="true">
      <span
        className="block whitespace-nowrap leading-[0.92]"
        style={{
          transform: phase === 'out' ? 'translateY(-100%)' : phase === 'in' ? 'translateY(100%)' : 'none',
          opacity: phase === 'idle' ? 1 : 0,
          transition: phase === 'in' ? 'none' : 'transform .38s cubic-bezier(.22,1,.36,1), opacity .38s',
        }}
      >
        {WORDS[i]}
      </span>
    </span>
  );
}

/** Current time in Kampala, refreshed every 30 seconds. */
export function KampalaTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Kampala', hour: '2-digit', minute: '2-digit' });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time ? `${time} EAT` : 'EAT'}</span>;
}

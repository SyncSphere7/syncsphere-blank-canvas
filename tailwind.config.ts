import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

/*
 * Design direction D ("Swiss × Rooted"): a Swiss grid and condensed display type
 * on a bark-cloth dark ground, with cream sheets for reading and one murram accent.
 */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '3rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        // Warm white, so every "white" surface sits in the cream family.
        white: '#FBF7EF',
        cream: { DEFAULT: '#F2E7D3', deep: '#E8DAC1' },
        bark: { DEFAULT: '#1D130D', 2: '#2A1B12' },
        ink: { DEFAULT: '#1D130D', soft: '#56443A', muted: '#7A6656' },
        // Murram: DEFAULT is dark enough for text and buttons on cream; bright is for large fills.
        brand: { DEFAULT: '#B9471D', bright: '#D4582B', deep: '#1D130D', dark: '#A93F18', tint: '#F3DCCB' },
        sun: { DEFAULT: '#9DB054', tint: '#E8EBCF' },
        surface: '#EADFC9',
        line: '#D9C8AC',
        whatsapp: { DEFAULT: '#B9471D', dark: '#9A3A16' },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Segoe UI', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'Arial Narrow', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(29,19,13,0.05), 0 10px 24px -16px rgba(29,19,13,0.25)',
        lift: '0 24px 48px rgba(0,0,0,0.35)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        rise: { from: { transform: 'translateY(105%)' }, to: { transform: 'none' } },
        'fade-up': { from: { transform: 'translateY(24px)', filter: 'blur(8px)' }, to: { transform: 'none', filter: 'none' } },
        card: { from: { transform: 'translateY(40px) rotate(4deg)' }, to: { transform: 'rotate(-2deg)' } },
        dotpulse: { '70%': { boxShadow: '0 0 0 8px rgba(157,176,84,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(157,176,84,0)' } },
      },
      animation: {
        rise: 'rise 1s cubic-bezier(0.22,1,0.36,1) both',
        'fade-up': 'fade-up .9s cubic-bezier(0.22,1,0.36,1) both',
        card: 'card 1.1s cubic-bezier(0.22,1,0.36,1) both',
        dot: 'dotpulse 2.4s infinite',
      },
    },
  },
  plugins: [typography],
} satisfies Config;

import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        ink: { DEFAULT: '#0B1B2B', soft: '#3D4B5C', muted: '#64748B' },
        brand: { DEFAULT: '#0055A4', deep: '#003366', tint: '#E8F1FB' },
        sun: { DEFAULT: '#F5B000', tint: '#FFF6DB' },
        surface: '#F6F8FB',
        line: '#E2E8F0',
        whatsapp: { DEFAULT: '#1FA855', dark: '#178A45' },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,27,43,0.04), 0 8px 24px -12px rgba(11,27,43,0.12)',
      },
    },
  },
  plugins: [typography],
} satisfies Config;

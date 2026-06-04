import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { syne: ['var(--font-syne)', 'sans-serif'], 'dm-sans': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'] },
      colors: {
        vayrix: { bg: '#0A0E1A', surface: '#111827', card: '#1A2235', blue: '#3B7BE8', cyan: '#00D4FF', text: '#F0F4FF', muted: '#8896B0', success: '#22C55E', warning: '#F59E0B', error: '#EF4444', border: '#1E2D45' }
      },
      borderRadius: { phone: '44px' },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;

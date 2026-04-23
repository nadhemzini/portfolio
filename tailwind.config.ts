import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        'dark-bg': '#0A0A0F',
        'dark-card': '#111118',
        'accent-violet': '#6C63FF',
        'accent-cyan': '#00D4FF',
        'text-primary': '#F0F0F5',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(108, 99, 255, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(108, 99, 255, 0.8)',
          },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'cursor': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), cursor 0.75s step-end infinite',
      },
      backgroundImage: {
        'gradient-mesh': 'linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

export default config

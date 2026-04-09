/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f6f8',
          100: '#e8eaee',
          200: '#cdd3da',
          300: '#a8b5c2',
          400: '#8099b0',
          500: '#627d96',
          600: '#4e647a',
          700: '#3d5063',
          800: '#2e3e4f',
          900: '#1e2d3d',
          950: '#111a24',
        },
        stone: {
          50: '#f7f7f8',
          100: '#ebebee',
          200: '#d5d6dc',
          300: '#afb1bc',
          400: '#838698',
          500: '#62657a',
          600: '#4c4f62',
          700: '#3b3e50',
          800: '#282a38',
          900: '#16181f',
          950: '#0d0e12',
        },
        // Keep midnight for backward compat with existing classes
        midnight: {
          50: '#f5f6f8',
          100: '#e8eaee',
          200: '#cdd3da',
          300: '#a0aab8',
          400: '#6e7d8f',
          500: '#4e5e6f',
          600: '#3c4c5c',
          700: '#2d3a48',
          800: '#202c39',
          900: '#151e28',
          950: '#0d0e12',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'slide-in-right': 'slideInRight 0.8s ease forwards',
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(98,125,150,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(98,125,150,0.35)' },
        },
      },
    },
  },
  plugins: [],
};

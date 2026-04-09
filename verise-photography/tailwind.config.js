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
          50: '#f0fdf9',
          100: '#ccfbeb',
          200: '#9af5d6',
          300: '#5fe9be',
          400: '#2dd4a3',
          500: '#14b88a',
          600: '#0a9571',
          700: '#0c775c',
          800: '#0e5e4b',
          900: '#104d3f',
          950: '#042f26',
        },
        midnight: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0d9e6',
          300: '#a7b8d0',
          400: '#7893b5',
          500: '#56769c',
          600: '#435e82',
          700: '#374d6a',
          800: '#304259',
          900: '#2c394c',
          950: '#0f1623',
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
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(20, 184, 138, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(20, 184, 138, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Navy, cream, and gold theme
        primary: {
          50: '#fff7e3',
          100: '#f7e6c1',
          200: '#eed29a',
          300: '#e0b86d',
          400: '#d1a052',
          500: '#b8893a',
          600: '#9b6f2f',
          700: '#7f5826',
          800: '#64441f',
          900: '#4a3218',
        },
        accent: {
          purple: '#d2b25a',
          cyan: '#b8893a',
          emerald: '#ead9ab',
          rose: '#8e6b22',
          coral: '#d6b26b',
          mint: '#efe3c4',
          gold: '#c9a24a',
        },
        dark: {
          50: '#0d1225',
          100: '#111a33',
          200: '#1b2544',
          300: '#243054',
          400: '#2e3c64',
          500: '#3b4b78',
          600: '#56638f',
          700: '#8b97b6',
          800: '#c7cfdf',
          900: '#f6f1e6',
        },
        neutral: {
          50: '#fbf8f2',
          100: '#f4ede1',
          200: '#e6dbc5',
          300: '#d3c3a1',
          400: '#bba77c',
          500: '#9f8b61',
          600: '#7f6f52',
          700: '#545c72',
          800: '#323b55',
          900: '#1c2238',
        },
        white: '#f6f1e6',
        black: '#0d1225',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 18px rgba(201, 162, 74, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-border': 'pulseBorder 2s ease-in-out infinite',
        'zoom-in': 'zoomIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseBorder: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 162, 74, 0.65)' },
          '50%': { boxShadow: '0 0 0 10px rgba(201, 162, 74, 0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

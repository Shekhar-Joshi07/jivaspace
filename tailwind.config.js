/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Orange and cream theme
        primary: {
          50: '#fff4e7',
          100: '#ffe4c1',
          200: '#ffcc8a',
          300: '#ffb056',
          400: '#ff951e',
          500: '#f37a00',
          600: '#dd6500',
          700: '#b94f00',
          800: '#8e3a04',
          900: '#6f2b06',
        },
        accent: {
          purple: '#ffd6a4',
          cyan: '#ff9f3d',
          emerald: '#fff2df',
          rose: '#d55800',
          coral: '#ffc789',
          mint: '#fff7ef',
          gold: '#ff8a1a',
        },
        dark: {
          50: '#6b2504',
          100: '#7c2d07',
          200: '#94411b',
          300: '#ac5830',
          400: '#c47049',
          500: '#8d5c40',
          600: '#b88968',
          700: '#dbb69b',
          800: '#f1ddcd',
          900: '#fff7ef',
        },
        neutral: {
          50: '#fffaf4',
          100: '#fff1e2',
          200: '#f8dcc1',
          300: '#efc39e',
          400: '#d7a77b',
          500: '#b7855e',
          600: '#8a6245',
          700: '#5d402d',
          800: '#3a281d',
          900: '#24160f',
        },
        white: '#fff7ef',
        black: '#24160f',
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
        'glow': '0 0 18px rgba(243, 122, 0, 0.32)',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(243, 122, 0, 0.55)' },
          '50%': { boxShadow: '0 0 0 10px rgba(243, 122, 0, 0)' },
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

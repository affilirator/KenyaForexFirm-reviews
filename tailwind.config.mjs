/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        accent: {
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
        },
        neutral: {
          100: '#f5f5f5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        ui: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['EB Garamond', 'serif'],
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
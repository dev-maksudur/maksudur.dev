import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#6a2cff', // Logo primary violet
          700: '#591de6',
          800: '#4815bf',
          900: '#391099',
          950: '#220761',
        },
        blue: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#6a2cff', // Logo primary violet
          700: '#591de6',
          800: '#4815bf',
          900: '#391099',
          950: '#220761',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff8a00', // Logo orange accent
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        brand: {
          DEFAULT: '#6a2cff',
          purple: '#6a2cff',
          orange: '#ff8a00',
          cyan: '#00b8c9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'crypto-grid': 'linear-gradient(to right, rgba(106, 44, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(106, 44, 255, 0.1) 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(135deg, #6a2cff 0%, #8b5cf6 50%, #ff8a00 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(106, 44, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(106, 44, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
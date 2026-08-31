import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Palette extracted from public/nexaflow-logo.jpg — Deep Navy + Bright Flow Blue
        navy: {
          DEFAULT: '#0A2352', // primary logo dark blue
          dark: '#07214C', // darkest navy (logo N shadow)
          light: '#12346A',
        },
        steel: {
          50: '#EFF7FE',
          100: '#D9EBFB',
          200: '#B3D7F5',
          300: '#8CC0EE',
          400: '#4DA8D8', // light flow blue
          500: '#1C9CE0', // bright sky blue (logo)
          600: '#036BCE', // primary action blue (logo)
          700: '#0A589D',
          800: '#0F4270',
          900: '#0B2F50',
          950: '#071A36',
        },
      },
    },
  },
  plugins: [],
};

export default config;

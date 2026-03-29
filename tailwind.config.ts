import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0A2540', light: '#1E3A5F' },
        accent: { DEFAULT: '#D4AF37', hover: '#B8960C' },
        surface: '#F8FAFC',
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nsam: {
          blue: '#2e3192',
          navy: '#1b1e56',
          darkBlue: '#14163d',
          yellow: '#fdb913',
          darkYellow: '#e5a50b',
          gray: '#565950',
          dark: '#37352f',
          light: '#f8f8f8',
          border: '#eeeded',
          hover: '#242775',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

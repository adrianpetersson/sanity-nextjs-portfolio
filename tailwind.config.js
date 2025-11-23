/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#003afa',
        'primary-hover': '#0b6ae6',
        'dark-bg': 'hsl(225, 10%, 8%)',
        'dark-container': 'hsl(223, 14%, 20%)',
        'light-bg': '#fff',
        'light-container': '#fff',
        accent: 'orange',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Heebo', 'sans-serif'],
      },
      fontSize: {
        'hero-lg': 'clamp(38px, 8vw, 80px)',
        'hero-md': 'clamp(21px, 4vw, 34px)',
      },
    },
  },
  plugins: [],
};

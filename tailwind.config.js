/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
      extend: {
      colors: {
        transparent: 'transparent',
        bgColor: '#8c7742',
        primary: '#fdeedb',
      }
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
}

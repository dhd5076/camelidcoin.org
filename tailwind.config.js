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
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'encode': ['Encode Sans', 'sans-serif'],
        'amarante':["Amarante", "ui-serif"],
      },
      colors: {
        'cream': '#faf3e0',
        'navy': '#3e4c8a',
      },
      dropShadow: {
        'text': '0px 2px 2px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
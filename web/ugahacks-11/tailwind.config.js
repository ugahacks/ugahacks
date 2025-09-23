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
        'amarante': ['Amarante', 'serif'],
        'encode': ['Encode Sans', 'sans-serif'],
        'amarante':["Amarante", "ui-serif"],
      },
      colors: {
        track: {
          blue: '#3e4c8a',
          green: '#66a865',
          brown: '#93642d',
          purple: '#9b6798',
          'dark-brown': '#7a562b',
          'sage-green': '#7b9a7b',
          gold: '#FFD700',
          'card-bg': '#faf3e0',
          'card-border': '#714d22',
          'card-text': '#714d22',
          'gold-border': '#ffcf59',
        },
      },
      dropShadow: {
        'text': '0px 2px 2px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
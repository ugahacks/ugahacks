/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        goblin: {
          50: "#f1f8f3",
          100: "#ddeedf",
          200: "#bdddc3",
          300: "#91c49f",
          400: "#62a577",
          500: "#428a5a",
          600: "#2f6c45",
          700: "#265638",
          800: "#20452f",
          900: "#1b3927",
        },
        celery: {
          50: "#f7faeb",
          100: "#ecf3d4",
          200: "#dae8ae",
          300: "#c1d77f",
          400: "#a6c454",
          500: "#8aaa38",
          600: "#6a8729",
          700: "#526823",
          800: "#435321",
          900: "#394720",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/components/header/Header.tsx",
    "src/components/cards/Topics.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'blue' : '#4717F6',
        'dark' : '#0E0B16', 
        'light' : '#E7DFDD',
        'pink': '#A239CA'
      }
    },
  },
  plugins: [],
}




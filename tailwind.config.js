/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gumroad-pink': {
          100: '#FFF0F7',
          200: '#FED7E9',
          500: '#FFC0CB', // Updated to a more muted pink
        },
        'gumroad-blue': {
          600: '#3B82F6',
        },
        'muted-blue': '#A0AEC0', // Added a new muted blue color
      },
    },
  },
  plugins: [],
}
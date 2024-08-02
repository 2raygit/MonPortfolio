/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'custom-blue-start': '#002b55', // Personnaliser cette couleur pour qu'elle corresponde à ton image de fond
    'custom-blue-middle': '#004080',
    'custom-gray-end': '#f3f4f6',
  },
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}


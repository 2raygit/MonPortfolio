/** @type {import('tailwindcss').Config} */
export default {
  purge: [],
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'custom-blue-start': '#002b55', // Personnaliser cette couleur pour qu'elle corresponde à ton image de fond
    'custom-blue-middle': '#004080',
    'custom-gray-end': '#f3f4f6',
    'night-blue': '#2c3e50',
  },
  animation: {
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}


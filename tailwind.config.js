/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'feature-bg': "url('/src/assets/AFeature.png')"
      }
    },
  },
  plugins: [],
}
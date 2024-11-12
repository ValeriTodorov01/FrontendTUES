/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "customColor": "#A85269",
        "beige": "#F0D8CA",
        "light_beige": "#FBF1EB",
        "purple": "#664164",
        "dark_brown": "#816c65"
      },
      letterSpacing: {
        trulyWidest: '0.5rem',
      }
    },
  },
  plugins: [],
}
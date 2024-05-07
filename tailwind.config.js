/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        profileBg: "url('/assets/backgroundImage.png')",
      },
      colors: {
        PrimaryBlue: '#168fba',
        darkerBlack: '#1e2131',
        lighterBlack: '#22263a',
        lighterText: '#c5c4c3',
        lightMode: '#00008B',  
      }
    },
  },
  plugins: [],
}
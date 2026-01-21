/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1f242d',        // Dark Background
        secondBg: '#323946',  // Card Background
        main: '#0ef',         // Neon Blue Color
      }
    },
  },
  plugins: [],
}
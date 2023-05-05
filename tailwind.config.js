/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "primary-black": "#0D0D0D",
        "primary-white": "#F2F2F2",
        "primary-yellow": "#F2CF66",
        "primary-orange": "#F24405",
        "primary-light-orange": "#F25C05",
        "secondary-yellow": "#f0d994"
      },
      fontFamily:{
        anton: ["Anton", "sans-serif"],
        roboto:["Roboto", "sans-serif"]
      },
      backgroundImage: {
        'bg-pattern': "url('/assets/image/hero-pattern.svg')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}


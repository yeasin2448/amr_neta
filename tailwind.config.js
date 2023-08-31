/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
    },
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1500px",
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "575px" },
    },
    extend: {
      colors: {
        header_bg: "#002138",
        theme_color: "#028FF0",
        o: "#19181f",
        section_bg: "#23202a",
      },
      dropShadow: {
        bmp: "0px 1px 17px rgba(0, 27, 45, 0.09)",
      },
      boxShadow: {
        theme_shadow: "0px 1px 13px rgba(46, 49, 146, 0.09)",
        approve_process: "0px 0px 14px rgba(13, 193, 217, 0.16)",
        angle_shadow: "0px 1px 11px rgba(51, 73, 167, 0.09);",
      },
      backgroundImage: {
        bg_multi_offer: "url('../src/images/banner/multi_offer.png')",
        single_offer: "url('../src/images/banner/single_offer.png')",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

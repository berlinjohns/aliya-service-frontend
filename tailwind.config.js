/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#FFEE32",
          400: "#FFD500",
          800: "#FDC500",
        },
        secondary: {
          200: "#C86BFA",
          400: "#5C0099",
          800: "#3D0066 ",
        },
        dark: {
          200: "#03071E",
        },
      },
     
    },
   
  },
  plugins: [],
};

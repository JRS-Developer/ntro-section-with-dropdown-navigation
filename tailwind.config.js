const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 8%)",
        white: "hsl(0, 0%, 98%)",
        gray: {
          400: "hsl(0, 0%, 41%)",
        },
      },
      textColor: {
        primary: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ["Epilogue", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

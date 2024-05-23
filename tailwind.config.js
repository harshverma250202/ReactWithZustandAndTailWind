/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        onest: ["Onest", "sans-serif"],
      },
      colors: {
        ascentColor: "#085454",
        lighterAscentColor: "#0d6e6e",
        darkerAscentColor: "#073838",
        textPrimary: "#373737",
        textLight: "#948F8F",
        primaryColor: "#181B4C",
        highlightColor: "#394DC6",
        disableColor: "#D9D9D9",
        white: "#fff",
        gray: {
          100: "#e6e6e6",
          200: "#d9d9d9",
        },
        slateblue: "#394dc6",
        darkGrey: "#373737",
        plum: "#f4adff",
        lightskyblue: "#aebdff",
        paleturquoise: "#93dbdf",
        goldenrod: "#ffbc3a",
        greenTag: "#c9e6ab",
        chocolate: "#ff8d3a",
        royalblue: {
          100: "#687dff",
          200: "#5e73ed",
        },
        lightseagreen: "#00a4a4",
        limegreen: "#4bbf4a",
        palevioletred: "#ff7baa",
        dimgray: "#797373",
        darkslateblue: "#181b4c",
        darkgray: "#9f9f9f",
        silver: "#bfbfbf",
        black: "#000",
        bgColor: "#E8EAF6",
      },
      backgroundImage: {
        "gradient-kim": "linear-gradient(137deg, var(--tw-gradient-stops))",
      },
      height: {
        screenHeight: "calc(100vh - 4rem)",
        contentHeight: "calc(100vh - 7.5rem)",
      },
      fontSize: {
        "2xs": ".625rem",
        "3xs": ".5rem",
      },
    },
  },
  plugins: [],
};

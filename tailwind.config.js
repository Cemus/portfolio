/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        lShade: "#F7FAFA",
        lAccent: "#E8D623",
        mBrand: "#E64242",
        dAccent: "#9590A7",
        dShade: "#2E3147",
        dDark: "#14151e",
      },
      animation: {
        glimmer: "glimmer 3s ease-out infinite",
        float: "float 5s ease-out infinite",
        pop: "pop .5s ease-out",
        slideFromLeft: "slideFromLeft .3s ease-out ",
        slideFromRight: "slideFromRight .3s ease-out ",
      },
      keyframes: {
        pop: {
          "0%": {
            opacity: "0",
            width: "0px",
            height: "0px",
          },
          "25%": { opacity: ".5" },
          "50%": { opacity: "1", width: "1.5rem", height: "1.5rem" },
          "100%": { width: "1rem", height: "1rem" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        glimmer: {
          "0%,100%": { opacity: ".1" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-5px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
      },
    },
    plugins: [],
  },
};

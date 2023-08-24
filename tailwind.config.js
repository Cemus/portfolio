/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        lShade: "#FAFBFB",
        lAccent: "#A1BAB1",
        mBrand: "#E8D623",
        dAccent: "#BB7659",
        dShade: "#294341",
      },
      animation: {
        glimmer: "glimmer 3s ease-out infinite",
      },
      keyframes: {
        glimmer: {
          "0%,100%": { opacity: ".1" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

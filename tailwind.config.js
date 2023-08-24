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

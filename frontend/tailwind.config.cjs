const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        grifter: ["Grifter", "Helvetica", ...defaultTheme.fontFamily.sans],
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        lightBlue: "#36BCD1",
        darkBlue: "#4172D1",
        green: "#2CD18B",
        pink: "#D14B8C",
        rust: "#D1604B",
      },
      keyframes: {
        rotateY: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "10%": { transform: "translateY(0%)", opacity: 1 },
          "20%": { transform: "translateY(0%)", opacity: 1 },
          "25%": { transform: "translateY(-50%)", opacity: 0 },
          "30%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
      },
      animation: {
        rotateY: "rotateY 10s ease-in-out infinite",
      },
      boxShadow: {
        tile: "-2px 2px 0 0 rgba(122, 122, 122, 1), -4px 4px 0 0 rgba(122, 122, 122, 1), -6px 6px 0 0 rgba(122, 122, 122, 1), -8px 8px 0 0 rgba(122, 122, 122, 1), -50px 50px 120px 20px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  extend: {},
  plugins: [require("tailwindcss-animation-delay")],
}

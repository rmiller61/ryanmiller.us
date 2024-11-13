// @ts-ignore
import perspectivePlugin from "@kamona/tailwindcss-perspective";
import aspectRatioPlugin from "@tailwindcss/aspect-ratio";
import type { Config } from "tailwindcss";
import animationDelayPlugin from "tailwindcss-animation-delay";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      transformOrigin: {
        "left-top": "0% 0%",
        "center-top": "50% 0%",
        "right-top": "100% 0%",
        "left-center": "0% 50%",
        center: "50% 50%",
        "right-center": "100% 50%",
        "left-bottom": "0% 100%",
        "center-bottom": "50% %",
        "right-bottom": "100% 100%",
      },
      fontFamily: {
        grifter: ["Grifter", "Helvetica", ...defaultTheme.fontFamily.sans],
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#0c0c0c",
        lightBlue: "#36BCD1",
        darkBlue: "#4172D1",
        green: "#2CD18B",
        pink: "#D14B8C",
        rust: "#D1604B",
        darkRust: "#9E2D19",
      },
      keyframes: {
        rotateY: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "10%": { transform: "translateY(0%)", opacity: "1" },
          "20%": { transform: "translateY(0%)", opacity: "1" },
          "25%": { transform: "translateY(-50%)", opacity: "0" },
          "30%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        rotateY: "rotateY 10s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      boxShadow: {
        //tile: "-2px 2px 0 0 rgba(122, 122, 122, 1), -4px 4px 0 0 rgba(122, 122, 122, 1), -6px 6px 0 0 rgba(122, 122, 122, 1), -8px 8px 0 0 rgba(122, 122, 122, 1), -50px 50px 120px 20px rgba(0, 0, 0, 0.5)",
        tile: "-2px 2px 0 0 rgba(122, 122, 122, 1), -4px 4px 0 0 rgba(122, 122, 122, 1), -6px 6px 0 0 rgba(122, 122, 122, 1), -8px 8px 0 0 rgba(122, 122, 122, 1)",
        bookLeft:
          "inset 4px -4px 4px 1px #635648, inset 7px -7px 4px 0 #221b14",
        bookRight:
          "inset -4px -4px 4px 1px #635648, inset -7px -7px 4px 0 #221b14",
        pageLeft:
          "inset 0 0 26px 2px #d8cccc, -1px 1px 13px 0 rgba(34, 27, 20, 0.81)",
        "pageLeft-2":
          "inset 0 0 7px 4px rgba(215, 203, 203, 0.43), -1px 1px 13px 0 rgba(34, 27, 20, 0.49)",
        pageRight:
          "inset 0 0 26px 2px #d8cccc, 1px 1px 13px 0 rgba(34, 27, 20, 0.81)",
        "pageRight-2":
          "inset 0 0 7px 4px rgba(215, 203, 203, 0.43), 1px 1px 13px 0 rgba(34, 27, 20, 0.49)",
        "corner-1": "inset 13px 0 17px -12px rgba(215, 203, 203, 0.43)",
        "corner-2": "inset 0 13px 17px -12px rgba(215, 203, 203, 0.43)",
        cornerFold: "6px 6px 9px -4px rgba(215, 203, 203, 0.53)",
      },
      backgroundImage: {
        bookCenter:
          "radial-gradient(circle farthest-corner at 56% -8%, #fff 8%, transparent 0), radial-gradient(circle farthest-corner at 50% 108%, #fff 8%, transparent 0), linear-gradient(90deg, #635648, #2e1800 21%, #635648 30%, #2e1800 48%, #635648 68%, #2e1800 79%, #635648)",
        "corner-1": "linear-gradient(135deg, #fff 30%, transparent)",
        "corner-2": "linear-gradient(135deg, #fff 31%, transparent)",
        corner:
          "linear-gradient(135deg, transparent 47%, #f0f0f0 48%, #fff 55%, #f6f6f6)",
      },
      fontSize: {
        h1: "clamp(6rem, calc(1vw + 6rem), 10rem)",
        h2: "clamp(5rem, calc(1vw + 4rem), 8rem)",
        h3: "clamp(4rem, calc(1vw + 3rem), 6rem)",
        h4: "clamp(3rem, calc(1vw + 2rem), 4rem)",
        h5: "clamp(1.5rem, calc(1vw + 1rem), 2rem)",
        h6: "clamp(1rem, calc(1vw + 0.5rem), 1.5rem)",
      },
    },
  },
  extend: {},
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    animationDelayPlugin,
    perspectivePlugin,
    aspectRatioPlugin,
    plugin(function ({
      addComponents,
      addUtilities,
      addBase,
      theme,
      e,
      matchUtilities,
    }) {
      addBase({
        "*, ::before, ::after": {
          "--tw-translate-x": "0",
          "--tw-translate-y": "0",
          "--tw-translate-z": "0",
          "--tw-rotate-x": "0",
          "--tw-rotate-y": "0",
          "--tw-rotate-z": "0",
          "--tw-skew-x": "0",
          "--tw-skew-y": "0",
          "--tw-scale-x": "1",
          "--tw-scale-y": "1",
          "--tw-scale-z": "1",
          // '--tw-self-perspective': '0',
          "--tw-transform": [
            "translateX(var(--tw-translate-x))",
            "translateY(var(--tw-translate-y))",
            "rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z))",
            "translateZ(var(--tw-translate-z))",
            "skewX(var(--tw-skew-x))",
            "skewY(var(--tw-skew-y))",
            "scale3d(var(--tw-scale-x), var(--tw-scale-y), var(--tw-scale-z))",
          ].join(" "),
        },
        "html, body": {
          fontFamily: theme("fontFamily.sans"),
        },
        h1: {
          fontSize: theme("fontSize.h1"),
        },
        h2: {
          fontSize: theme("fontSize.h2"),
        },
        h3: {
          fontSize: theme("fontSize.h3"),
        },
        h4: {
          fontSize: theme("fontSize.h4"),
        },
        h5: {
          fontSize: theme("fontSize.h5"),
        },
        h6: {
          fontSize: theme("fontSize.h6"),
        },
      });

      addUtilities({
        ".transform-style-flat": {
          "transform-style": "flat",
        },
        ".transform-style-3d": {
          "transform-style": "preserve-3d",
        },
      });

      addUtilities({
        ".backface-visible": {
          "backface-visibility": "visible",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      });

      matchUtilities(
        {
          perspective: (value) => ({
            perspective: value,
          }),
        },
        { values: theme("perspective") }
      );

      addUtilities(
        // @ts-ignore
        Object.entries(theme("transformOrigin")).map(([name, value]) => ({
          [`.${e(`perspective-origin-${name}`)}`]: {
            "perspective-origin": value,
          },
        })),
        // @ts-ignore
        ["responsive"]
      );

      addUtilities({
        ".transform-3d-none": { transform: "none" },
      });

      matchUtilities(
        {
          "rotate-x": (value) => ({
            "--tw-rotate-x": value,
            transform: "var(--tw-transform)",
          }),
        },
        { values: theme("rotateX") }
      );

      matchUtilities(
        {
          "rotate-y": (value) => ({
            "--tw-rotate-y": value,
            transform: "var(--tw-transform)",
          }),
        },
        { values: theme("rotateY") }
      );

      matchUtilities(
        {
          "rotate-z": (value) => ({
            "--tw-rotate-z": value,
            transform: "var(--tw-transform)",
          }),
        },
        { values: theme("rotateZ") }
      );

      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: "var(--tw-transform)",
          }),
        },
        { values: theme("translateZ") }
      );
      addComponents({
        ".button": {
          backgroundSize: "300% 100%",
          backgroundImage: `linear-gradient(to right, ${theme(
            "colors.pink"
          )}, ${theme("colors.darkRust")}, ${theme(
            "colors.lightBlue"
          )}, ${theme("colors.green")})`,
          backgroundPosition: "0% 0%",

          "&:hover": {
            backgroundPosition: "100% 0%",
          },
        },
      });
    }),
  ],
} satisfies Config;

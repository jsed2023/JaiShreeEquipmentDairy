import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Optimized NextUI scan (JS only to reduce CSS size)
    "./node_modules/@nextui-org/theme/dist/**/*.js",
  ],

  darkMode: "class",

  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },

        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },

        slideInFromTop: {
          "0%": { transform: "translateY(-200%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },

        slideInFromBottom: {
          "0%": { transform: "translateY(200%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },

        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },

      animation: {
        slideInFromLeft: "slideInFromLeft 1.5s ease-out forwards",
        slideInFromRight: "slideInFromRight 1.5s ease-out forwards",

        slideInFromTop5: "slideInFromTop .5s ease-out forwards",
        slideInFromTop8: "slideInFromTop .8s ease-out forwards",
        slideInFromTop11: "slideInFromTop 1.1s ease-out forwards",
        slideInFromTop14: "slideInFromTop 1.4s ease-out forwards",
        slideInFromTop17: "slideInFromTop 1.7s ease-out forwards",

        slideInFromBottom5: "slideInFromBottom .5s ease-out forwards",
        slideInFromBottom8: "slideInFromBottom .8s ease-out forwards",
        slideInFromBottom11: "slideInFromBottom 1.1s ease-out forwards",
        slideInFromBottom14: "slideInFromBottom 1.4s ease-out forwards",
        slideInFromBottom17: "slideInFromBottom 1.7s ease-out forwards",

        float: "float 6s ease-in-out infinite",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },

  plugins: [
    nextui({
      addCommonColors: true, // keeping everything enabled as requested
    }),
  ],

  future: {
    hoverOnlyWhenSupported: true,
  },
};

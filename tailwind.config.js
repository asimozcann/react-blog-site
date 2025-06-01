/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: 'DM Sans',
      },

      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 3s steps(30, end) forwards",
        blink: "blink 0.7s step-end infinite",
      },
    },
  },
  plugins: [],
};

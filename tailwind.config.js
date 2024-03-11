/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eczar: ["Eczar", "sans-serif"],
      },
      colors: {
        "tedx-dark": "#0f0606",
        "tedx-bg": "#0D0505",
        "tedx-white": "#FFFFFF",
        "tedx-blue": "#3b82f6",
        "tedx-pink": "#ec4899",
        "tedx-red": "#650000",
        "tedx-red-medium": "#490000",
        "tedx-dark-brown": "#2F0000",
        "tedx-brown": "#200B0B",
        "tedx-heading": "#F19F00",
        "tedx-preasons": "#C7C7C7",
      },
      animation: {
        glow: "glow 1s ease-in-out infinite alternate",
        skew: "skewAnimation 0.4s ease-in-out",
        skewOut: "skewOutAnimation 0.4s ease-in-out",
      },
      keyframes: {
        glow: {
          from: { "background-position": "left" },
          to: { "background-position": "right" },
        },
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      50: "50%",
      150: "150%",
      200: "200%",
      300: "300%",
    },
    clipPath: {
      speakerPolygon:
        "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);",
      circularPolygon: "ellipse(70% 40% at 40% 51%)",
      framePolygon: "polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
    },
  },
  plugins: [require("tailwind-clip-path"), require("@tailwindcss/line-clamp")],
};

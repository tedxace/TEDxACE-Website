/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "tedx-dark": "#1a1a1a",
        "tedx-white": "#FFFFFF",
        "tedx-blue": "#3b82f666",
        "tedx-pink": "#ec489966",
      },
      animation: {
        glow: "glow 1s ease-in-out infinite alternate",
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
      framePolygon: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
    },
  },
  plugins: [require("tailwind-clip-path"), require("@tailwindcss/line-clamp")],
};

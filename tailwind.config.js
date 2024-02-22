/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "tedx-dark": "#0f0606",
        "tedx-white": "#FFFFFF",
        "tedx-blue": "#3b82f6",
        "tedx-pink": "#ec4899",
      },
      animation: {
        glow: "glow 1s ease-in-out infinite alternate",
        skew: "skewAnimation 0.5s ease-in",
        skewout: "skewOutAnimation 0.5s ease-out",
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

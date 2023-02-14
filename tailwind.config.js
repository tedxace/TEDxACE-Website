/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tedx-dark": "#1a1a1a",
        "tedx-white": "#FFFFFF",
        "tedx-blue": "#3b82f666",
        "tedx-pink": "#ec489966"
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
      '200%': '200%'
    },
    clipPath: {
      speakerPolygon: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);"
    }
  },
  plugins: [
    require('tailwind-clip-path'), require('@tailwindcss/line-clamp'),
  ],
}

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
    }
  },
  plugins: [],
}

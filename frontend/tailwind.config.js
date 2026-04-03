/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00F5A0",
        "primary-dim": "#00ec9a",
        "surface": "#020f1e",
        "surface-low": "#041425",
        "surface-high": "#0d2134",
        "surface-top": "#12273c",
        "on-surface": "#d9e7fc",
        "on-surface-muted": "#9eacc0",
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 245, 160, 0.35)',
        'glow-lg': '0 0 60px rgba(0, 245, 160, 0.2)',
      }
    },
  },
  plugins: [],
}

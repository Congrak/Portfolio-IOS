/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['BlinkMacSystemFont-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

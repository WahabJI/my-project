/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'title': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        // add 2 colors here of a beige color with hex code #FFFFE3 and a blue of #023047

        'beige': '#FFFFE3',
        'cblue': '#023047',
        'light-blue': 'rgba(173,216,250, 0.65)',
      },
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'danilo': ['DaniloCatalina', 'sans-serif'],
        'satoshi': ['Satoshi', 'Satoshi_Variable', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'brand': {
          'primary': '#ab572d',
          'dark': '#1d1d1d',
        }
      }
    },
  },
  plugins: [],
}


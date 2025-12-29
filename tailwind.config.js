/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'danilo': ['Inter', 'sans-serif'],
        'satoshi': ['Inter', 'sans-serif'], // Using Inter as fallback since Satoshi fonts are not available
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


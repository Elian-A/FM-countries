/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        neutral:{
          100: "var(--clr-neutral-100)",
          200: "var(--clr-neutral-200)",
          300: "var(--clr-neutral-300)",
          700: "var(--clr-neutral-700)",
          800: "var(--clr-neutral-800)",
          900: "var(--clr-neutral-900)",
        }
      },
      fontSize:{
        small: "var(--fs-small)",
        medium: "var(--fs-medium)",
      }
    },
  },
  plugins: [],
}
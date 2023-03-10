/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          text: "var(--clr-text)",
          element: "var(--clr-element)",
          background: "var(--clr-background)",
          input: "var(--clr-input)",
        },
      },
      fontSize: {
        small: "var(--fs-small)",
        medium: "var(--fs-medium)",
      },
      minHeight: {
        header: "var(--header-h)",
        main: "var(--main-h)",
      },
    },
  },
  plugins: [],
};

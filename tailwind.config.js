module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      "primary-light": "var(--color-primary-light)",
      "primary-dark": "var(--color-primary-dark)",

      secondary: "var(--color-secondary)",
      "secondary-light": "var(--color-secondary-light)",

      space: "var(--color-space)",
      "space-light": "var(--color-space-light)",

      gray: "var(--color-gray)",
      "gray-dark": "var(--color-gray-dark)",

      card: "var(--color-card)",

      brand: "var(--color-brand)",
      "brand-dark": "var(--color-brand-dark)",

      "brand-invert": "var(--color-on-brand)",

      white: "var(--color-white)",
      black: "var(--color-black)",
      warning: "var(--color-warning)",
      danger: "var(--color-danger)",
    },
    extend: {
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};

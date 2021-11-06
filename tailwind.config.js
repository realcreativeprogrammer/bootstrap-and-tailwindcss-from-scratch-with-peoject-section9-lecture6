module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require("tailwindcss-font-variant-numeric"),
    require('@tailwindcss/forms')({
      strategy:'class',
    }),

  ],
}

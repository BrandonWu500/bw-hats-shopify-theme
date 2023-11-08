/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};

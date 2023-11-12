/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{liquid,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{liquid,js}'],
  theme: {
    fontFamily: {
      heading: 'var(--heading-font)',
      body: 'var(--body-font)',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};

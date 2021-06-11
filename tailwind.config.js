module.exports = {
  mode: 'jit',
  purge: [
    './templates/**/*.html.twig',
    './assets/**/*.css',
    './assets/**/*.scss',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/jit'),
  ],
}

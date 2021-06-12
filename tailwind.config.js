module.exports = {
  mode: 'jit',
  purge: [
    './templates/**/*.html.twig',
    './assets/**/*.css',
    './assets/**/*.scss',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#394F63',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/jit'),
    require('@tailwindcss/forms'),
  ],
}

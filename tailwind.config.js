module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'serif': ['Ribes Black', 'ui-serif', 'Georgia', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

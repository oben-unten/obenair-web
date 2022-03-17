module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    colors: {
      dark: '#745b9d',
      light: '#c29cc2',
      'on-dark': '#fff',
      'on-light': '#fff',
    },
    fontFamily: {
      'serif': ['Ribes Black', 'ui-serif', 'Georgia', 'serif'],
      'sans-serif': ['Helvetica', 'ui-sans-serif', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      header: '#e14c2c',
      dark: '#256873',
      light: '#e9dcd9',
      'on-header': 'white',
      'on-dark': 'white',
      'on-light': '#e14d2c',
      black: 'black',
      white: 'white',
    },
    fontFamily: {
      'serif': ['Ribes Black', 'ui-serif', 'Georgia', 'serif'],
      'sans-serif': ['Helvetica', 'ui-sans-serif', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      header: '#ece1df',
      dark: '#86aeb8',
      light: '#efefef',
      'on-header': '#e14d2c',
      'on-dark': '#fff',
      'on-light': '#333',
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

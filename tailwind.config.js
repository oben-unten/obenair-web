module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      header: '#683551',
      dark: '#e62a49',
      light: '#c9abd2',
      'on-header': 'white',
      'on-dark': 'white',
      'on-light': '#683551',
      black: 'black',
      white: 'white',
    },
    fontFamily: {
      'serif': ['Ribes Black', 'ui-serif', 'Georgia', 'serif'],
      'sans-serif': ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

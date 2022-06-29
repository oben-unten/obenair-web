module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      header: '#745b9d',
      dark: '#c29cc2',
      light: '#efefef',
      'on-header': '#fff',
      'on-dark': '#fff',
      'on-light': '#333',
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

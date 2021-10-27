module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colorMainBlue: '#3E5D8F',
        colorDarkBlue: '#334076',
        colorDarkGrey: '#3D4147',
        colorLightGrey: '#e6e8eb',
        colorMainRed: '#E2585D',
      },
      backgroundImage: {
        diamond: "url('/img/bg/whitediamond.png')",
        spikes: "url('/img/bg/spikes.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
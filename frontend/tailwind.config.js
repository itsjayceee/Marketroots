module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F5233',
        secondary: '#AAD15D',
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
};
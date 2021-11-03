module.exports = {
  module: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#239DFF',
        'primary-light': '#ADCDEB',
        'primary-dark': '#0F273E',
      },
      animation: {
        'clouds-slow': 'clouds 45s ease-in infinite',
        'clouds-slow-delayed': 'clouds 45s 1.5s ease-out infinite',
        'clouds-normal': 'clouds 30s ease-in-out infinite',
        'clouds-fast': 'clouds 15s ease-out infinite',
        'clouds-fast-delayed': 'clouds 15s 1.5s ease-out infinite',
      },
      keyframes: {
        clouds: {
          '0%': { transform: 'translateX(-45vw)' },
          '100%': { transform: 'translateX(45vw)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};

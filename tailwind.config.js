/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '576px',
        md: '768px',
        lg: '990px',
        xl: '1260px',
        '2xl': '1400px',
        '3xl': '1600px',
        'max-xs': { max: '319px' },
        'max-sm': { max: '575px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '989px' },
        'max-xl': { max: '1259px' },
        'max-2xl': { max: '1399px' },
        'max-3xl': { max: '1599px' }
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          sm: '100%',
          xl: '1160px'
        }
      }
    }
  },
  plugins: []
}

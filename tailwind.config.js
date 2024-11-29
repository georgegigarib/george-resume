/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'app': {
          lightgreenblue: '#0F969C',
          greenblue: '#0D747AFF',
          box: '#072E33',
          grey: '#294D61',
          light: '#6DA5C0',
          dark: '#05161A',
        },
      },
      scale: {
        '120': '1.2',
        '130': '1.3',
        '140': '1.4',
      },
      screens: {
        'xs': '350px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}


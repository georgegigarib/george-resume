/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3d-light': '2px 2px 3px rgba(0, 0, 0, 0.1), -2px -2px 2px rgba(255, 255, 255, 0.7)',
        '3d-dark': '4px 4px 12px rgba(0, 0, 0, 0.4), -4px -4px 12px rgba(255, 255, 255, 0.1)',
        'hover-light': '6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        'hover-dark': '6px 6px 14px rgba(0, 0, 0, 0.6), -6px -6px -14px rgba(255, 255, 255, 0.2)'
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        reset: 'reset 0.5s ease-in-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        reset: {
          '0%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        app: {
          lightgreenblue: '#0F969C',
          greenblue: '#0D747A',
          box: '#072E33',
          grey: '#294D61',
          light: '#F5F5F4',
          dark: '#05161A',
          // Light mode box colors
          lightModeBoxes: {
            box1: '#C776D5FF', // Lila
            box2: '#F48FB1', // Rosa pastel
            box3: '#90CAF9', // Azul pastel
            box4: '#FFCC80', // Naranja suave
            box5: '#A5D6A7', // Verde menta
            box6: '#EF9A9A', // Rojo claro
            box7: '#81D4FA', // Azul cielo
            box8: '#C5E1A5', // Verde lima
            box9: '#FFF59D', // Amarillo pastel
            box10: '#B2EBF2', // Turquesa suave
            box11: '#FFE082', // Amarillo arena
            box12: '#E1BEE7', // Lila claro
            box13: '#4785A7FF', // Gris cálido
            box14: '#FFAB91', // Salmón suave
            box15: '#80EAD0FF', // Verde agua
            box16: '#93c5fd' // Azul cielo suave
          },
          // Dark mode box colors
          darkModeBoxes: {
            box1: '#801D9BFF', // Morado
            box2: '#C2185B', // Rosa intenso
            box3: '#1E88E5', // Azul intenso
            box4: '#FB8C00', // Naranja quemado
            box5: '#43A047', // Verde bosque
            box6: '#FF5252', // Rojo coral
            box7: '#00BFA5', // Turquesa
            box8: '#DCE775', // Verde lima suave
            box9: '#FFEB3B', // Amarillo brillante
            box10: '#00E676', // Verde neón
            box11: '#80CBC4', // Verde agua suave
            box12: '#B39DDB', // Lila claro
            box13: '#294D61', // Gris azulado
            box14: '#FFAB40', // Naranja pastel
            box15: '#5AC491FF', // Verde menta vibrante
            box16: '#1e3a8a' // Azul oscuro
          }
        },
        text: {
          light: {
            primary: '#212121',
            secondary: '#424242'
          },
          dark: {
            primary: '#F5F5F5',
            secondary: '#CFD8DC'
          }
        }
      },
      scale: {
        120: '1.2',
        130: '1.3',
        140: '1.4'
      },
      screens: {
        xs: '350px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      }
    }
  },
  plugins: []
}

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#4F6866',
          '50': '#C8D5D4',
          '100': '#B9CAC9',
          '200': '#9CB4B2',
          '300': '#7F9E9B',
          '400': '#658582',
          '500': '#4F6866',
          '600': '#394B4A',
          '700': '#232E2D',
          '800': '#0D1111',
          '900': '#000000'
        },
      },
      keyframes: {
        'fade-in': {
            '0%': {
                opacity: '0',
            },
            '100%': {
                opacity: '1',
            },
        },
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      'fade-in-up': {
        '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
        },
        '100%': {
            opacity: '1',
            transform: 'translateY(0)'
        },
    },
    'slide-in': {
      '0%': {
        transform: 'translateX(300px)'
      },
      '100%': {
        transform: 'translateX(0px)'
      }
    }
    },
    animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-in-down': 'fade-in-down 0.75s ease-out',
        'fade-in-up': 'fade-in-up 0.75s ease-out',
        'slide-in': 'slide-in 0.3s ease-out'
    },
      fontFamily: {
        'muli': ['Mulish']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

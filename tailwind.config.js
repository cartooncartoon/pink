module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        'fade-in-down': 'fade-in-down 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.3s ease-out',
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

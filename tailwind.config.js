module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sunglo': {
          DEFAULT: '#E57067',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FBEBEA',
          '300': '#F4C2BE',
          '400': '#EC9993',
          '500': '#E57067',
          '600': '#DE473B',
          '700': '#C42D22',
          '800': '#99231A',
          '900': '#6D1913'
        },
        'primary': {
          DEFAULT: '#089494',
          '50': '#89F9F9',
          '100': '#71F7F7',
          '200': '#40F5F5',
          '300': '#10F2F2',
          '400': '#0BC4C4',
          '500': '#089494',
          '600': '#056464',
          '700': '#033333',
          '800': '#000303',
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

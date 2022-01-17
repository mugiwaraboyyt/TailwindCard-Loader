module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        'shine':'shine 1.5s linear infinite',
      },
      keyframes:{
        shine:{
          'to':{ 'background-position-x' : '-200%' }
        },
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors:{
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'silver':'#ececec',
        'body':'#ddd',
        'card':'#fff',
        'loading':'#eee',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        fontSize:{
          'xs': '.75rem',
          // [fontSize, lineHeight]
          sm: ['14px', '20px'],
          'tiny': '.875rem',
          base: ['16px', '24px'],
          lg: ['20px', '28px'],
          xl: ['24px', '32px'],
          // [fontSize, { letterSpacing, lineHeight }]
          '2xl': ['24px', {
            letterSpacing: '-0.01em',
          }],
    
          '3xl': ['32px', {
            letterSpacing: '-0.02em',
            lineHeight: '40px',
          }],
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
          '7xl': '5rem',
        }
      }
    },
  },
  plugins: [],
}
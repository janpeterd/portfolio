//const { fontFamily } = require('tailwindcss/defaultTheme')
import fontFamily from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Inter', 'sans-serif'],
        tight: ['Reddit Sans Condensed', 'sans-serif']
      },
      colors: {
        primary: '#101233',
        secondary: '#FF7400'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary'),
                background: theme('colors.secondary'),
                fontWeight: 'bold'
              }
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ]
}

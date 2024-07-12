const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Source Sans Pro', ...fontFamily['sans']],
        elec: ['Electrolize', ...fontFamily['sans']],
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
                fontWeight: "bold",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}


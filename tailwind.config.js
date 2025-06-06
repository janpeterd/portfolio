// const { fontFamily } = require('tailwindcss/defaultTheme') // Old CJS import
import defaultTheme from 'tailwindcss/defaultTheme' // ESM import

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        tight: ['Reddit Sans Condensed', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // Brand Colors
        'brand-primary': '#101233',
        'brand-secondary': '#FF7400',

        // Semantic Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        glass: {
          DEFAULT: 'hsl(var(--glass-bg))',
          border: 'hsl(var(--glass-border-color))'
        },

        background: 'hsl(var(--background))',
        'background-alt': 'hsl(var(--background-alt))',
        'background-subtle': 'hsl(var(--background-subtle))',
        'background-hued': 'hsl(var(--background-hued))',

        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        contrast: {
          DEFAULT: 'hsl(var(--contrast-background))',
          foreground: 'hsl(var(--contrast-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Section specific backgrounds
        'section-primary': {
          // New
          DEFAULT: 'hsl(var(--section-primary-bg))',
          foreground: 'hsl(var(--section-primary-foreground))'
        },
        'section-secondary': {
          // New
          DEFAULT: 'hsl(var(--section-secondary-bg))',
          foreground: 'hsl(var(--section-secondary-foreground))'
        }
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          // For light mode (when 'prose' is active)
          css: {
            '--tw-prose-body': theme('colors.foreground'),
            '--tw-prose-headings': theme('colors.foreground'),
            '--tw-prose-lead': theme('colors.muted.foreground'),
            '--tw-prose-links': theme('colors.brand-secondary'),
            '--tw-prose-bold': theme('colors.foreground'),
            '--tw-prose-counters': theme('colors.muted.foreground'),
            '--tw-prose-bullets': theme('colors.muted.foreground'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.foreground'),
            '--tw-prose-quote-borders': theme('colors.border'),
            '--tw-prose-captions': theme('colors.muted.foreground'),
            '--tw-prose-code': theme('colors.brand-primary'),
            '--tw-prose-pre-code': theme('colors.brand-primary'),
            '--tw-prose-pre-bg': theme('colors.muted.DEFAULT'),
            '--tw-prose-th-borders': theme('colors.border'),
            '--tw-prose-td-borders': theme('colors.border'),
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s ease-in-out, text-decoration-color 0.2s ease-in-out',
              '&:hover': {
                color: theme('colors.brand-primary'),
                textDecoration: 'underline',
                textDecorationColor: 'var(--tw-prose-links)'
              }
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--tw-prose-headings)'
            },
            p: {
              color: 'var(--tw-prose-body)'
            }
          }
        },
        invert: {
          // For dark mode (when 'dark:prose-invert' is active)
          css: {
            '--tw-prose-body': theme('colors.foreground'),
            '--tw-prose-headings': theme('colors.foreground'),
            '--tw-prose-lead': theme('colors.muted.foreground'),
            '--tw-prose-links': theme('colors.brand-secondary'),
            '--tw-prose-bold': theme('colors.foreground'),
            '--tw-prose-counters': theme('colors.muted.foreground'),
            '--tw-prose-bullets': theme('colors.muted.foreground'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.foreground'),
            '--tw-prose-quote-borders': theme('colors.border'),
            '--tw-prose-captions': theme('colors.muted.foreground'),
            '--tw-prose-code': theme('colors.brand-secondary'),
            '--tw-prose-pre-code': theme('colors.brand-secondary'),
            '--tw-prose-pre-bg': theme('colors.muted.DEFAULT'),
            '--tw-prose-th-borders': theme('colors.border'),
            '--tw-prose-td-borders': theme('colors.border'),
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s ease-in-out, text-decoration-color 0.2s ease-in-out',
              '&:hover': {
                color: theme('colors.orange.400'),
                textDecoration: 'underline',
                textDecorationColor: 'var(--tw-prose-links)'
              }
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--tw-prose-headings)'
            },
            p: {
              color: 'var(--tw-prose-body)'
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

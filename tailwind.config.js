const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#F1F7F9',
            foreground: '#11181C',
            primary: {
              foreground: '#3A3A3A',
              DEFAULT: '#FFFFFF'
            }
          }
        },
        dark: {
          colors: {
            background: '#111111',
            foreground: '#ECEDEE',
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#1c1c25'
            }
          }
        }
      }
    })
  ]
}

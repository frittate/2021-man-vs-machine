module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    typography: {
      default: {
        css: {
          a: {
            color: '#fd5e1f',
            '&:hover': {
              color: '#ffffff'
            }
          }
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}

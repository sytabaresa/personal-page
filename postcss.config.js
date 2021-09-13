// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {
      "bubble": [
        "screen"
      ]
    },
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production') && { autoprefixer: {} },

    cssnano: {
      "preset": [
        "default",
        {
          "mergeRules": false
        }
      ]
    }
  },
}
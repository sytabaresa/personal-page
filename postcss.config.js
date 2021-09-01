// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
    plugins: {
      tailwindcss: {},
      ...(process.env.NODE_ENV === 'production') && {autoprefixer: {}},
      ...(process.env.NODE_ENV === 'production') && {cssnano: {}},
    },
  }
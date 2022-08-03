const withPWA = require('next-pwa')
const { i18n } = require('./next-i18next.config');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

let plugins = [
  [i18n],
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
]

options = {}
if (process.env.NODE_ENV === 'production') {
  plugins.push([withPWA])
  options = {
    ...options,
//    basePath: '/personal-page',
//    assetPrefix: '/personal-page'
  }
  swcMinify: true
}

module.exports = withPlugins(plugins, options);

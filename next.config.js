const withPWA = require('next-pwa')
const { i18n } = require('./next-i18next.config');
const withPlugins = require('next-compose-plugins');

let plugins = [
  [i18n],
]


if (process.env.NODE_ENV === 'production') {
  plugins.push([withPWA])
}

module.exports = withPlugins(plugins, {});

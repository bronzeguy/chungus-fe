// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')
let settings = {}
try {
  settings = require('./local.json')
  console.log('Using local dev server settings (/config/local.json):')
  console.log(JSON.stringify(settings, null, 2))
} catch (e) {
  console.log('Local dev server settings not found (/config/local.json)')
}

const target = settings.target || 'http://localhost:4000/'

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    target: target,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    settings,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target,
        changeOrigin: true,
        cookieDomainRewrite: 'localhost'
      },
      '/nodeinfo': {
        target,
        changeOrigin: true,
        cookieDomainRewrite: 'localhost'
      },
      '/socket': {
        target,
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        ws: true
      },
      '/oauth/revoke': {
        target,
        changeOrigin: true,
        cookieDomainRewrite: 'localhost'
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}

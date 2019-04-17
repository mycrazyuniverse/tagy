const pkg = require('./package')
const cheerio = require('cheerio')
var routes = require('./routes.json');

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: pkg.description
    }],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: '/dynamic.css'
      },
    ],
    script: [{
      src: '/coupon.js'
    }, ]
  },
  env: {
    apiUrl: 'http://dev-tagcity.pantheonsite.io',
    apiSlug: 'api'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],
  quiet: true,

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n', {
        locales: [{
          name: 'Nederlands',
          code: 'nl',
          iso: 'nl-BE',
          file: 'nl-be.js'
        }, {
          name: 'Français',
          code: 'fr',
          iso: 'fr-BE',
          file: 'fr-be.js'
        }],
        lazy: false,
        defaultLocale: 'nl'
      }
    ],
    '@nuxtjs/svg-sprite'
  ],
  render: {
    resourceHints: false
  },

  generate: {
    routes: routes,
    interval: 400,
  },

  hooks: {
    // This hook is called before rendering the html to the browser 'generate:page':
    'generate:page': page => {
      const doc = cheerio.load(page.html);
      doc('body script').remove();
      page.html = doc.html();
    }
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

const pkg = require('./package')
const cheerio = require('cheerio')

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
    }, {
      rel: 'stylesheet',
      href: 'https://i.icomoon.io/public/temp/836c5c69b3/TagCity/style-svg.css'
    }],
    script: [{
        src: './coupon.js'
      },
      {
        src: 'https://i.icomoon.io/public/temp/836c5c69b3/TagCity/svgxuse.js'
      }
    ]
  },
  env: {
    apiUrl: 'https://dev-tagcity.pantheonsite.io'
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
    ]
  ],
  render: {
    resourceHints: false
  },

  hooks: {
    // This hook is called before rendering the html to the browser 'generate:page':
    page() {
      const doc = cheerio.load(page.html);
      doc(`body script`).remove();
      doc(`body`).append('<script type="text/javascript src = "../client/client.js" > </script>');
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

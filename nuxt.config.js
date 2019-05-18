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
      },
      {
        name: 'msapplication-TileColor',
        content: '#2d89ef'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },

    ],
    link: [{
        rel: "manifest",
        href: "/site.webmanifest"
      },
      {
        rel: "mask-icon",
        sizes: '16x16',
        href: "/safari-pinned-tab.svg",
        color: "#f47f4f",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: '16x16',
        href: "/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: '32x32',
        href: "/favicon-32x32.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },

      {
        rel: 'stylesheet',
        href: '/dynamic.css'
      },
    ],
    script: [{
        src: '/coupon.min.js'
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-60427126-1',
        async: true
      }
    ]
  },
  env: {
    //TODO api
    apiUrl: 'https://api.tagcity.be',
    apiSlug: 'api',
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
    ],
    '@nuxtjs/svg-sprite',
    '@nuxtjs/sitemap'
  ],
  render: {
    resourceHints: false
  },
  gzip: true,
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://tagcity.be',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    routes: routes,
  },
  generate: {
    routes: routes,
    interval: 1500,
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
    extend(config, ctx) {},
    quiet: false,
  }
}

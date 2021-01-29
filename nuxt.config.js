
export default {
  ssr: false,
  components: true,
  server: {
    port: 8080,
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vue-content-placeholder.js',
    '@/plugins/http',
    '~/plugins/fireauth.js',
    '~/plugins/firejwt.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faEnvelope','faLock','faSignInAlt', 'faAngleDown', 'faGlobeAmericas', 'faBriefcase', 'faBrain', 'faBlog', 'faEnvelopeSquare', 'faDumbbell', 'faEdit'],
      brands: ['faGoogle', 'faLinkedin', 'faGithubSquare']
    }
  },

  styleResources: {
    // your settings here
    scss: ['~assets/scss/main.scss']
   },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/bulma',        // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxt/http',
    '@nuxtjs/robots',
    // '@nuxtjs/proxy',        // allow CORS
  ],

  robots: [
    {
      UserAgent: 'Googlebot',
      Disallow: () => '/api' // accepts function
    }
  ],

  router: {
    // middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    devtools: true,
    parallel: true,
    cache: true,
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}


export default {
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
    '@nuxtjs/axios',        // axios is required by @nuxtjs/auth
    '@nuxtjs/auth',         // https://auth.nuxtjs.org
    '@nuxt/http',
  ],

  serverMiddleware: {
    '/api': '~/api'
  },

  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/auth/signed-in',
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID
      }
    }
  },

  router: {
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
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

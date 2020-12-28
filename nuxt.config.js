
export default {
  ssr: false,
  components: true,
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
    // '@nuxtjs/axios',        // axios is required by @nuxtjs/auth
    // '@nuxtjs/auth',         // https://auth.nuxtjs.org
    '@nuxt/http',
    // '@nuxtjs/proxy',        // allow CORS
  ],

  // serverMiddleware: {
  //   '/api': '~/api'
  // },

  // http: {
  //   proxy: true 
  // },

  // proxy: {
  //   '/api': {
  //     target: process.env.API_EP,
  //     pathRewrite: {
  //       '^/api' : '/'
  //       },
  //     changeOrigin: true
  //     }
  // },

  // auth: {
  //   redirect: {
  //     login: '/', // redirect user when not connected
  //     callback: '/auth/signed-in',
  //     home: '/'
  //   },
  //   rewriteRedirects: true, 
  //   strategies: {
  //     local: false,
  //     auth0: {
  //       domain: process.env.AUTH0_DOMAIN,
  //       client_id: process.env.AUTH0_CLIENT_ID
  //     }
  //   }
  // },

//   firebase: {
//     // options
//     config: {
//       // REQUIRED: Official config for firebase.initializeApp(config):
//       apiKey: "AIzaSyDAwm6I7-Kh4DSeIj4k6IARinOV2RPgA8I",
//       authDomain: "cloudhired.firebaseapp.com",
//       databaseURL: "https://cloudhired.firebaseio.com",
//       projectId: "cloudhired",
//       storageBucket: "cloudhired.appspot.com",
//       messagingSenderId: "782780515351",
//       appId: "1:782780515351:web:8b141a7b7a4d045f650852",
//       measurementId: "G-2GJWHNQYMK"
//     },
//     services: {
//       firestore: true,
//       auth: {
//         // it is recommended to configure either a mutation or action but you can set both
//         initialize: {
//           onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
//           onAuthStateChangedAction: 'onAuthStateChangedAction',
//           subscribeManually: false
//         }
//       }
//     },
//  },

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

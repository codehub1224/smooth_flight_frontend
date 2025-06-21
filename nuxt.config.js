import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Smooth  Filght Support - SriLanka',
    title: 'Smooth  Filght Support SriLanka',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
    '@nuxtjs/dotenv',
    // '@nuxt/http', 
  ],

  // http: {
  //   baseURL: 'https://smooth.codehubdigital.com/send-email',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //   },
  // },

  serverMiddleware: [

    // // '~/server/contact.js',
    // '~/server/get_trip.js',
    // // '~/server/Quick_Quote.js',
    // // '~/server/apply_permit.js',

  ],
  fontawesome: {
    icons: {
      solid: true, // Include solid icons
      brands: true, // Include brand icons
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {

    baseURL: 'http://localhost:8000/',
    // baseURL: 'https://web-api.smoothflightsupport.lk/',

  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  generate: {
    fallback: true
  },

  // nuxt.config.js
  // router: {
  //   base: '/index'
  // },

  router: {
    base: '/',
    routes: [
      {
        path: '/',
        component: '~/pages/index.vue'
      },
      {
        path: '/company',
        component: '~/pages/company/overview.vue', // Default child route
        children: [
          {
            path: 'overview',
            component: '~/pages/company/overview.vue'
          },
          {
            path: 'careers',
            component: '~/pages/company/careers.vue'
          }
          // Add more company routes as needed
        ]
      },
      {
        path: '/services',
        component: '~/pages/services/groundHandling.vue', // Default child route
        children: [
          {
            path: 'groundHandling',
            component: '~/pages/services/groundHandling.vue'
          },
          {
            path: 'permits',
            component: '~/pages/services/permits.vue'
          }
          // Add more services routes as needed
        ]
      },
      {
        path: '/eServices',
        component: '~/pages/eServices/applyPermits.vue', // Default child route
        children: [
          {
            path: 'applyPermits',
            component: '~/pages/eServices/applyPermits.vue'
          },
          {
            path: 'createGeneralDeclaration',
            component: '~/pages/eServices/createGeneralDeclaration.vue'
          }
          // Add more eServices routes as needed
        ]
      },
      {
        path: '/blog',
        component: '~/pages/blog.vue'
      },
      {
        path: '/contactUs',
        component: '~/pages/contactUs.vue'
      }
    ]
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: 'static'
}

import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Smooth Flight Support - Aviation Services Sri Lanka',
    title: 'Smooth Flight Support - Premier Aviation Services in Sri Lanka',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Smooth Flight Support provides comprehensive aviation services in Sri Lanka including permits, ground handling, aircraft fueling, catering, crew services, and HOTAC. ISO 9001:2015 certified FBO company.' 
      },
      { 
        hid: 'keywords', 
        name: 'keywords', 
        content: 'aviation services sri lanka, flight support, ground handling, aircraft permits, fueling services, catering, crew services, HOTAC, FBO sri lanka, smooth flight support' 
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Smooth Flight Support (Pvt) Ltd' },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph / Facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://smoothflightsupport.lk' },
      { hid: 'og:title', property: 'og:title', content: 'Smooth Flight Support - Premier Aviation Services in Sri Lanka' },
      { hid: 'og:description', property: 'og:description', content: 'ISO 9001:2015 certified aviation services company providing permits, ground handling, fueling, catering, and crew services in Sri Lanka.' },
      { hid: 'og:image', property: 'og:image', content: 'https://smoothflightsupport.lk/Header/smoothLogo.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Smooth Flight Support' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', property: 'twitter:url', content: 'https://smoothflightsupport.lk' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Smooth Flight Support - Premier Aviation Services in Sri Lanka' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'ISO 9001:2015 certified aviation services company providing permits, ground handling, fueling, catering, and crew services in Sri Lanka.' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://smoothflightsupport.lk/Header/smoothLogo.png' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@flight_smooth' },
      
      // Additional SEO meta tags
      { name: 'theme-color', content: '#183862' },
      { name: 'msapplication-TileColor', content: '#183862' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://smoothflightsupport.lk' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      // Preconnect to external domains for performance
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Smooth Flight Support (Pvt) Ltd',
          url: 'https://smoothflightsupport.lk',
          logo: 'https://smoothflightsupport.lk/Header/smoothLogo.png',
          description: 'ISO 9001:2015 certified aviation services company providing comprehensive flight support services in Sri Lanka.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'C.R.I.Road, Lunuwila',
            addressCountry: 'LK',
            addressRegion: 'North Western Province'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+94-314354400',
            contactType: 'customer service',
            availableLanguage: 'English'
          },
          sameAs: [
            'https://www.facebook.com/SmoothflightCmb',
            'https://twitter.com/flight_smooth',
            'https://www.instagram.com/smoothflightsupport/',
            'https://www.linkedin.com/company/smooth-flight-support-pvt-ltd'
          ],
          foundingDate: '2019',
          numberOfEmployees: '10-50',
          industry: 'Aviation Services',
          serviceArea: {
            '@type': 'Country',
            name: 'Sri Lanka'
          }
        }
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
  ],

  // Sitemap configuration
  sitemap: {
    hostname: 'https://smoothflightsupport.lk',
    gzip: true,
    routes: [
      '/',
      '/company/overview',
      '/company/careers',
      '/services/allServices',
      '/services/permitsA',
      '/services/groundHandling',
      '/services/aircraftFueling',
      '/services/catering',
      '/services/crewpassengerservice',
      '/services/hotelReservationTransportation',
      '/apermit/applypermit',
      '/eServices/getTripCostEstimate',
      '/contactUs',
      '/privacypolicy'
    ]
  },

  // Robots.txt configuration
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://smoothflightsupport.lk/sitemap.xml'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NODE_ENV === 'production' 
      ? 'https://web-api.smoothflightsupport.lk/' 
      : 'http://localhost:8000/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#183862',
          secondary: '#88c607',
          accent: '#9dd409',
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
          success: '#10b981',
        },
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

  // Generate configuration for static site
  generate: {
    fallback: true,
    routes: [
      '/',
      '/company/overview',
      '/company/careers',
      '/services/allServices',
      '/services/permitsA',
      '/services/groundHandling',
      '/services/aircraftFueling',
      '/services/catering',
      '/services/crewpassengerservice',
      '/services/hotelReservationTransportation',
      '/apermit/applypermit',
      '/eServices/getTripCostEstimate',
      '/contactUs',
      '/privacypolicy'
    ]
  },

  // Router configuration
  router: {
    base: '/',
    extendRoutes(routes, resolve) {
      // Add custom routes or modify existing ones if needed
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Optimize build for production
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    // Babel configuration for better browser support
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },

  // Performance optimizations
  render: {
    // Enable HTTP/2 push for better performance
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles
          .filter(f => f.asType === 'script' && f.file === 'runtime.js')
          .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    },
    // Compress responses
    compressor: { threshold: 0 },
    // Resource hints
    resourceHints: true,
    // Enable etag
    etag: {
      weak: true
    }
  },

  // Loading configuration
  loading: {
    color: '#88c607',
    height: '3px',
    continuous: true
  },

  // Target for deployment
  target: 'static',

  // Server configuration for development
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  // Environment variables
  env: {
    baseUrl: process.env.BASE_URL || 'https://smoothflightsupport.lk'
  },

  // PWA configuration (if you want to add PWA features later)
  pwa: {
    meta: {
      theme_color: '#183862'
    },
    manifest: {
      name: 'Smooth Flight Support',
      short_name: 'SFS',
      description: 'Premier Aviation Services in Sri Lanka',
      background_color: '#ffffff',
      theme_color: '#183862'
    }
  }
}
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  router: {
    prefetchLinks: false,
  },
  head: {
    title: 'nuxtApp',
    script: [],
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Movie Store' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  generate: {
    cache: {
      ignore: [
        // When something changed in the docs folder, do not re-build via webpack
        'docs',
      ],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/ant-design-vue',
    { src: '@/plugins/progressive-image', ssr: false },
    { src: '~/plugins/persistedState.js', ssr: false },
    { src: '~/plugins/browser-detect', ssr: false },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'vue-browser-detect-plugin/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth', '@nuxtjs/proxy', 'nuxt-ssr-cache'],

  // Build Configuration: https://go.nuxtjs.dev/config-build

  server: {
    port: process.env.PORT || 4000,
    host: '0.0.0.0',
    timing: false,
  },

  serverMiddleware:
    process.env.NODE_ENV === 'production' &&
    process.env.DEPLOY_ENVIRONMENT !== 'heroku'
      ? {}
      : {
          '/api': '~/api',
        },

  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/',
    },
    strategies: {
      local: false,
      auth0: {
        domain: 'dev-l-glzef7.us.auth0.com',
        client_id: 'EtRB3aMxyaoBGdAOChBNJKUSzSgUS8MQ',
      },
    },
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/analytics/': {
      target:
        'https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io/movies-store-app/',
      pathRewrite: { '^/analytics/': '' },
      changeOrigin: true,
    },
  },
  publicRuntimeConfig: {
    appUrl: process.env.APPBASE_URL,
    appName: process.env.APPBASE_APP_NAME,
    appCredentials: process.env.APPBASE_APP_CREDENTIALS,
    stripeKey: process.env.STRIPE_KEY,
  },
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },

  pwa: {
    manifest: {
      name: 'Movie Store',
      lang: 'en',
      useWebmanifestExtension: false,
    },
    meta: {
      theme_color: '#17181B',
    },
    workbox: {},
  },
};

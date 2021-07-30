export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtApp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/ant-design-vue',
    { src: '~/plugins/persistedState.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    proxy: true,
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
        domain: process.env.AUTH_DOMAIN,
        client_id: process.env.AUTH_CLIENT_ID,
      },
    },
  },
  publicRuntimeConfig: {
    appUrl: process.env.APPBASE_URL,
    appName: process.env.APPBASE_APP_NAME,
    appCredentials: process.env.APPBASE_APP_CREDENTIALS,
    stripeKey: process.env.STRIPE_KEY,
  },
}

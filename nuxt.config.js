export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtApp',
    script: [
      {
        src: 'https://js.stripe.com/v3'
      }
    ],
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
    { src: '@/plugins/progressive-image', ssr: false },
    { src: '~/plugins/persistedState.js', ssr: false },
    { src: '~/plugins/vue-stripe.js', ssr: false },
    { src: '~/plugins/browser-detect', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'vue-browser-detect-plugin/nuxt','@nuxtjs/device', '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     '@nuxtjs/axios',
     '@nuxtjs/auth',
     '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: process.env.PORT || 4000,
    host: '0.0.0.0',
    timing: false
  },

  serverMiddleware: {
    '/api': '~/api'
  },
  
  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/'
    },
    strategies: {
      local: false,
      auth0: {
        domain: 'dev-l-glzef7.us.auth0.com',
        client_id: 'EtRB3aMxyaoBGdAOChBNJKUSzSgUS8MQ'
      }
    }
  },
  axios: {
    proxy: true
  },
  proxy: {
    '/analytics/': { target: 'https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io/movies-store-app/', pathRewrite: {'^/analytics/': ''}, changeOrigin: true }
  },
  pwa: {
    manifest: {
      name: 'Movie Store',
      lang: 'en',
      useWebmanifestExtension: false
    }
  }

}

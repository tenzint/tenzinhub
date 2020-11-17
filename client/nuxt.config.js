import colors from 'vuetify/es5/util/colors';

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)

  head: {
    titleTemplate: '%s',
    title: 'Tenzin Hub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // heymeta socials below
      { name: 'title', content: 'Tenzin Hub' },
      {
        name: 'description',
        content:
          'A personal API full-stack web app project that predicts TTC transit in Toronto and weather in every city',
      },
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://tenzint.github.io/tenzinhub/' },
      { property: 'og:title', content: 'Tenzin Hub' },
      {
        property: 'og:description',
        content:
          'A personal API full-stack web app project that predicts TTC transit in Toronto and weather in every city',
      },
      { property: 'og:image', content: '/tt.ico' },

      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      {
        property: 'twitter:url',
        content: 'https://tenzint.github.io/tenzinhub/',
      },
      { property: 'twitter:title', content: 'Tenzin Hub' },
      {
        property: 'twitter:description',
        content:
          'A personal API full-stack web app project that predicts TTC transit in Toronto and weather in every city',
      },
      { property: 'twitter:image', content: '/tt.ico' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/tt.ico' }],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/http'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxt/http',
    '@nuxtjs/proxy',
  ],

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  http: {
    // proxyHeaders: false
    proxy: true, // this is for CORS. Check proxy for real URI
    host: 'https://tenzinhub-api.glitch.me/',
    prefix: '/api',
    baseURL: 'https://tenzinhub-api.glitch.me/',
  },

  proxy: {
    '/api/': {
      target: 'https://tenzinhub-api.glitch.me/api',
      pathRewrite: {
        '^/api/': '',
      },
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          background: '#00a86b',
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          background: '#d0f0c0',
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'UglifyJsPlugin'
      );
    },
  },

  target: 'static',
  router: {
    base: '/tenzinhub/',
  },
  server: {
    port: 8080,
  },
};

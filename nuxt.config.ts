import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo', '@pinia/nuxt'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
      },
    },
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-07-22',

  vite: {
    assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg'],
    build: {
      assetsInlineLimit: 4096,
    },
    server: {
      fs: {
        strict: false
      }
    }
  },

  ssr: true,

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:4000'
    }
  },

  build: {
    transpile: ['@apollo/client', '@vue/apollo-composable']
  },

  debug: process.env.NODE_ENV !== 'production',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
})
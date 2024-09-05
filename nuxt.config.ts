import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo', '@pinia/nuxt'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
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

  // Add this section
  vite: {
    assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg'],
  },
})
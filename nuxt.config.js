// import axios from 'axios';

import generateRoutes from './helpers/generateRoutes';

export default {
  target: 'static',

  head: {
    title: 'Hayat Plakater',
    htmlAttrs: {
      lang: 'da',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hos Hayat Plakater finder du et udvalg af arabisk kalligrafi plakater med stilfulde rammer. Vi har plakater i forskellige kategorier, uanset stil og smag, kan du finde noget at resonere med',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/438b659a03.js',
      },
      {
        src: 'https://js.stripe.com/v3',
      },
    ],
  },

  plugins: [{ src: '@/plugins/vue-awesome-swiper', mode: 'client' }],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/google-analytics'],

  eslint: {
    fix: true,
  },

  modules: ['@nuxtjs/strapi', '@nuxtjs/sitemap'],

  strapi: {
    url: process.env.API_URL || 'http://localhost:1337/',
    entities: ['products', 'categories'],
  },

  env: {
    storeUrl: process.env.API_URL || 'http://localhost:1337/',
    STRIPE_PK:
      'pk_test_51ImhvGGzZhtJza9VidZIydizkNx35J8AtdTfxP7ug5lAJnZhuegGEcs95mgRzpMVi5z6EsKYfNjVSxBzLblYsViv00z9CxmUFY',
  },

  generate: {
    routes() {
      return generateRoutes();
    },
  },

  sitemap: {
    hostname: 'https://hayatplakater.dk',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
    gzip: true,
    routes() {
      return generateRoutes();
    },
  },

  // Google Analytics
  googleAnalytics: {
    id: 'G-NDEQ9S0PPD',
  },

  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
};

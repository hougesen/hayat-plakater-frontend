import axios from 'axios';

export default {
  target: 'static',

  head: {
    title: 'hayat-plakater-frontend',
    htmlAttrs: {
      lang: 'da',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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

  css: [],

  plugins: [{ src: '@/plugins/vue-awesome-swiper', mode: 'client' }],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  eslint: {
    fix: true,
  },

  modules: ['@nuxtjs/strapi'],

  strapi: {
    url: process.env.API_URL || 'http://localhost:1337/',
    entities: ['products', 'categories'],
  },

  env: {
    // storeUrl: process.env.STORE_URL || "http://localhost:1337"
  },

  generate: {
    async routes() {
      const baseUrl = process.env.API_URL || 'http://localhost:1337/';

      let routes = ['/', 'checkout'];

      let products = await axios
        .get(`${baseUrl}products`)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err);
        });

      for (const product of products) {
        routes.push(`/products/${product.slug}`);
      }

      let categories = await axios
        .get(`${baseUrl}categories`)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err);
        });

      for (const category of categories) {
        routes.push(`/categories/${category.slug}`);
      }

      return routes;
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
};

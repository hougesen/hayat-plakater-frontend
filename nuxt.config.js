export default {
  target: "static",

  head: {
    title: "hayat-plakater-frontend",
    htmlAttrs: {
      lang: "da"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/438b659a03.js"
      }
    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/strapi"],

  strapi: {
    url: process.env.API_URL || "http://localhost:1337",
    entities: ["products", "categories"]
  },

  env: {
    // storeUrl: process.env.STORE_URL || "http://localhost:1337"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};

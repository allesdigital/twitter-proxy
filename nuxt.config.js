export default {
  server: {
    host: "0.0.0.0",
    port: 3000,
  },

  head: {
    title: null,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  components: true,

  modules: ["nuxt-buefy", "@nuxtjs/axios", "@nuxtjs/proxy"],

  axios: {
    baseURL: "/",
  },

  proxy: {
    "/media": {
      target: "https://pbs.twimg.com",
      changeOrigin: true,
    },
    "/profile_images": {
      target: "https://pbs.twimg.com",
      changeOrigin: true,
    },
  },
};

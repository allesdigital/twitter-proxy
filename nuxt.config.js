export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        clientPort: 3701,
      },
    },
  },
  css: ["@/node_modules/bulma/css/bulma.min.css"],
  modules: ["nuxt-proxy"],
  proxy: {
    options: {
      target: "https://pbs.twimg.com",
      pathFilter: ["/media", "/profile_images"],
      changeOrigin: true,
    },
  },
});

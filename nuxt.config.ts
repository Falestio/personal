// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-phosphor-icons",
    "@nuxtjs/color-mode",
    "nuxt-gtag",
    "@nuxtjs/seo",
  ],

  site: {
    url: "https://falestio.my.id",
    name: "Falestio personal website",
  },

  ssr: true,

  gtag: {
    id: "G-3QHM1F5N2M",
  },

  content: {
    highlight: {
      theme: "tokyo-night",
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components:[
    {
      path:'~/components',
      pathPrefix: false,
    },
  ],
  googleFonts: {
    families: {
      Roboto: [100, 400, 700], // Incluir pesos 100 (light), 400 (regular) y 700 (bold)
      'DM+Mono': [400]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    "vue3-carousel-nuxt"
  ],
  css: ["~/main.css"],
  build: {
    transpile: ['swiper']
  }
})
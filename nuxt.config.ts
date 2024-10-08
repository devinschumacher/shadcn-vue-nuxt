export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component

    prefix: '',
    /**
     * Directory that the component lives in.
     * @default './components/ui'
     */
    componentDir: './components/ui'
  },

  compatibilityDate: '2024-10-05'
})

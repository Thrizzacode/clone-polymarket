// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '88Market',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@vee-validate/nuxt',
    '@nuxtjs/i18n',
  ],
  css: ['~/assets/css/main.scss'],
  unocss: {
    preflight: true,
  },
  i18n: {
    // vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en-US', iso: 'en-US', file: 'en.json' },
      { code: 'zh-CN', iso: 'zh-CN', file: 'zh-CN.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      redirectOn: 'root',
    },
    strategy: 'no_prefix',
  },
});

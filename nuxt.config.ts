import { isProdMode } from "./src/config/app";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: !isProdMode,
  srcDir: "src",
  css: [
    "~/assets/css/main.css",
    "~/assets/css/resets.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: ["@nuxtjs/i18n"],
  plugins: [{ src: "./src/plugins/fontAwesome.ts" }],
  i18n: {
    defaultLocale: "en",
    langDir: "config/locales",
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    lazy: true,
    locales: [
      { code: "en", file: "en.js" },
      { code: "de", file: "de.js" },
    ],
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=3, user-scalable=yes",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          href: "/public/favicon.ico",
        },
      ],
    },
  },
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
});

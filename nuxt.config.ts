import { isProdMode } from "./src/config/app";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: !isProdMode,
  srcDir: "src",
  css: ["~/assets/css/main.css", "~/assets/css/resets.css"],
  modules: ["@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    langDir: "config/locales",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
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
});

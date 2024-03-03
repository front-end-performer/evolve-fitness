import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faUser,
  faBars,
  faXmark,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faVuejs,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// This is important, we are going to let Nuxt not worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faEnvelope,
  faFacebook,
  faUser,
  faVuejs,
  faInstagram,
  faYoutube,
  faPhoneAlt,
  faEnvelope,
  faBars,
  faXmark,
  faDumbbell,
  faClock,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});

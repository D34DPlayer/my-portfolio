import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

import en from "vuetify/es5/locale/en";
import fr from "vuetify/es5/locale/fr";

export default new Vuetify({
  lang: {
    locales: { en, fr },
    current: "en",
  },
  icons: {
    iconfont: "mdiSvg",
  },
  theme: {
    dark: true,
  },
});

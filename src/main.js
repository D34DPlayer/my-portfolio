import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueMeta from "vue-meta";
import VueScrollTo from "vue-scrollto";

Vue.config.productionTip = false;

Vue.use(VueMeta);
Vue.use(VueScrollTo);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  mounted() {
    // Tell the prerenderer we are done
    document.dispatchEvent(new Event("render-event"));
  },
}).$mount("#app");

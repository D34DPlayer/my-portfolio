<template>
  <v-app>
    <navbar />

    <v-main v-if="show">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  data: () => ({ show: true }),
  metaInfo() {
    const path = this.$route.path;
    const image = require("@/assets/me.jpg");
    const domain = process.env.VUE_APP_DOMAIN_NAME || "www.d34d.fun";

    return {
      title: "Portfolio",
      titleTemplate: "%s | Carlos Ruiz Herrera",
      meta: [
        {
          vmid: "title",
          property: "og:title",
          content: "Portfolio",
        },
        {
          property: "og:site_name",
          content: "Carlos Ruiz Herrera",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: `https://${domain}${image}`,
        },
        {
          property: "og:url",
          content: `https://${domain}${path}`,
        },
        {
          property: "og:description",
          content:
            "Motivated student in information technology, I have practical experience in backend and frontend development acquired during various projects and trainings.",
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        {
          name: "description",
          content:
            "Motivated student in information technology, I have practical experience in backend and frontend development acquired during various projects and trainings.",
        },
      ],
    };
  },
};
</script>

<style></style>

<template>
  <div>
    <Header />
    <ContentFR v-if="language === 'fr'" />
    <ContentEN v-else />
  </div>
</template>

<script>
import ContentEN from "@/components/ContentEN";
import ContentFR from "@/components/ContentFR";
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    ContentEN,
    ContentFR,
    Header,
  },
  computed: {
    language() {
      return this.$vuetify.lang;
    },
  },
};
</script>

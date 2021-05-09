<template>
  <v-img :src="cover" aspect-ratio="3" :gradient="gradient">
    <v-row
      align="end"
      justify="end"
      class="fill-height text-right pa-md-5 pa-3 mx-0 flex-column"
    >
      <span class="text-h2">Carlos Ruiz Herrera</span>
      <h1 class="text-h1 colored">{{ header }}</h1>
    </v-row>
  </v-img>
</template>

<script>
import darkCover from "@/assets/dark.jpg";
import lightCover from "@/assets/light.jpg";

export default {
  name: "Header",
  computed: {
    cover() {
      return this.$vuetify.theme.dark ? darkCover : lightCover;
    },
    gradient() {
      let level = this.$vuetify.theme.dark ? 18 : 255;
      return `to bottom, rgba(0,0,0,0), rgb(${level},${level},${level})`;
    },
    header() {
      return this.$vuetify.lang === "fr"
        ? "Développeur Full-Stack"
        : "Full-Stack Developer";
    },
  },
};
</script>

<style scoped>
.colored {
  color: #e56202;
}
</style>

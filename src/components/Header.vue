<template>
<v-img :src="cover" cover aspect-ratio="3" :gradient="gradient">
  <v-row
    align="end"
    justify="end"
    class="fill-height text-right pa-md-5 pa-3 mx-0 flex-column"
  >
    <span class="text-lg-h2 text-md-h3 text-h5">Carlos Ruiz Herrera</span>
    <h1 class="text-lg-h1 text-md-h2 text-h4 colored">Full Stack Developer</h1>
  </v-row>
</v-img>
</template>

<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue';

import darkCover from "@/assets/dark.jpg";
import lightCover from "@/assets/light.jpg";

type Theme = "dark" | "light"

const theme = inject("theme", ref("dark") as Ref<Theme>)

const cover = computed(() => {
  return theme.value == "light" ? lightCover : darkCover
})

const gradient = computed(() => {
  let level = theme.value == 'light' ? 255 : 18;
  return `to bottom, rgba(0,0,0,0), rgb(${level},${level},${level})`;
})
</script>

<style scoped>
.colored {
  color: #e56202;
}
</style>
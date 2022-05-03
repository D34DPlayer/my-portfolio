<template>
  <v-app :theme="theme">
    <drawer :theme="theme" @theme="theme = $event" />
    <v-main style="padding-left: 71px;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import Drawer from './components/Drawer.vue'

const theme = ref("dark")

provide("theme", theme)
</script>

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
};
</script>

<style></style>

<template>
  <v-navigation-drawer v-model="drawer" expand-on-hover app stateless>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img :src="me"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>Carlos Ruiz Herrera</v-list-item-title>
    </v-list-item>

    <v-divider />

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="anchor(item.id)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-if="language === 'fr'">
            {{ item.titleFr }}
          </v-list-item-title>
          <v-list-item-title v-else>
            {{ item.titleEn }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template slot="append">
      <v-divider />

      <v-list-item class="px-2" @click="toggleTheme">
        <v-list-item-avatar>
          <v-icon>{{ mdiLightbulb }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-title v-if="language === 'fr'">
          Changer le thème
        </v-list-item-title>
        <v-list-item-title v-else> Change the theme</v-list-item-title>
      </v-list-item>

      <v-list-item
        class="px-2"
        v-if="language === 'fr'"
        @click="changeLanguage('en')"
      >
        <v-list-item-avatar> EN</v-list-item-avatar>
        <v-list-item-title> Change the language</v-list-item-title>
      </v-list-item>
      <v-list-item class="px-2" v-else @click="changeLanguage('fr')">
        <v-list-item-avatar> FR</v-list-item-avatar>
        <v-list-item-title> Changer la langue</v-list-item-title>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {
  mdiAccount,
  mdiSchool,
  mdiHammerWrench,
  mdiCertificate,
  mdiSoccer,
  mdiHumanHandsup,
  mdiLightbulb,
  mdiEarth,
} from "@mdi/js";
import me from "../assets/me.jpg";

export default {
  name: "NavBar",
  props: ["visible"],
  data: () => ({
    drawer: true,
    items: [
      {
        titleEn: "About me",
        titleFr: "À propos de moi",
        icon: mdiAccount,
        id: "#about",
      },
      {
        titleEn: "Education",
        titleFr: "Education",
        icon: mdiSchool,
        id: "#education",
      },
      {
        titleEn: "Languages",
        titleFr: "Langues",
        icon: mdiEarth,
        id: "#langs",
      },
      {
        titleEn: "Projects",
        titleFr: "Projets",
        icon: mdiHammerWrench,
        id: "#projects",
      },
      {
        titleEn: "Certifications",
        titleFr: "Certificats",
        icon: mdiCertificate,
        id: "#certs",
      },
      {
        titleEn: "Activities",
        titleFr: "Activités",
        icon: mdiHumanHandsup,
        id: "#activities",
      },
      {
        titleEn: "Hobbies",
        titleFr: "Hobbies",
        icon: mdiSoccer,
        id: "#hobbies",
      },
    ],
    me,
    mdiLightbulb,
  }),
  computed: {
    language() {
      return this.$vuetify.lang;
    },
  },
  methods: {
    changeLanguage(lang) {
      this.$vuetify.lang = lang;
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    async anchor(hash) {
      if (this.$route.hash !== hash) {
        await this.$router.push(`/${hash}`);
      }
      if (this.$route.hash && this.$route.hash.length > 1) {
        this.$scrollTo(this.$route.hash, {
          container: "body",
          duration: 700,
          easing: "ease",
          offset: -10,
          cancelable: true,
        });
      }
    },
  },
  mounted() {
    this.anchor(this.$route.hash);
  },
};
</script>

<style scoped lang="scss">
.selected {
}
</style>

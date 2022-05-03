<template>
  <v-navigation-drawer width="300" permanent rail expand-on-hover>
    <v-list>
      <v-list-item prepend-avatar="/me.jpg" title="Carlos Ruiz Herrera" />
    </v-list>
    <v-divider />
    <v-list>
      <v-list-item v-for="item in items" :key="item.id"
        class="px-5"
        :prepend-icon="item.icon"
        :title="item.titleEn"
        @click="anchor(item.id)"
      />
    </v-list>

    <template #append>
      <v-divider />
      <v-list>
        <v-list-item
          class="px-5"
          :prepend-icon="mdiLightbulb"
          title="Change the theme"
          @click="toggleTheme()"
        />
      </v-list>
    </template>
    <!-- TODO Add language toggler -->
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {
  mdiAccount,
  mdiSchool,
  mdiHammerWrench,
  mdiCertificate,
  //mdiSoccer,
  mdiHumanHandsup,
  mdiEarth,
  mdiLightbulb,
  mdiBagSuitcase,
} from "@mdi/js"

import { useRouter } from "vue-router"

const router = useRouter()

// TODO use vuetify lang composable

function anchor(id: string) {
  router.push({
    path: '',
    hash: id,
  })
}

const emits = defineEmits(["theme"])
const props = defineProps({
  theme: String,
})

function toggleTheme() {
  console.log(props.theme)
  emits("theme", props.theme == "dark" ? "light" : "dark")
}

const items = [
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
        titleEn: "Work Experience",
        titleFr: "Expérience professionnelle",
        icon: mdiBagSuitcase,
        id: "#work",
      },
      {
        titleEn: "Projects",
        titleFr: "Projets",
        icon: mdiHammerWrench,
        id: "#projects",
      },
      {
        titleEn: "Activities",
        titleFr: "Activités",
        icon: mdiHumanHandsup,
        id: "#activities",
      },
      {
        titleEn: "Certifications",
        titleFr: "Certificats",
        icon: mdiCertificate,
        id: "#certs",
      },
      /*{
        titleEn: "Hobbies",
        titleFr: "Hobbies",
        icon: mdiSoccer,
        id: "#hobbies",
      },*/
    ]
</script>
<template>
  <v-container>
    <h1 class="pb-4">Summary</h1>
    <v-table>
      <thead>
        <tr>
          <th class="text-center">Theme</th>
          <th class="text-center">Description</th>
          <th class="text-center">Total hours</th>
          <th class="text-center">Accepted hours</th>
          <th class="text-center">Evidence</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td class="text-center">{{ item.theme }}</td>
          <td class="text-center">{{ item.desc }}</td>
          <td class="text-center">{{ item.totalHours }}</td>
          <td class="text-center">{{ item.acceptedHours }}</td>
          <td class="text-center">
            <a :href="item.proof" target="_blank">Link</a>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
const items = [
  {
    theme: "Languages",
    desc: "Chinese A1",
    totalHours: 108,
    acceptedHours: 10,
    proof: "/chinois.jpg",
  },
  {
    theme: "Data Analysis",
    desc: "Probabilities",
    totalHours: 12,
    acceptedHours: 10,
    proof: "/data_1.pdf",
  },
  {
    theme: "Data Analysis",
    desc: "Data description and filtering",
    totalHours: 15,
    acceptedHours: 0,
    proof: "/data_2.pdf",
  },
  {
    theme: "Sys. Admin",
    desc: "Raspberry Pi services at home",
    totalHours: 8,
    acceptedHours: 8,
    proof: "https://github.com/D34DPlayer/CRHPi",
  },
  {
    theme: "Hackathon",
    desc: "Hacktoberfest 2020",
    totalHours: 8,
    acceptedHours: 8,
    proof: "/Hacktoberfest.pdf",
  },
  {
    theme: "Hackathon",
    desc: "Hacktoberfest 2021",
    totalHours: 8,
    acceptedHours: 2,
    proof: "/Hacktoberfest2.pdf",
  },
  {
    theme: "Cloud development",
    desc: "Digital Ocean Kubernetes Challenge",
    totalHours: 6,
    acceptedHours: 6,
    proof: "https://github.com/d34dplayer/kubernetes-challenge",
  },
  {
    theme: "Cyber Security",
    desc: "Cyber Security Challenge Belgium",
    totalHours: 15,
    acceptedHours: 10,
    proof: "/cscbe.pdf",
  },
  {
    theme: "Web development",
    desc: "SASS",
    totalHours: 15,
    acceptedHours: 10,
    proof: "/web_2.pdf",
  },
  {
    theme: "Web development",
    desc: "REST APIs",
    totalHours: 6,
    acceptedHours: 0,
    proof: "/web_3.pdf",
  },
  {
    theme: "Web development",
    desc: "Django",
    totalHours: 12,
    acceptedHours: 0,
    proof: "/python_3.pdf",
  },
  {
    theme: "Conferences",
    desc: "VueConf 2021",
    totalHours: 4,
    acceptedHours: 4,
    proof: "/vueconf.jpg",
  },
  {
    theme: "Conferences",
    desc: "Digital Ocean Deploy 2021",
    totalHours: 8,
    acceptedHours: 6,
    proof: "/dodeploy.jpg",
  },
  {
    theme: "Conferences",
    desc: "CloudSec 2021",
    totalHours: 12,
    acceptedHours: 0,
    proof: "/cloudsec.jpg",
  },
];
</script>

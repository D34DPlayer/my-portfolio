<template>
  <v-container>
    <h2 id="about" class="text-lg-h2 text-md-h3 text-h5 pb-5">
      <router-link to="/#about">About me</router-link>
    </h2>
    <v-row align="center" class="pb-10 px-5 text-body-1 about">
      <v-col cols="12" lg="6" class="px-16 pb-8 text-justify">
        Motivated student in <span>information technology</span>, I have
        practical experience in <span>backend</span> and
        <span>frontend</span> development acquired during various
        <span>projects</span> and <span>trainings</span>.
      </v-col>
      <v-row cols="12" lg="6" class="justify-center">
        <v-img
          lazy-src="/me.jpg"
          :src="meBetter"
          max-width="10rem"
          class="pfp"
        />
        <div class="d-flex flex-column justify-center text-body-1 about-items">
          <div><span>Location:</span> Belgium</div>
          <div>
            <span>Email:</span>
            <a href="mailto:carlosemilianorh@hotmail.com"
              >carlosemilianorh@hotmail.com</a
            >
          </div>
          <div><span>Phone:</span> (+32)483 29 23 31</div>
          <div class="pb-2">
            <a
              href="https://www.linkedin.com/in/carlos-ruiz-herrera/"
              target="_blank"
              >LinkedIn</a
            >
          </div>
          <v-btn href="/CV_EN.pdf" target="_blank">CV</v-btn>
        </div>
      </v-row>
    </v-row>

    <h2 id="education" class="text-lg-h2 text-md-h3 text-h5 pb-5">
      <router-link to="/#education">Education</router-link>
    </h2>
    <v-timeline :side="display.smAndDown.value ? 'end': null">
      <v-timeline-item dot-color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            2021-2022
          </span>
        </template>
        <div class="mb-8">
          <div class="text-h6">Software Development</div>
          <div>Unicorn University, Prague</div>
        </div>
      </v-timeline-item>
      <v-timeline-item dot-color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            2019-...
          </span>
        </template>
        <div class="mb-8">
          <div class="text-h6">Information technology</div>
          <div>EPHEC, LLN</div>
        </div>
      </v-timeline-item>
      <v-timeline-item dot-color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            2018-2019
          </span>
        </template>
        <div class="mb-8">
          <div class="text-h6">Physics</div>
          <div>ULB, Brussels</div>
        </div>
      </v-timeline-item>
      <v-timeline-item dot-color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            2014-2018
          </span>
        </template>
        <div class="mb-8">
          <div class="text-h6">Mathematics - Science</div>
          <div>ISJB, Wavre</div>
        </div>
      </v-timeline-item>
    </v-timeline>

    <h2 id="langs" class="text-lg-h2 text-md-h3 text-h5 pb-5">
      <router-link to="/#langs">Languages</router-link>
    </h2>
    <v-row class="pb-5 px-5 text-h6" justify="center" align-content="center">
      <v-col class="lang-col">
        <div class="lang-card"><span>French:</span>C2</div>
        <div class="lang-card"><span>Spanish:</span>C2</div>
        <div class="lang-card"><span>English:</span>C1</div>
      </v-col>
      <v-col class="lang-col">
        <div class="lang-card"><span>Dutch:</span>A2</div>
        <div class="lang-card"><span>Chinese:</span>A1</div>
        <div class="lang-card"><span>Czech:</span>A1</div>
      </v-col>
      <v-col class="lang-col">
        <v-icon
          :icon="mdiEarth"
          class="globe"
          size="20rem"
        ></v-icon>
      </v-col>
    </v-row>

    <h2 id="work" class="text-lg-h2 text-md-h3 text-h5 pb-5">
      <router-link to="/#work">Work Experience</router-link>
    </h2>

    <v-timeline :side="display.smAndDown.value ? 'end': null">
      <v-timeline-item dot-color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            Aug 2021
          </span>
        </template>
        <div class="mb-8">
          <div class="text-h6">Linked Data Event Streams</div>
          <div>UGent</div>
        </div>
      </v-timeline-item>
      <v-timeline-item dot-color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            Jul 2021
          </span>
        </template>
        <a
          style="display: block;"
          class="mb-8"
          href="https://osoc.be/editions/2021/ldes"
          target="_blank"
        >
          <div class="text-h6">Open Summer Of Code 2021</div>
        </a>
      </v-timeline-item>
    </v-timeline>

    <h2 id="projects" class="text-lg-h2 text-md-h3 text-h5 pb-5">
      <router-link to="/#projects">Projects</router-link>
    </h2>
    <v-row class="px-5">
      <v-col cols="12" md="6">
        <v-card
          href="https://github.com/D34DPlayer/Monochrome"
          class="proj-card"
        >
          <v-card-title> Monochrome</v-card-title>
          <v-card-subtitle>Uses FastAPI, Vue and Vuetify</v-card-subtitle>
          <v-card-text>
            Finally a proper Manga CMS.
            <br />
            You are a command away from setting up your own manga CMS. An API
            handles everything and the frontend simply uses it to serve the
            users, this makes the creation of other tools and modifications
            trivial.
            <v-card-actions>
              <v-btn block href="https://manga.d34d.one" target="_blank"
                >Live Demo</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          href="https://github.com/d34dplayer/kubernetes-challenge"
          class="proj-card"
        >
          <v-card-title> DO's Kubernetes Challenge</v-card-title>
          <v-card-subtitle>Uses Kubernetes</v-card-subtitle>
          <v-card-text>
            DigitalOcean organized
            <a href="https://www.digitalocean.com/community/pages/kubernetes-challenge" target="_blank">a challenge</a>
            to build something interesting using their Kubernetes infrastructure.
            <br />
            It was an very educative experience overall, the first part was developping itself,
            which started by learning how it worked and applying it in a concrete example.
            The second part was making a write-up, explaining not only the final result but all
            that I endured during it.
            that I endured during it.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card href="https://github.com/AH-REM/discord-noob" class="proj-card">
          <v-card-title> DiscordNoob</v-card-title>
          <v-card-subtitle>Uses Discord.js</v-card-subtitle>
          <v-card-text>
            Small Discord.js Framework.
            <br />
            Based on Discord.js, it allows users without any developement
            experience to setup a highly customizable bot that fits their needs.
            <br />
            This is achieved thanks to a wide collection of modules that can be
            assembled any way you want, which also allows other developers to
            expand this framework by creating new modules.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          href="https://github.com/D34DPlayer/Projet-Muziek"
          class="proj-card"
        >
          <v-card-title> Muziek</v-card-title>
          <v-card-subtitle>
            Uses Python, Kivy and the Youtube API
          </v-card-subtitle>
          <v-card-text>
            Python CLI and GUI application.
            <br />
            Allows you to manage and increase your local music library.
            <br />
            Users can register new groups, albums, songs and playlists.
            <br />
            If a YT link is provided, it can download the songs locally, export
            playlist to your YT account and even import YT playlists.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          href="https://github.com/D34DPlayer/MuziekDownloader"
          class="proj-card"
        >
          <v-card-title> MuziekDownloader</v-card-title>
          <v-card-subtitle>
            Uses Python, Django, Materialize and the Youtube API.
          </v-card-subtitle>
          <v-card-text>
            Python Web application.
            <br />
            Allows you to download songs from Youtube, and thanks to a form to
            provide the song's metadata.
            <br />
            The song handling is done server-side and the user has just to
            download the prepared song.
            <br />
            Users can check the recently downloaded song and search if someone
            has already provided the metadata for the song they are looking for.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          href="https://github.com/D34DPlayer/my-portfolio"
          class="proj-card"
        >
          <v-card-title> This portfolio</v-card-title>
          <v-card-subtitle> Uses Vue and Vuetify.</v-card-subtitle>
          <v-card-text>
            Dynamic website.
            <br />
            Not much to say, just look around.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h2 id="activities" class="text-lg-h2 text-md-h3 text-h5 py-5">
      <router-link to="/#activities">Activities</router-link>
    </h2>
    <v-row>
      <v-col cols="12" md="6">
        <v-card href="Hacktoberfest.pdf" target="_blank">
          <v-card-title>Hacktoberfest 2020 and 2021</v-card-title>
          <v-card-text>
            Yearly open source event whose objective is to support open source
            projects and incentivise contribution.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h2 id="certs" class="text-lg-h2 text-md-h3 text-h5 py-5">
      <router-link to="/#certs">Certifications</router-link>
    </h2>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Python</v-card-title>
          <v-list>
            <v-list-item href="/python_1.pdf" target="_blank">
              <v-list-item-title>Python Basics</v-list-item-title>
            </v-list-item>
            <v-list-item href="/python_2.pdf" target="_blank">
              <v-list-item-title>Python Intermediate</v-list-item-title>
            </v-list-item>
            <v-list-item href="/python_3.pdf" target="_blank">
              <v-list-item-title>Django</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Web Development</v-card-title>
          <v-list>
            <v-list-item href="/web_1.pdf" target="_blank">
              <v-list-item-title>Node.js basics</v-list-item-title>
            </v-list-item>
            <v-list-item href="/web_2.pdf" target="_blank">
              <v-list-item-title>Sass</v-list-item-title>
            </v-list-item>
            <v-list-item href="/web_3.pdf" target="_blank">
              <v-list-item-title>REST APIs</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Data Analysis</v-card-title>
          <v-list>
            <v-list-item href="/data_1.pdf" target="_blank">
              <v-list-item-title>Probabilities</v-list-item-title>
            </v-list-item>
            <v-list-item href="/data_2.pdf" target="_blank">
              <v-list-item-title
                >Data description and filtering</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <!-- TODO
    <h2 id="hobbies" class="text-h2 py-5">
      <router-link to="/#hobbies">Hobbies</router-link>
    </h2>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title>Title</v-card-title>
          <v-card-text>
            Description.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    -->
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify"
import { mdiEarth } from "@mdi/js"

import meBetter from "@/assets/me-better.jpg"

const display = useDisplay()
const pdf = false
</script>

<style lang="scss">
.v-application {
  a,
  a:hover,
  a:visited,
  a:active {
    color: inherit !important;
    text-decoration: none;
  }

  .about {
    max-width: 65rem;
    margin: auto;

    span {
      color: #f57212;
    }
  }

  .pfp {
    border-radius: 1rem;
  }

  .about-items {
    padding-left: 2rem;
    margin-left: -1rem;

    a:hover {
      color: #db6c1c;
    }
  }

  .lang-card {
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;

    span {
      color: #f57212;
      font-size: 1.3em;
      padding-right: 0.3rem;
    }
  }

  .text-h2 {
    margin-top: 1rem;
  }

  .proj-card {
    height: 100%;
  }

  .lang-col {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    align-items: center;
    justify-content: center;
  }
}

.theme--dark {
  .about-items {
    background: linear-gradient(90deg, rgb(30, 30, 30), rgba(0, 0, 0, 0));
  }

  .lang-card {
    border: rgb(54, 54, 54) 0.1rem solid;
  }

  .globe {
    filter: invert(1);
  }

  .proj-card:hover {
    background-color: #2e2e2e;
  }
}

.theme--light {
  .about-items {
    background: linear-gradient(90deg, rgb(225, 225, 225), rgba(0, 0, 0, 0));
  }

  .lang-card {
    border: rgb(201, 201, 201) 0.1rem solid;
  }

  .proj-card:hover {
    background-color: #efefef;
  }
}
</style>

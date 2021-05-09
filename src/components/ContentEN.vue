<template>
  <v-container>
    <h2 id="about" class="text-h2 pb-5">
      <router-link to="/#about">About me</router-link>
    </h2>
    <v-row class="pb-10 px-5 text-body-1 about">
      <div
        class="col-12 col-lg-6 px-16 d-flex justify-center align-center text-justify"
      >
        <p>
          Motivated student in <span>information technology</span>, I have
          practical experience in <span>backend</span> and
          <span>frontend</span> development acquired during various
          <span>projects</span> and <span>trainings</span>.
        </p>
      </div>
      <v-row class="justify-center col-12 col-lg-6">
        <v-img
          src="@/assets/me-better.jpg"
          max-width="10rem"
          class="pfp"
        ></v-img>
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

    <h2 id="education" class="text-h2 pb-5">
      <router-link to="/#education">Education</router-link>
    </h2>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            2019-...
          </span>
        </template>
        <v-card>
          <v-card-title>Information technology</v-card-title>
          <v-card-subtitle>EPHEC, LLN</v-card-subtitle>
        </v-card>
      </v-timeline-item>
      <v-timeline-item color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            2018-2019
          </span>
        </template>
        <v-card>
          <v-card-title>Physics</v-card-title>
          <v-card-subtitle>ULB, Brussels</v-card-subtitle>
        </v-card>
      </v-timeline-item>
      <v-timeline-item color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            2014-2018
          </span>
        </template>
        <v-card>
          <v-card-title>Mathematics - Science</v-card-title>
          <v-card-subtitle>ISJB, Wavre</v-card-subtitle>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <h2 id="langs" class="text-h2 pb-5">
      <router-link to="/#langs">Languages</router-link>
    </h2>
    <v-row class="pb-5 px-5 text-h6" justify="center" align-content="center">
      <v-col class="lang-col">
        <div class="lang-card"><span>French:</span>C2</div>
        <div class="lang-card"><span>Spanish:</span>C2</div>
        <div class="lang-card"><span>English:</span>B2</div>
      </v-col>
      <v-col class="lang-col">
        <div class="lang-card"><span>Dutch:</span>A2</div>
        <div class="lang-card"><span>Chinese:</span>A1</div>
      </v-col>
      <v-col class="lang-col">
        <v-img
          src="https://www.adient.com/-/media/adient/microsites/slovakia/globe.svg"
          class="globe"
        ></v-img>
      </v-col>
    </v-row>

    <h2 id="projects" class="text-h2 pb-5">
      <router-link to="/#projects">Projects</router-link>
    </h2>

    <v-row class="px-5">
      <v-col cols="12" md="6">
        <v-card href="https://github.com/AH-REM/discord-noob" class="proj-card">
          <v-card-title> DiscordNoob </v-card-title>
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
          <v-card-title> Muziek </v-card-title>
          <v-card-subtitle>
            Uses Python, Kivy and the Youtube API
          </v-card-subtitle>
          <v-card-text>
            Python CLI and GUI application.
            <br />
            Allows you to keep track and manage your local music library.
            <br />
            Users can register new groups, albums, songs and playlists.
            <br />
            If a YT link is provided, it can download the songs locally, export
            playlist to your YT account and even import YT playlists.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pb-5 px-5">
      <v-col cols="12" md="6">
        <v-card
          href="https://github.com/D34DPlayer/MuziekDownloader"
          class="proj-card"
        >
          <v-card-title> MuziekDownloader </v-card-title>
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
            Not much to say, just look around ^^.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h2 id="certs" class="text-h2 pb-5">
      <router-link to="/#certs">Certifications</router-link>
    </h2>
    <h3 class="text-h4">Python</h3>
    <ul>
      <li>Python Basics</li>
      <li>Python Intermediate</li>
      <li>Django</li>
    </ul>

    <h3 class="text-h4">Data Analysis</h3>
    <ul>
      <li>Probabilities</li>
      <li>Data description and filtering</li>
    </ul>

    <h3 class="text-h4">Web Development</h3>
    <ul>
      <li>Node.js basics</li>
      <li>Sass</li>
      <li>REST APIs</li>
    </ul>

    <h2 id="activities" class="text-h2 py-5">
      <router-link to="/#activities">Activities</router-link>
    </h2>

    <h2 id="hobbies" class="text-h2 pb-5">
      <router-link to="/#hobbies">Hobbies</router-link>
    </h2>
  </v-container>
</template>

<script>
export default {
  name: "ContentEN",
  data: () => ({
    pdf: false,
  }),
};
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

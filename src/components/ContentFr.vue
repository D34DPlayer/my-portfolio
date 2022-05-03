<template>
<!-- TODO Migrate and add content -->
  <v-container>
    <h2 id="about" class="text-h2 pb-5">
      <router-link to="/#about">À propos de moi</router-link>
    </h2>
    <v-row align="center" class="pb-10 px-5 text-body-1 about">
      <v-col class="col-12 col-lg-6 px-16 text-justify">
        Étudiant motivé en <span>technologie de l'informatique</span>, je
        bénéficie d'une expérience pratique dans la réalisation d'activités de
        développement <span>backend</span> et <span>frontend</span> acquise au
        cours de divers <span>projets</span> et <span>formations</span>.
      </v-col>
      <v-row class="justify-center col-12 col-lg-6">
        <v-img
          lazy-src="@/assets/me.jpg"
          src="@/assets/me-better.jpg"
          max-width="10rem"
          class="pfp"
        ></v-img>
        <div class="d-flex flex-column justify-center text-body-1 about-items">
          <div><span>Emplacement :</span> Belgique</div>
          <div>
            <span>Email:</span>
            <a href="mailto:carlosemilianorh@hotmail.com"
              >carlosemilianorh@hotmail.com</a
            >
          </div>
          <div><span>Téléphone:</span> (+32)483 29 23 31</div>
          <div class="pb-2">
            <a
              href="https://www.linkedin.com/in/carlos-ruiz-herrera/"
              target="_blank"
              >LinkedIn</a
            >
          </div>
          <v-btn href="/CV_FR.pdf" target="_blank">CV</v-btn>
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
          <v-card-title>Technologie de l'informatique</v-card-title>
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
          <v-card-title>Sciences Physiques</v-card-title>
          <v-card-subtitle>ULB, Bruxelles</v-card-subtitle>
        </v-card>
      </v-timeline-item>
      <v-timeline-item color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            2014-2018
          </span>
        </template>
        <v-card>
          <v-card-title>Maths - Sciences</v-card-title>
          <v-card-subtitle>ISJB, Wavre</v-card-subtitle>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <h2 id="langs" class="text-h2 pb-5">
      <router-link to="/#langs">Langues</router-link>
    </h2>
    <v-row class="pb-5 px-5 text-h6" justify="center" align-content="center">
      <v-col class="lang-col">
        <div class="lang-card"><span>Français :</span>C2</div>
        <div class="lang-card"><span>Espagnol :</span>C2</div>
        <div class="lang-card"><span>Anglais :</span>B2</div>
      </v-col>
      <v-col class="lang-col">
        <div class="lang-card"><span>Néerlandais :</span>A2</div>
        <div class="lang-card"><span>Chinois :</span>A1</div>
      </v-col>
      <v-col class="lang-col">
        <v-img
          src="https://www.adient.com/-/media/adient/microsites/slovakia/globe.svg"
          class="globe"
        ></v-img>
      </v-col>
    </v-row>

    <h2 id="work" class="text-h2 pb-5">
      <router-link to="/#work">Expérience Professionnelle</router-link>
    </h2>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            Août 2021
          </span>
        </template>
        <v-card>
          <v-card-title>Linked Data Event Streams</v-card-title>
          <v-card-subtitle>UGent</v-card-subtitle>
        </v-card>
      </v-timeline-item>
      <v-timeline-item color="#e56202">
        <template v-slot:opposite>
          <span class="headline font-weight-medium text--secondary">
            Juillet 2021
          </span>
        </template>
        <v-card
          href="https://osoc.be/editions/2021/ldes"
          target="_blank"
          class="proj-card"
        >
          <v-card-title>Open Summer Of Code 2021</v-card-title>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <h2 id="projects" class="text-h2 pb-5">
      <router-link to="/#projects">Projects</router-link>
    </h2>
    <v-row class="px-5">
      <v-col cols="12" md="6">
        <v-card
          href="https://github.com/D34DPlayer/Monochrome"
          class="proj-card"
        >
          <v-card-title> Monochrome</v-card-title>
          <v-card-subtitle>Utilise FastAPI, Vue et Vuetify</v-card-subtitle>
          <v-card-text>
            Enfin un CMS manga en conditions.
            <br />
            Lancez votre propre CMS pour manga avec une simple commande. Une API
            se charge de tout et le frontend sert simplement ces informations
            d'une façon propre, ce qui rend la création de nouveaux outils et
            les modifications triviales.
            <v-card-actions>
              <v-btn block href="https://manga.d34d.one" target="_blank"
                >Demo en ligne</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card href="https://github.com/AH-REM/discord-noob" class="proj-card">
          <v-card-title> DiscordNoob</v-card-title>
          <v-card-subtitle>Utilise Discord.js</v-card-subtitle>
          <v-card-text>
            Petit Framework Discord.js.
            <br />
            Basé sur Discord.js, il permet aux utilisateurs sans aucune
            expérience dans la programmation de mettre en place un bot hautement
            customizable configuré pour leurs besoins.
            <br />
            Ceci est accompli avec l'aide d'une grande collection de modules qui
            peuvent être assemblés de différentes façon, ce qui permet aussi à
            d'autres développeurs de étendre le framework en créant des modules
            supplémentaires.
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
            Utilise Python, Kivy and the Youtube API
          </v-card-subtitle>
          <v-card-text>
            Application CLI et GUI Python.
            <br />
            Permet de gérer et agrandir ta libraire musicale locale.
            <br />
            Les utilisateurs peuvent enregistrer des nouveaux groupes, albums,
            chansons et des playlists.
            <br />
            Si un lien YT est fourni, l'application peut télécharger les
            chansons localement, exporter les playlists locales vers YT, et même
            importer des playlists depuis YT.
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
            Utilise Python, Django, Materialize et l'API Youtube.
          </v-card-subtitle>
          <v-card-text>
            Application web Python.
            <br />
            L'application permet de télécharger des chansons depuis Youtube, et
            avec l'aide d'un formulaire ajouter ses métadonnées.
            <br />
            Le traîtement des chansons est fait côté serveur, et l'utilisateur
            n'a qu'à télécharger la chanson préparée.
            <br />
            Les utilisateurs peuvent voir les dernières chansons téléchargées et
            vérifier si quelqu'un à déjà fourni les métadonnées pour la chanson
            qu'ils recherchent.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          href="https://github.com/D34DPlayer/my-portfolio"
          class="proj-card"
        >
          <v-card-title> Ce portfolio</v-card-title>
          <v-card-subtitle> Utilise Vue and Vuetify.</v-card-subtitle>
          <v-card-text>
            Site dynamique.
            <br />
            Il n'y a pas grande chose à dire, suffit de regarder autour ^^.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h2 id="activities" class="text-h2 py-5">
      <router-link to="/#activities">Activités</router-link>
    </h2>
    <v-row>
      <v-col cols="4">
        <v-card href="Hacktoberfest.pdf" target="_blank">
          <v-card-title>Hacktoberfest 2020</v-card-title>
          <v-card-text>
            Évènement annuel open source, qui a comme objectif de soutenir les
            projets open source et inciter à contribuer.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h2 id="certs" class="text-h2 pb-5">
      <router-link to="/#certs">Certificats</router-link>
    </h2>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Python</v-card-title>
          <v-list>
            <v-list-item href="/python_1.pdf" target="_blank">
              <v-list-item-content>Python Basics</v-list-item-content>
            </v-list-item>
            <v-list-item href="/python_2.pdf" target="_blank">
              <v-list-item-content>Python Intermediate</v-list-item-content>
            </v-list-item>
            <v-list-item href="/python_3.pdf" target="_blank">
              <v-list-item-content>Django</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Web Development</v-card-title>
          <v-list>
            <v-list-item href="/web_1.pdf" target="_blank">
              <v-list-item-content>Node.js basics</v-list-item-content>
            </v-list-item>
            <v-list-item href="/web_2.pdf" target="_blank">
              <v-list-item-content>Sass</v-list-item-content>
            </v-list-item>
            <v-list-item href="/web_3.pdf" target="_blank">
              <v-list-item-content>REST APIs</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Data Analysis</v-card-title>
          <v-list>
            <v-list-item href="/data_1.pdf" target="_blank">
              <v-list-item-content>Probabilities</v-list-item-content>
            </v-list-item>
            <v-list-item href="/data_2.pdf" target="_blank">
              <v-list-item-content
                >Data description and filtering</v-list-item-content
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

<script>
export default {
  name: "ContentFR",
};
</script>

<style scoped></style>

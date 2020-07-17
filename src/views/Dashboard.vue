<template>
  <div id="mainCont" class="mainContainer">
    <v-col class="drawerCol">
      <NavDrawer id="navDrawer" />
    </v-col>
    <v-col style="padding: 0">
      <v-app-bar class="mainAppBar">
        <v-tabs v-model="chosenTab">
          <v-tab>Feed</v-tab>
          <v-tab>Questions</v-tab>
          <v-tab>Posts</v-tab>
        </v-tabs>
        <v-text-field
          outlined
          rounded
          placeholder="Search | ie. Projects, Posts, Questions"
          append-icon="mdi-magnify"
          v-model="search"
        ></v-text-field>
        <v-icon class="upgradeIcon">mdi-apple-keyboard-caps</v-icon>
        <p role="button" class="upgradeButton">Upgrade account</p>
        <v-icon class="notificationIcon">mdi-bell-alert-outline</v-icon>
        <img class="profileCircleImage" src="@/assets/profilepicture.jpg" />
      </v-app-bar>

      <v-container class="headerContainer">
        <v-tabs-items v-model="chosenTab">
          <!-- FEED TAB -->
          <v-tab-item>
            <v-row
              align="center"
              justify="center"
              style="margin-top: 5%; margin-left: 5%; margin-bottom: 2%;"
            >
              <pre style="font-size: 12px; opacity: 0.7; white-space: pre">PROJECT   /   MILLION DOLLAR IDEA   /   FEED</pre>
            </v-row>
            <v-row style="margin-left: 5%;">
              <p style="font-size: 50px; font-weight: 600;">Feed</p>
            </v-row>
            <hr class="headerLine" />
            <!-- FEED CONTAINER -->
            <v-container style="padding-left: 5%; padding-right: 50%;">
              <v-card
                style="margin-top: 5%; max-width: 80%; border-radius: 25px;"
                v-for="post in posts"
                :key="post.title"
              >
                <v-row style="margin-left: 10%; padding-top: 2%;">
                  <p style="font-size: 25px; color: #5a5959">{{post.title}}</p>
                </v-row>
                <v-row style="margin-left: 10%; margin-top: 1%; opacity: 0.6">
                  <p>{{post.author}}</p>
                </v-row>
                <v-row style="margin-left: 5%; margin-top: 5%; padding-bottom: 3%; max-width: 90%;">
                  <p style="text-align: left;">{{post.content}}</p>
                </v-row>
                <v-row style="margin-left: 5%; margin-top: 1%; padding-bottom: 3%;">
                  <v-col style="max-width: 50%; text-align: start;">
                    <p style="font-size: 10px;">{{post.date}}</p>
                  </v-col>
                  <v-col>
                    <p style="font-size: 14px;">4 Comments</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-container>
          </v-tab-item>
          <!-- QUESTIONS TAB -->
          <v-tab-item>
            <v-row
              align="center"
              justify="center"
              style="margin-top: 5%; margin-left: 5%; margin-bottom: 2%;"
            >
              <pre style="font-size: 12px; opacity: 0.7; white-space: pre">PROJECT   /   MILLION DOLLAR IDEA   /   QUESTIONS</pre>
            </v-row>
            <v-row style="margin-left: 5%;">
              <p style="font-size: 50px; font-weight: 600;">Questions</p>
            </v-row>
            <hr class="headerLine" />
          </v-tab-item>
          <!-- POSTS TAB -->
          <v-tab-item>
            <v-row
              align="center"
              justify="center"
              style="margin-top: 5%; margin-left: 5%; margin-bottom: 2%;"
            >
              <pre style="font-size: 12px; opacity: 0.7; white-space: pre">PROJECT   /   MILLION DOLLAR IDEA   /   POSTS</pre>
            </v-row>
            <v-row style="margin-left: 5%;">
              <p style="font-size: 50px; font-weight: 600;">Posts</p>
            </v-row>
            <hr class="headerLine" />
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavDrawer from "@/components/NavDrawer.vue";
export default {
  name: "Dashboard",
  components: {
    NavDrawer
  },
  data: () => ({
    search: null,
    chosenTab: 0,
    posts: [
      {
        title: "Head uudised.",
        author: "Peeter Termomeeter",
        content: "Tere, tahtsin teile öelda, et kõik on timmis!",
        date: "05.06.2020"
      },
      {
        title: "Tere kõigile",
        author: "Peeter Termomeeter",
        content:
          "Tere, minu nimi on Peeter ning olen teie ülemus. Meeldivat tööpäeva qtid!",
        date: "04.06.2020"
      }
    ]
  }),
  mounted() {},
  computed: {
    ...mapGetters([
      "termStatus",
      "isLoginView",
      "isSignupView",
      "termDialog",
      "navDrawer"
    ])
  },
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
#app {
  background-color: white !important;
}
.mainContainer {
  max-width: 100%;
  display: flex;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  .mainAppBar {
    margin-left: 0%;
    margin-right: 0%;
    height: 80px !important;
    background-color: white !important;
    .v-toolbar__content {
      height: 80px !important;
    }
    .v-tabs {
      max-width: fit-content;
    }
    .v-tab {
      font-size: 0.675rem;
    }
    .v-text-field {
      max-width: 20%;
      margin-left: 20%;
      margin-top: 30px;
    }
    .v-icon.notranslate.mdi.mdi-magnify.theme--light {
      color: #2c6bff !important;
    }
    .upgradeIcon {
      margin-left: 7%;
      color: #2c6bff;
    }
    .upgradeButton {
      margin-left: 5px;
      color: #2c6bff;
    }
    .notificationIcon {
      margin-left: 10%;
    }
    .profileCircleImage {
      max-width: 50px;
      border-radius: 50%;
      margin-left: 10%;
    }
  }
}
.drawerCol {
  height: 100vh;
  max-width: fit-content;
  padding: 0;
}
.headerContainer {
  max-width: 100%;
}
.headerLine {
  display: block;
  height: 1px;
  margin-left: 5%;
  border: 0;
  border-top: 1px solid #ccc;

  padding: 0;
  opacity: 0.6;
  max-width: 30%;
}

.v-tabs-slider-wrapper {
  color: #2c6bff;
}
</style>
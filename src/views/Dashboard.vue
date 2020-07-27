<template>
  <div id="mainCont" class="mainContainer">
    <CreateProject v-if="chosenPage === 'Home'" />
    <ShareProject />
    <CreatePost />
    <v-col class="drawerCol">
      <NavDrawer id="navDrawer" />
    </v-col>
    <v-col style="padding: 0;">
      <v-app-bar class="mainAppBar">
        <div class="emptyDiv" v-if="chosenPage !== 'Projectview'" style="margin-right: 16.95%;"></div>
        <v-tabs v-if="chosenPage === 'Projectview'" v-model="chosenTab">
          <v-tab @click.prevent="changeTab(0)">Feed</v-tab>
          <v-tab @click.prevent="changeTab(1)">Questions</v-tab>
          <v-tab @click.prevent="changeTab(2)">Posts</v-tab>
        </v-tabs>
        <v-text-field
          v-if="chosenPage !== 'Projectview'"
          outlined
          rounded
          placeholder="Search | ie. Projects, Posts, Questions"
          append-icon="mdi-magnify"
          v-model="search"
        ></v-text-field>
        <v-text-field
          class="projectviewSearch"
          v-if="chosenPage === 'Projectview'"
          outlined
          rounded
          placeholder="Search | ie. Projects, Posts, Questions"
          append-icon="mdi-magnify"
          v-model="search"
        ></v-text-field>
        <v-icon class="upgradeIcon">mdi-apple-keyboard-caps</v-icon>
        <p role="button" class="upgradeButton">Upgrade account</p>
        <v-icon id="notificationBell" class="notificationIcon">mdi-bell-alert-outline</v-icon>
        <p class="usernameOnBar" style="margin-left:5%; margin-right: 2%;">{{username}}</p>
        <img id="profileImage" class="profileCircleImage" src="@/assets/profilepicture.jpg" />
      </v-app-bar>
      <router-view></router-view>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavDrawer from "@/components/NavDrawer.vue";
import CreateProject from "@/components/CreateProject.vue";
import CreatePost from "@/components/CreatePost.vue";
import ShareProject from "@/components/ShareProject.vue";
// import axios from "axios";
export default {
  name: "Dashboard",
  components: {
    NavDrawer,
    CreateProject,
    CreatePost,
    ShareProject,
  },
  data: () => ({
    search: null,
    chosenTab: 0,
    dialog: true,
    displaySize: null,
  }),
  mounted() {
    this.displaySize = screen.width;
    this.chosenTab = this.$store.state.chosenTab;
    window.addEventListener("resize", function () {
      this.displaySize = screen.width;
    });
  },
  computed: {
    ...mapGetters([
      "termStatus",
      "isLoginView",
      "isSignupView",
      "termDialog",
      "navDrawer",
      "chosenPage",
      "username",
    ]),
  },
  watch: {
    chosenPage(state) {
      if (state === "Projectview" && this.displaySize < 767) {
        document.getElementById("notificationBell").style.display = "none";
        document.getElementById("profileImage").style.display = "none";
      } else if (state === "Projectview" && this.displaySize > 767) {
        document.getElementById("notificationBell").style.display =
          "inline-flex";
        document.getElementById("profileImage").style.display = "flex";
      }
    },
  },
  methods: {
    changeTab(nr) {
      this.$store.state.chosenTab = nr;
    },
  },
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
    .emptyDiv {
      margin-right: 0 !important;
    }
    .v-tabs {
      max-width: fit-content;
    }
    .v-tab {
      font-size: 0.975rem;
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
    }
  }
}
.drawerCol {
  height: 100vh;
  max-width: fit-content;
  padding: 0;
  position: sticky;
  top: 0;
}

.v-tabs-slider-wrapper {
  color: #2c6bff;
}
@media only screen and (max-width: 767px) {
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
      font-size: 0.975rem;
    }
    .v-text-field {
      max-width: none !important;
      margin-left: 0% !important;
      margin-top: 30px;
    }
    .v-icon.notranslate.mdi.mdi-magnify.theme--light {
      color: #2c6bff !important;
    }
    .upgradeIcon {
      margin-left: 0%;
      color: #2c6bff;
      display: none;
    }
    .upgradeButton {
      margin-left: 5px;
      color: #2c6bff;
      display: none;
    }
    .notificationIcon {
      margin-left: 10%;
      margin-right: 5%;
    }
    .usernameOnBar {
      display: none;
    }
    .projectviewSearch {
      display: none;
    }
    .profileCircleImage {
      max-width: 40px !important;
      border-radius: 50%;
    }
  }
}
</style>
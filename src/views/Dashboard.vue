<template>
  <div id="mainCont" class="mainContainer">
    <CreateProject v-if="chosenPage === 'Home'" />
    <ShareProject />
    <CreatePost />
    <v-col class="drawerCol">
      <NavDrawer id="navDrawer" />
    </v-col>
    <v-col style="padding: 0; max-width: calc(100vw - 56px)">
      <v-app-bar class="mainAppBar">
        <v-tabs v-if="chosenPage === 'Projectview'" v-model="chosenTab">
          <v-tab @click.prevent="changeTab(0)">Feed</v-tab>
          <v-tab @click.prevent="changeTab(1)">Questions</v-tab>
          <v-tab @click.prevent="changeTab(2)">Posts</v-tab>
        </v-tabs>
        <div class="emptyDiv" v-if="chosenPage !== 'Projectview'">
          <v-autocomplete
            class="regularSearch"
            outlined
            :items="searchResultsProjects"
            item-text="title"
            :search-input.sync="searchProjects"
            :loading="searchLoading"
            rounded
            placeholder="Search projects"
            append-icon="mdi-magnify"
          ></v-autocomplete>
        </div>

        <div class="emptyMiddleDiv">
          <v-autocomplete
            class="regularSearch"
            v-if="chosenPage === 'Projectview'"
            :items="searchResultsPosts"
            item-text="title"
            :search-input.sync="searchPosts"
            :loading="searchLoading"
            outlined
            rounded
            placeholder="Search posts and questions"
            append-icon="mdi-magnify"
          >
            <template slot="selection" slot-scope="data">
              Title: {{ data.item.title }}
              <br />
              {{ data.item.username }}
            </template>
            <template slot="item" slot-scope="data">
              Title: {{ data.item.title }}
              <br />
              Author: {{ data.item.username }}
            </template>
          </v-autocomplete>
        </div>
        <div class="tabContentDiv" v-if="chosenPage !== 'Projectview'">
          <v-icon class="upgradeIcon">mdi-apple-keyboard-caps</v-icon>
          <p role="button" class="upgradeButton">Upgrade account</p>
          <v-icon id="notificationBell" class="notificationIcon">mdi-bell-alert-outline</v-icon>
          <p class="usernameOnBar" style="margin-left:5%; margin-right: 2%;">{{username}}</p>
          <img id="profileImage" class="profileCircleImage" src="@/assets/profilepicture.jpg" />
        </div>
        <div class="tabContentDivProject" v-if="chosenPage === 'Projectview'">
          <v-icon class="upgradeIcon">mdi-apple-keyboard-caps</v-icon>
          <p role="button" class="upgradeButton">Upgrade account</p>
          <v-icon id="notificationBell" class="notificationIcon">mdi-bell-alert-outline</v-icon>
          <p class="usernameOnBar" style="margin-left:5%; margin-right: 2%;">{{username}}</p>
          <img id="profileImage" class="profileCircleImage" src="@/assets/profilepicture.jpg" />
        </div>
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
    searchPosts: null,
    searchProjects: null,
    searchResultsProjects: [],
    searchResultsPosts: [],
    searchLoading: false,
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
      "userProjects",
      "chosenProject",
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
    searchProjects(val) {
      console.log(val);
      if (val === "") return;
      else this.findProjectResults(val);
    },
    searchPosts(val) {
      console.log(val);
      if (val === "") this.searchResultsPosts = [];
      else this.findPostResults(val);
    },
  },
  methods: {
    findProjectResults(val) {
      this.searchLoading = true;

      this.userProjects.forEach((object) => {
        if (
          Object.keys(object).some(function (k) {
            return ~k.indexOf(val);
          })
        ) {
          this.searchResultsProjects.push(object);
        } else return;
      });
      this.searchLoading = false;
    },
    findPostResults(val) {
      this.searchLoading = true;

      this.chosenProject.posts.posts.forEach((object) => {
        if (
          Object.keys(object).some(function (k) {
            return ~k.indexOf(val);
          })
        ) {
          this.searchResultsPosts.push(object);
        } else return;
      });
      this.searchLoading = false;
    },
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
      max-width: 35%;
      width: 35%;
      display: flex;
      align-items: center;
      padding-left: 4%;
    }
    .emptyMiddleDiv {
      max-width: 30%;
      width: 30%;
    }
    .tabContentDiv {
      max-width: 35%;
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .tabContentDivProject {
      max-width: 35%;
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .v-tabs {
      max-width: fit-content;
      min-width: 35%;
    }
    .v-tab {
      font-size: 0.975rem;
    }
    .regularSearch {
      max-width: 100%;
      // margin-left: 30%;
      margin-top: 30px;
    }

    .v-icon.notranslate.mdi.mdi-magnify.theme--light {
      color: #2c6bff !important;
    }
    .upgradeIcon {
      // margin-left: 5%;
      color: #2c6bff;
    }
    .upgradeButton {
      margin-left: 2%;
      color: #2c6bff;
    }
    .notificationIcon {
      margin-left: 5%;
    }
    .profileCircleImage {
      max-width: 50px;
      border-radius: 50%;
    }
  }
}
.v-menu__content {
  overflow-wrap: anywhere;
  max-width: min-content;
}
.v-list-item {
  text-align: left !important;
  overflow: hidden;
  margin-top: 10px;
  scrollbar-width: 0;
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
    .tabContentDivProject {
      display: none !important;
    }
    .v-text-field {
      max-width: none !important;
      margin-left: 0% !important;
      margin-top: 30px;
    }
    .v-icon.notranslate.mdi.mdi-magnify.theme--light {
      color: #2c6bff !important;
    }
    .emptyMiddleDiv {
      display: none;
    }
    .emptyDiv {
      min-width: 65%;
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
@media only screen and (max-width: 1050px) {
  .upgradeIcon {
    display: none !important;
  }
}
</style>
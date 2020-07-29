<template>
  <v-navigation-drawer class="drawerCard" permanent :mini-variant="mini" :value="navDrawer">
    <span>
      <v-icon
        v-if="!mini"
        size="45"
        style="color: #2c6bff; display: inline-flex;margin-bottom: 10px; "
      >mdi-crown-outline</v-icon>
      <p
        style="color: white;    max-width: 50%;
    text-overflow: ellipsis;
    overflow: hidden; display: inline-flex; font-weight: 600; font-size: 20px;
"
        v-if="!mini"
      >ORGΞT</p>
      <v-btn style="margin-left: 25%;" icon @click.stop="mini = !mini">
        <v-icon
          v-if="mini"
          size="25"
          style="color: white; opacity: 0.6; margin-right: 40%"
        >mdi-arrow-expand-right</v-icon>
        <v-icon v-if="!mini" size="25" style="color: white;opacity: 0.6; ">mdi-arrow-collapse-left</v-icon>
      </v-btn>
    </span>
    <hr />
    <v-list class="routesList">
      <v-list-item @click="changePage(item.title)" v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon style="color: white">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            style="color: white; text-align: left; padding-left: 15px;"
          >{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <hr />
    <v-list-item-title
      style="color: white; opacity: 0.6; text-align: left; padding-left: 15px; font-size: 12px; padding-bottom: 5%;"
    >PROJECT</v-list-item-title>
    <v-list v-if="userProjects" class="projectList">
      <v-list-item
        class="tooltip"
        @click="changeProject(project.title, project._id)"
        v-for="project in userProjects.slice().reverse()"
        :key="project.title"
        link
      >
        <v-list-item-icon>
          <v-icon size="20" style="color: white">mdi-google-circles-extended</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="color: white; text-align: left; padding-left: 15px;">
            {{ project.title }}
            <span class="tooltiptext">{{project.title}}</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div
      style="display: flex; justify-content: space-evenly; position: fixed; bottom: 0; width: 100%; height: 50px;"
    >
      <v-btn style="align-self: center;" v-if="!mini" @click="logOut()">Log out</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store";
import axios from "axios";
export default {
  name: "NavDrawer",
  data() {
    return {
      mini: true,
      items: [
        { title: "Home", icon: "mdi-home" },
        { title: "Inbox", icon: "mdi-checkbox-multiple-blank-outline" },
        { title: "My Posts", icon: "mdi-format-list-checkbox" },
        { title: "Settings", icon: "mdi-cog-outline" },
      ],
      userId: this.$store.state.user._id,
    };
  },
  computed: {
    ...mapGetters(["navDrawer", "userProjects", "chosenProject"]),
    drawerWidth() {
      return document.getElementById("navDrawer").offsetWidth;
    },
  },
  mounted() {},
  methods: {
    async logOut() {
      await store.commit("logout");
      this.$store.reset();
      this.$router.push("/register");
    },
    async changeProject(title, id) {
      store.commit("changePage", "Projectview");
      store.commit("chooseProject", id);
      this.$router.push(`/dashboard/${this.userId}/project/${id}`);
      let posts = null;
      await axios
        .get(`/api/user/get-posts/${this.chosenProject._id}`)
        .then((response) => {
          posts = response.data;
        });

      this.$store.state.chosenProject.posts = posts;
    },
    changePage(page) {
      console.log(page);
      store.commit("changePage", page);
      this.$router.push(`/dashboard/${this.userId}/${page}`);
    },
  },
};
</script>

<style lang="scss">
.drawerCard {
  position: sticky;
  z-index: 0;
  height: 100%;
  padding-top: 40px;
  top: 0;
  left: 0;
  color: #1f224c;
  background-color: #1f224c !important;
}
.v-navigation-drawer__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #8894d1 !important;
  background-color: #f5f5f5;
}
.v-navigation-drawer__content::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}
.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px #8894d1 !important;
  background-color: #8894d1;
}
.v-navigation-drawer--open {
  width: 285px !important;
}
.v-navigation-drawer--mini-variant {
  width: 56px !important;
}
.v-list-item__icon {
  margin: 21px 0;
}
.routesList {
  margin-top: 15%;
}
.projectList {
  margin-top: 1%;
  margin-left: 5%;
  margin-bottom: 50px;
  .v-list-item {
    max-height: 39px;
  }
  .v-list-item__icon {
    align-self: center;
  }
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #2c6bfc;
  margin: 1em 0;
  padding: 0;
  opacity: 0.2;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 90%;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 110%;
  left: 30%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  white-space: pre-wrap;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
@media only screen and (max-width: 767px) {
  .drawerCard {
  }
}
</style>
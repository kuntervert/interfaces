<template>
  <v-container class="headerContainer">
    <!-- FEED TAB -->
    <v-row align="center" style="margin-top: 5%; margin-left: 5%; margin-bottom: 2%;">
      <pre style="font-size: 12px; opacity: 0.7; white-space: pre">DASHBOARD   /</pre>
    </v-row>
    <v-row style="margin-left: 5%;">
      <p style="font-size: 50px; font-weight: 600;">My Projects</p>
    </v-row>
    <hr class="headerLine" />
    <v-row class="newProjectButtonRow">
      <v-btn class="startProjectButton" outlined @click="openDialog()">Create project</v-btn>
    </v-row>
    <!-- FEED CONTAINER -->
    <v-row class="projectsContainer">
      <!-- Create project card -->

      <v-card
        class="projectCard"
        v-for="project in userProjects.slice().reverse()"
        :key="project.title"
        @click="changeProject(project.title, project._id)"
      >
        <v-row style="margin-left: 5%; padding-top: 2%;">
          <p style="font-size: 25px; color: #5a5959; max-width: 90%;">{{project.title}}</p>
        </v-row>
        <v-row style="margin-left: 5%; margin-top: 1%; padding-bottom: 3%;">
          <v-col style="max-width: 50%; text-align: start;">
            <p style="font-size: 10px;">{{project.createdAt}}</p>
          </v-col>
          <v-col>
            <p style="font-size: 14px;">{{project.users.length}} members</p>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import store from "../store";
export default {
  name: "Home",
  data() {
    return {
      search: null,
      dialog: false,
      chosenTab: 0,
      userId: this.$store.state.user._id,
    };
  },
  mounted() {},
  methods: {
    openDialog() {
      this.$store.state.createDialog = true;
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
      console.log(this.$store.state.chosenProject.posts);
    },
  },
  computed: {
    ...mapGetters(["userProjects", "chosenProject"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500&display=swap");
* {
  font-family: "Barlow Condensed", sans-serif;
}
.projectsContainer {
  padding-left: 5%;
  padding-right: 20%;
  display: flex;
}
.newProjectButtonRow {
  display: flex;
  margin-left: 5%;
  max-width: 95%;
  justify-content: flex-start;
  .startProjectButton {
    border-width: 3px;
    border-color: rgb(44, 107, 255, 0.5);
    color: black !important;
    height: 3rem !important;
    font-size: 19px !important;
    margin-right: 3%;
    width: 173px !important;
  }
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
.projectCard {
  max-width: 35%;
  width: 35%;
  min-width: 35%;
  margin-top: 5%;
  margin-right: 5%;
  align-self: flex-end;
  border-radius: 25px !important;
  box-shadow: 0px 3px 1px -2px rgba(104, 158, 255, 0.6),
    0px 2px 2px 0px rgba(104, 158, 255, 0.6),
    0px 1px 5px 0px rgba(104, 158, 255, 0.6) !important;
}
.projectCard:hover {
  box-shadow: 0 2px 5px #2c6bff !important;
  cursor: pointer;
}
.createProjectCard {
  //   background-color: gray !important;

  max-width: 25%;
  width: 25%;
  min-width: 25%;
  margin-top: 5%;
  margin-right: 5%;
  border-radius: 25px !important;
  display: flex;
  justify-content: space-evenly;
  padding-left: 2%;
  padding-right: 2%;
  box-shadow: 0px 3px 1px -2px rgba(104, 158, 255, 0.6),
    0px 2px 2px 0px rgba(104, 158, 255, 0.6),
    0px 1px 5px 0px rgba(104, 158, 255, 0.6) !important;
}
.createProjectCard:hover {
  cursor: pointer;
  box-shadow: 0 2px 5px #2c6bff !important;
}
@media screen and (max-width: 1500px) {
  .projectsContainer {
    padding-right: 5%;
  }
}
@media screen and (max-width: 767px) {
  .projectsContainer {
    padding-right: 5% !important;
    display: block !important;
  }
  .projectCard {
    min-width: 100% !important;
    max-width: 100% !important;
  }
  .createProjectCard {
    min-width: 50%;
    max-width: 50%;
    margin-bottom: 12%;
  }
}
</style>
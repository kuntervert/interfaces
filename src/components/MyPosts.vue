<template>
  <v-container class="headerContainer">
    <!-- FEED TAB -->
    <v-row align="center" style="margin-top: 5%; margin-left: 5%; margin-bottom: 2%;">
      <pre style="font-size: 12px; opacity: 0.7; white-space: pre">DASHBOARD   /    MY POSTS</pre>
    </v-row>
    <v-row style="margin-left: 5%;">
      <p style="font-size: 50px; font-weight: 600;">My Posts</p>
    </v-row>
    <hr class="headerLine" />
    <!-- FEED CONTAINER -->
    <v-row class="projectsContainer">
      <!-- Create project card -->

      <v-card class="projectCard" v-for="post in myPosts.posts.slice().reverse()" :key="post.title">
        <v-row style="margin-left: 10%; padding-top: 2%;">
          <p style="font-size: 25px; color: #5a5959; max-width: 90%;">{{post.title}}</p>
        </v-row>
        <v-row style="margin-left: 5%; margin-top: 1%; padding-bottom: 3%;">
          <v-col style="max-width: 50%; text-align: start;">
            <p style="font-size: 10px;">{{post.createdAt}}</p>
          </v-col>
          <v-col>
            <p style="font-size: 14px;">6 members</p>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "MyPosts",
  data: () => ({
    search: null,
    dialog: false,
    chosenTab: 0,
    myPosts: null
  }),
  mounted() {
    this.getMyPosts();
  },
  methods: {
    openDialog() {
      this.$store.state.createDialog = true;
    },
    async getMyPosts() {
      const id = this.$store.state.user._id;
      let myPosts = null;
      await axios.get(`/api/user/get-my-posts/${id}`).then(response => {
        myPosts = response.data;
      });
      this.myPosts = myPosts;
    }
  },
  computed: {
    ...mapGetters(["userProjects"])
  }
};
</script>

<style lang="scss">
.projectsContainer {
  padding-left: 5%;
  padding-right: 20%;
  display: flex;
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
  border-radius: 25px !important;
}
.projectCard:hover {
  box-shadow: 0 2px 5px #2c6bff !important;
  cursor: pointer;
}
.createProjectCard {
  //   background-color: gray !important;

  max-width: 35%;
  width: 35%;
  min-width: 35%;
  margin-top: 5%;
  margin-right: 5%;
  border-radius: 25px !important;
  display: flex;
  justify-content: space-evenly;
  padding-left: 2%;
  padding-right: 2%;
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
</style>
<template>
  <v-container class="headerContainer">
    <v-tabs-items v-model="chosenTab">
      <!-- FEED TAB -->
      <v-tab-item>
        <v-row align="center" style="margin-top: 5%; margin-left: 5%; margin-bottom: 2%;">
          <pre style="font-size: 12px; opacity: 0.7; white-space: pre">PROJECT   /   {{chosenProject.title}}   /   FEED</pre>
        </v-row>
        <v-row style="margin-left: 5%;">
          <p style="font-size: 50px; font-weight: 600;">Feed</p>
        </v-row>
        <hr class="headerLine" />
        <!-- FEED CONTAINER -->
        <v-container class="postsContainer">
          <v-card class="postCard" v-for="post in posts" :key="post.title">
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
        <v-row align="center" style="margin-top: 5%; margin-left: 5%; margin-bottom: 2%;">
          <pre style="font-size: 12px; opacity: 0.7; white-space: pre">PROJECT   /   {{chosenProject.title}}   /   QUESTIONS</pre>
        </v-row>
        <v-row style="margin-left: 5%;">
          <p style="font-size: 50px; font-weight: 600;">Questions</p>
        </v-row>
        <hr class="headerLine" />
      </v-tab-item>
      <!-- POSTS TAB -->
      <v-tab-item>
        <v-row align="center" style="margin-top: 5%; margin-left: 5%; margin-bottom: 2%;">
          <pre style="font-size: 12px; opacity: 0.7; white-space: pre">PROJECT   /   {{chosenProject.title}}   /   POSTS</pre>
        </v-row>
        <v-row style="margin-left: 5%;">
          <p style="font-size: 50px; font-weight: 600;">Posts</p>
        </v-row>
        <hr class="headerLine" />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Projectview",
  data: () => ({
    search: null,
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
  computed: {
    ...mapGetters(["chosenTab", "userProjects", "chosenProject"])
  }
};
</script>

<style lang="scss">
.postsContainer {
  padding-left: 5%;
  padding-right: 20%;
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
.postCard {
  margin-top: 5%;
  margin-right: 50%;
  border-radius: 25px !important;
}
</style>
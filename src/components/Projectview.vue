<template>
  <v-container class="headerContainer">
    <v-tabs-items v-model="chosenTab">
      <!-- FEED TAB -->
      <v-tab-item>
        <v-row align="center" class="feedTabRow">
          <pre style="font-size: 12px; opacity: 0.7; white-space: pre">PROJECT   /   {{chosenProject.title}}   /   FEED</pre>
        </v-row>
        <v-row class="feedPRow">
          <p style="font-size: 50px; font-weight: 600;">Feed</p>
        </v-row>
        <hr id="aosAnchor" class="headerLine" />
        <!-- FEED CONTAINER -->
        <v-container class="postsContainer">
          <v-progress-linear v-if="loading" indeterminate color="white" class="mb-0"></v-progress-linear>
          <v-row>
            <v-col style="max-width: 40%;" v-if="chosenProject.posts.posts">
              <h2 v-if="chosenProject.posts.posts.length === 0">Nothing has been posted yet</h2>
              <v-card
                @click="openPost(post._id)"
                class="postCard"
                v-for="post in chosenProject.posts.posts.slice().reverse()"
                :key="post.title"
              >
                <v-row class="postTitleRow">
                  <p>{{post.title}}</p>
                </v-row>
                <v-row class="postAuthorRow">
                  <p>{{post.username}}</p>
                </v-row>

                <v-row v-if="post.content" class="postContentRow">
                  <p>{{post.content}}</p>
                </v-row>
                <hr />
                <v-row class="postDateRow">
                  <v-col class="postDateCol">
                    <p>{{post.createdAt}}</p>
                  </v-col>
                  <v-col>
                    <p style="font-size: 14px;">{{post.comments.length}} Comments</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col style="max-width: 30%">
              <v-row>
                <v-btn class="addPostButton" outlined @click="openPostDialog(null)">+ New post</v-btn>
              </v-row>
            </v-col>
            <v-col style="max-width: 30%;">
              <v-row>
                <v-btn class="addPostButton" outlined @click="openShareDialog()">Invite members</v-btn>
              </v-row>
              <p style="text-align: left;">Project members:</p>
              <v-row
                style=" margin-left: 0;"
                v-for="user in chosenProject.users"
                :key="user.userId"
              >
                <p>{{user.username}}</p>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <!-- QUESTIONS TAB -->
      <v-tab-item>
        <v-row align="center" class="feedTabRow">
          <pre style="font-size: 12px; opacity: 0.7; white-space: pre">PROJECT   /   {{chosenProject.title}}   /   QUESTIONS</pre>
        </v-row>
        <v-row class="feedPRow">
          <p style="font-size: 50px; font-weight: 600;">Questions</p>
        </v-row>
        <hr class="headerLine" />
        <!-- QUESTIONS CONTAINER -->
        <v-container class="postsContainer">
          <v-row>
            <v-col style="max-width: 40%;" v-if="chosenProject.posts.posts">
              <h2 v-if="chosenProjectQuestionsOnly.length === 0">Nothing has been posted yet</h2>

              <v-card
                @click="openPost(post._id)"
                class="postCard"
                v-for="post in chosenProjectQuestionsOnly.slice().reverse()"
                :key="post.title"
              >
                <v-row class="postTitleRow">
                  <p>{{post.title}}</p>
                </v-row>
                <v-row class="postAuthorRow">
                  <p>{{post.username}}</p>
                </v-row>

                <v-row v-if="post.content" class="postContentRow">
                  <p>{{post.content}}</p>
                </v-row>
                <hr />
                <v-row class="postDateRow">
                  <v-col class="postDateCol">
                    <p>{{post.createdAt}}</p>
                  </v-col>
                  <v-col>
                    <p style="font-size: 14px;">{{post.comments.length}} Comments</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col style="max-width: 30%">
              <v-btn
                outlined
                class="addPostButton"
                @click="openPostDialog( 'Question')"
              >Ask a question</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <!-- POSTS TAB -->
      <v-tab-item>
        <v-row align="center" class="feedTabRow">
          <pre style="font-size: 12px; opacity: 0.7; white-space: pre">PROJECT   /   {{chosenProject.title}}   /   POSTS</pre>
        </v-row>
        <v-row class="feedPRow">
          <p style="font-size: 50px; font-weight: 600;">Posts</p>
        </v-row>
        <hr class="headerLine" />
        <!-- POSTS CONTAINER -->
        <v-container class="postsContainer">
          <v-row>
            <v-col style="max-width: 40%;" v-if="chosenProject.posts.posts">
              <h2 v-if="chosenProjectPostsOnly.length === 0">Nothing has been posted yet</h2>

              <v-card
                @click="openPost(post._id)"
                class="postCard"
                v-for="post in chosenProjectPostsOnly.slice().reverse()"
                :key="post.title"
              >
                <v-row class="postTitleRow">
                  <p>{{post.title}}</p>
                </v-row>
                <v-row class="postAuthorRow">
                  <p>{{post.username}}</p>
                </v-row>
                <v-row v-if="post.content" class="postContentRow">
                  <p>{{post.content}}</p>
                </v-row>
                <hr />
                <v-row class="postDateRow">
                  <v-col class="postDateCol">
                    <p>{{post.createdAt}}</p>
                  </v-col>
                  <v-col>
                    <p style="font-size: 14px;">{{post.comments.length}} Comments</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col style="max-width: 30%">
              <v-btn outlined class="addPostButton" @click="openPostDialog('Post')">Add post</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>


<script>
import { mapGetters } from "vuex";
import store from "../store";
// import axios from "axios";
export default {
  name: "Projectview",
  data: () => ({
    search: null,
    loading: false,
  }),
  mounted() {},
  methods: {
    openPostDialog(t) {
      this.$store.state.postDialog = true;
      this.$store.state.postDialogType = t;
      console.log(this.$store.state.postDialogType);
    },
    openShareDialog() {
      this.$store.state.shareDialog = true;
    },
    openPost(id) {
      const userId = this.$store.state.user._id;
      store.commit("changePage", "Postview");
      this.$router.push(`/dashboard/${userId}/post/${id}`);
    },
  },
  computed: {
    ...mapGetters([
      "chosenTab",
      "userProjects",
      "chosenProject",
      "chosenProjectQuestionsOnly",
      "chosenProjectPostsOnly",
    ]),
  },
};
</script>

<style lang="scss">
.postsContainer {
  padding-left: 5%;
  padding-right: 5%;
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
  margin-right: 0;
  padding-bottom: 3%;
  padding-top: 5%;
  max-width: 95%;
  border-radius: 25px !important;
  box-shadow: 0px 3px 1px -2px rgba(104, 158, 255, 0.6),
    0px 2px 2px 0px rgba(104, 158, 255, 0.6),
    0px 1px 5px 0px rgba(104, 158, 255, 0.6) !important;
  hr {
    max-width: 90%;
    opacity: 0.7;
    margin-right: 5%;
    margin-left: 5%;
  }
}
.v-ripple__container {
  color: rgb(44, 107, 255, 0.4);
}
.postCard:hover {
  box-shadow: 0 2px 5px #2c6bff !important;
  cursor: pointer;
}
.feedTabRow {
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 2%;
}
.feedPRow {
  margin-left: 5%;
}
.postTitleRow {
  margin-left: 10%;
  max-width: 90%;
  max-height: 5rem;

  p {
    width: 85%;
    font-size: 23px;
    color: #5a5959;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 4rem;
    text-align: left;
  }
}
.postAuthorRow {
  margin-left: 10%;
  margin-top: 1%;
  opacity: 0.6;
}
.postContentRow {
  margin-left: 10%;
  margin-top: 5%;
  padding-bottom: 3%;
  max-width: 90%;

  p {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 6rem;
    font-size: 22px;
  }
}
.postDateRow {
  margin-left: 5%;
  margin-top: 1%;
  margin-right: 1%;
}
.postDateCol {
  max-width: 50%;
  text-align: start;
  p {
    font-size: 15px;
  }
}
.addPostButton {
  border-width: 2px;
  border-color: rgb(44, 107, 255, 0.5);
  color: black !important;
  height: 3rem !important;
  font-size: 19px !important;
  margin-right: 3%;
  width: 173px !important;
}
.addPostButton:hover {
  background-color: rgb(44, 107, 255, 0.2) !important;
}
</style>
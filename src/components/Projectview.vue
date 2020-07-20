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
        <hr class="headerLine" />
        <!-- FEED CONTAINER -->
        <v-container class="postsContainer">
          <v-progress-linear v-if="loading" indeterminate color="white" class="mb-0"></v-progress-linear>
          <v-row>
            <v-col v-if="chosenProject.posts.posts" style="padding-right:20%; ">
              <v-card
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
                <v-row class="postContentRow">
                  <p>{{post.content}}</p>
                </v-row>
                <v-row class="postDateRow">
                  <v-col class="postDateCol">
                    <p>{{post.createdAt}}</p>
                  </v-col>
                  <v-col>
                    <p style="font-size: 14px;">4 Comments</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col style="max-width: 30%">
              <v-btn @click="openPostDialog(null)">+ New post</v-btn>
              <v-btn @click="openShareDialog()">Invite members</v-btn>
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
            <v-col v-if="chosenProject.posts.posts" style="padding-right:20%;">
              <v-card
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
                <v-row class="postContentRow">
                  <p>{{post.content}}</p>
                </v-row>
                <v-row class="postDateRow">
                  <v-col class="postDateCol">
                    <p>{{post.createdAt}}</p>
                  </v-col>
                  <v-col>
                    <p style="font-size: 14px;">4 Comments</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col style="max-width: 30%">
              <v-btn @click="openPostDialog( 'Question')">Ask a question</v-btn>
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
            <v-col v-if="chosenProject.posts.posts" style="padding-right:20%;">
              <v-card
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
                <v-row class="postContentRow">
                  <p>{{post.content}}</p>
                </v-row>
                <v-row class="postDateRow">
                  <v-col class="postDateCol">
                    <p>{{post.createdAt}}</p>
                  </v-col>
                  <v-col>
                    <p style="font-size: 14px;">4 Comments</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col style="max-width: 30%">
              <v-btn @click="openPostDialog('Post')">Add post</v-btn>
            </v-col>
          </v-row>
        </v-container>
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
    loading: false
  }),
  mounted() {
    console.log(this.chosenProject.posts);
  },
  methods: {
    openPostDialog(t) {
      this.$store.state.postDialog = true;
      this.$store.state.postDialogType = t;
      console.log(this.$store.state.postDialogType);
    },
    openShareDialog() {
      this.$store.state.shareDialog = true;
    }
  },
  computed: {
    ...mapGetters([
      "chosenTab",
      "userProjects",
      "chosenProject",
      "chosenProjectQuestionsOnly",
      "chosenProjectPostsOnly"
    ])
  }
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
  max-height: 20rem;
  border-radius: 25px !important;
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
  padding-top: 2%;
  p {
    font-size: 25px;
    color: #5a5959;
  }
}
.postAuthorRow {
  margin-left: 10%;
  margin-top: 1%;
  opacity: 0.6;
}
.postContentRow {
  margin-left: 5%;
  margin-top: 5%;
  padding-bottom: 3%;
  max-width: 90%;
  p {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 6rem;
  }
}
.postDateRow {
  margin-left: 5%;
  margin-top: 1%;
  padding-bottom: 3%;
}
.postDateCol {
  max-width: 50%;
  text-align: start;
  p {
    font-size: 10px;
  }
}
</style>
<template>
  <v-dialog @keydown.esc="closeDialog()" v-model="postDialog" persistent max-width="512">
    <v-card class="mailSentSelectBox">
      <v-card-title style="justify-content: space-between;" class="headline">
        <h3 v-if="postDialogType === null" id="postHeader">Create a new post</h3>
        <h3 v-if="postDialogType === 'Question'" id="postHeader">Ask a question</h3>
        <h3 v-if="postDialogType === 'Post'" id="postHeader">Share your ideas</h3>

        <v-btn icon @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-container>
        <v-btn-toggle v-model="type" tile color="deep-purple accent-3" group>
          <v-btn value="Question">Question</v-btn>

          <v-btn value="Post">Post</v-btn>
        </v-btn-toggle>

        <v-container v-if="type">
          <v-row align="center" justify="space-around">
            <v-text-field
              class="titleText"
              @keydown.enter="createPost(); closeDialog()"
              v-model="title"
              counter="400"
              label="Title (required)"
              required
            ></v-text-field>
          </v-row>
          <v-row align="center" justify="space-around">
            <v-textarea
              class="descriptionText"
              height="100"
              @keydown.enter="createPost(); closeDialog()"
              v-model="content"
              label="Description (optional)"
              required
            ></v-textarea>
          </v-row>

          <v-spacer></v-spacer>
          <v-row style="justify-content: space-evenly;">
            <v-btn
              style=" color: white"
              color="#6353fa"
              class="mr-4"
              @click="createPost(); closeDialog()"
            >Create</v-btn>
          </v-row>
        </v-container>
      </v-container>
      <div class="bottomColor"></div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "CreatePost",
  data: () => ({
    valid: false,
    title: null,
    type: null,
    content: null,
    types: [{ title: "Question" }, { title: "Post" }]
  }),
  computed: {
    ...mapGetters(["postDialog", "chosenProject", "postDialogType"])
  },
  watch: {
    postDialogType(e) {
      this.type = e;
    }
  },
  methods: {
    selectType(selected) {
      this.type = selected;
    },
    closeDialog() {
      this.type = null;
      this.$store.state.postDialog = false;
      (this.title = null), (this.content = null);
    },
    async createPost() {
      if (!this.title) {
        return alert("Needs a title");
      }
      console.log(this.$store.state.user.username);
      let post = null;
      if (this.title && this.content) {
        post = {
          userId: this.$store.state.user._id,
          username: this.$store.state.user.username,
          title: this.title,
          type: this.type,
          content: this.content
        };
      } else if (this.title && !this.content) {
        post = {
          userId: this.$store.state.user._id,
          username: this.$store.state.user.username,
          title: this.title,
          type: this.type
        };
      } else {
        return;
      }
      console.log(this.$store.state.user.email);
      await axios.post(`/api/user/new-post/${this.chosenProject._id}`, post);
      let posts = null;
      await axios
        .get(`/api/user/get-posts/${this.chosenProject._id}`)
        .then(response => {
          posts = response.data;
        });

      this.$store.state.chosenProject.posts = posts;
      this.type = null;
      (this.title = null), (this.content = null);
    }
  }
};
</script>


<style lang="scss">
.mailSentSelectBox {
  .bottomColor {
    width: 100%;
    height: 20px;
    background: #6353fa !important;
    opacity: 70%;
  }
}
.descriptionText {
  max-width: 75%;
}
.titleText {
  max-width: 75%;
}
</style>
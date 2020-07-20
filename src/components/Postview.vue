<template>
  <div style="display: flex; width: 100%;" v-if="postData">
    <div style="width: 30%; float: left" />
    <div style="max-width: 40%; width: 40%;margin-top: 150px; float: left">
      <v-container
        style="padding-top: 5%; border-left: outset;
    border-right: inset; border-color: rgb(44, 107, 255, 0.2)"
      >
        <v-row
          style="margin-left: 0; margin-right: 0; margin-top: 0%; justify-content: flex-start;"
        >
          <p style="font-size: 11px;">{{postData.createdAt}}</p>
        </v-row>
        <v-row
          style="margin-left: 0; margin-right: 0; margin-top: 1%; justify-content: flex-start; "
        >
          <p style="font-size: 15px;">{{postData.username}}</p>
        </v-row>
        <v-row style="margin: 0; margin-top: 3%;justify-content: flex-start;">
          <h3
            style=" text-align: left;     overflow-wrap: break-word;

    max-width: 90%"
          >{{postData.title}}</h3>
        </v-row>

        <v-row
          style="margin-left: 0; margin-right: 0; margin-top: 5%; justify-content: flex-start;"
        >
          <p style="
    max-width: 90%; text-align: left;">{{postData.content}}</p>
        </v-row>
      </v-container>
      <v-container
        style="border-left: outset;
    border-right: inset;  border-color: rgb(44, 107, 255, 0.2)"
      >
        <v-row
          style="margin-left: 0; margin-top: 20px; margin-right: 5px; justify-content: space-between"
        >
          <h5 @click="commentBox = !commentBox" style="cursor: pointer;">Add comment</h5>
          <h5
            @click="showComments = !showComments"
            style="cursor: pointer;"
          >{{postData.comments.length}} Comments</h5>
        </v-row>
        <v-row v-if="commentBox" style="margin-top:2%; margin-left: 0;">
          <v-text-field
            @click:append="addComment(postData._id)"
            class="commentField"
            counter="500"
            append-icon="mdi-comment-arrow-right-outline"
            style
            outlined
            v-model="commentContent"
            placeholder="Write comment..."
            solo
          ></v-text-field>
        </v-row>
        <v-row></v-row>
        <div v-if="showComments">
          <v-container
            v-for="comment in postData.comments"
            :key="comment.username"
            style="margin-top: 1%;"
          >
            <hr />
            <v-row>
              <p style="font-size: 11px;">{{comment.createdAt}}</p>
            </v-row>
            <v-row style="margin-top: 1%;">
              <p style="font-size: 14px;">{{comment.username}}</p>
            </v-row>
            <v-row style="margin-top: 5%;">
              <p style="text-align: left;">{{comment.content}}</p>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </div>
    <div style="width: 30%; float-left" />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Postview",
  data() {
    return {
      test: null,
      commentBox: false,
      postData: null,
      commentContent: null,
      showComments: false
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getPost();
  },
  methods: {
    async getPost() {
      let postData = null;
      await axios
        .get(`/api/user/get-post/${this.$route.params.id}`)
        .then(response => {
          postData = response.data;
        });
      this.postData = postData.posts[0];
      this.postData.createdAt = moment(this.postData.createdAt).format(
        "DD MMMM YYYY, HH:mm"
      );
      console.log(this.postData);
      console.log(this.postData.comments.length);
    },
    async addComment(postId) {
      if (this.commentContent !== "") {
        let newComment = {
          userId: this.$store.state.user._id,
          username: this.$store.state.user.username,
          content: this.commentContent
        };
        await axios.post(`/api/user/new-comment/${postId}`, newComment);
        this.commentBox = false;
        this.getPost();
      }
    }
  }
};
</script>

<style lang="scss">
.commentField {
  max-width: 60%;
  max-height: 40%;
  .v-input__append-inner {
    cursor: pointer;
  }
}
</style>
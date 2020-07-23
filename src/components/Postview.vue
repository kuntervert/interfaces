<template>
  <div style="display: flex; width: 100%;" v-if="postData">
    <div style="width: 30%; float: left" />
    <div
      style="max-width: 40%; width: 40%;margin-top: 150px; float: left; animation: fadeInUp; animation-duration: 0.5s;"
    >
      <v-container
        style="padding-top: 5%; border-left: outset;
    border-right: inset; border-color: rgb(44, 107, 255, 0.6);     border-width: 1px; "
      >
        <v-row
          style="margin-left: 0; margin-right: 0; margin-top: 0%; justify-content: flex-start;"
        >
          <p style="font-size: 13px;">{{postData.createdAt}}</p>
        </v-row>
        <v-row
          style="margin-left: 0; margin-right: 0; margin-top: 1%; justify-content: flex-start; "
        >
          <p style="font-size: 18px;">{{postData.username}}</p>
        </v-row>
        <v-row style="margin: 0; margin-top: 5%;justify-content: flex-start;">
          <h3
            style=" text-align: left;     overflow-wrap: break-word;

    max-width: 90%; font-size: 25px;"
          >{{postData.title}}</h3>
        </v-row>

        <v-row
          style="margin-left: 0; margin-right: 0; margin-top: 5%; justify-content: flex-start;"
        >
          <p style="
    max-width: 90%; text-align: left; font-size: 23px">{{postData.content}}</p>
        </v-row>
      </v-container>

      <v-container
        style="border-left: outset;
    border-right: inset;  border-color: rgb(44, 107, 255, 0.2);     border-width: 1px;"
      >
        <hr style="max-width: 70%;  border-color: rgb(44, 107, 255, 0.9); opacity: 0.8" />
        <v-row
          style="margin-left: 0; margin-top: 20px; margin-right: 5px; justify-content: space-between; margin-bottom:5%;"
        >
          <h3
            @click="commentBox = !commentBox"
            style="cursor: pointer; color: #728aff"
          >Reply to post</h3>

          <h4
            @click="showComments = !showComments"
            style="cursor: pointer; color: rgb(44, 107, 255, 0.9);"
          >Show Comments ({{postData.comments.length}})</h4>
        </v-row>
        <v-row v-if="commentBox" style="margin-top:2%; margin-left: 0;">
          <v-text-field
            @click:append="addComment(postData._id)"
            class="commentField"
            append-icon="mdi-comment-arrow-right-outline"
            style
            outlined
            @keydown.enter="addComment(postData._id)"
            v-model="commentContent"
            placeholder="Write comment..."
            solo
          ></v-text-field>
        </v-row>

        <transition-group tag="div" name="slide-fade">
          <div :key="showComments" v-if="showComments">
            <v-container
              v-for="comment in postData.comments.slice().reverse()"
              :key="comment.username"
              style="margin-top: 1%; padding-left: 0;"
            >
              <v-row style="margin-left: 0;">
                <p style="font-size: 13px;">{{comment.createdAt}}</p>
              </v-row>
              <v-row style="margin-top: 1%;margin-left: 0;">
                <p style="font-size: 18px;">{{comment.username}}</p>
              </v-row>
              <v-row style="margin-top: 5%;margin-left: 0;">
                <p style="text-align: left; font-size: 19px;">{{comment.content}}</p>
              </v-row>
              <hr />
            </v-container>
          </div>
        </transition-group>
      </v-container>
    </div>
    <div style="width: 30%; float-left" />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import "animate.css";

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
      if (!this.commentContent.replace(/\s/g, "").length) {
        return;
      } else if (this.commentContent.length > 0) {
        let newComment = {
          userId: this.$store.state.user._id,
          username: this.$store.state.user.username,
          content: this.commentContent
        };
        await axios.post(`/api/user/new-comment/${postId}`, newComment);
        this.commentBox = false;
        this.getPost();
        this.showComments = true;
      }
    }
  }
};
</script>

<style lang="scss">
.commentField {
  max-width: 60%;
  max-height: 40%;
  animation: slideInDown;
  animation-duration: 0.25s;
  .v-input__append-inner {
    cursor: pointer;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
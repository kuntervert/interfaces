<template>
  <v-dialog @keydown.esc="closeDialog()" v-model="shareDialog" persistent max-width="512">
    <v-card class="mailSentSelectBox">
      <v-card-title style="justify-content: space-between;" class="headline">
        Share project with
        <v-btn icon @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-container>
        <v-row align="center" justify="space-around">
          <v-text-field
            @keydown.enter="shareProject(); closeDialog()"
            v-model="email"
            label="New member's email"
            required
            style="max-width: 60%;"
          ></v-text-field>
        </v-row>

        <v-spacer></v-spacer>
        <v-row style="justify-content: space-evenly;">
          <v-btn
            style=" color: white"
            color="#6353fa"
            class="mr-4"
            @click="shareProject(); closeDialog()"
          >Share</v-btn>
        </v-row>
      </v-container>
      <div class="bottomColor"></div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "ShareProject",
  data: () => ({
    valid: false,
    title: null,
    email: null,
  }),
  computed: {
    ...mapGetters(["shareDialog", "chosenProject"]),
  },
  methods: {
    closeDialog() {
      this.$store.state.shareDialog = false;
    },
    async shareProject() {
      const project = {
        email: this.email,
        projectId: this.chosenProject._id,
      };
      await axios.post("/api/user/share-project", project);
    },
  },
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
</style>
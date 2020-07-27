<template>
  <v-dialog @keydown.esc="closeDialog()" v-model="createDialog" persistent max-width="512">
    <v-card class="mailSentSelectBox">
      <v-card-title style="justify-content: space-between;" class="headline">
        Add project info:
        <v-btn icon @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-container>
        <v-row align="center" justify="space-around">
          <v-text-field
            class="projectNameField"
            counter="100"
            @keydown.enter="createProject(); closeDialog()"
            v-model="title"
            label="Project name"
            required
          ></v-text-field>
        </v-row>

        <v-spacer></v-spacer>
        <v-row style="justify-content: space-evenly;">
          <v-btn
            style=" color: white"
            color="#6353fa"
            class="mr-4"
            @click="createProject(); closeDialog()"
          >Create</v-btn>
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
  name: "CreateProject",
  data: () => ({
    valid: false,
    title: null,
  }),
  computed: {
    ...mapGetters(["createDialog"]),
  },
  methods: {
    closeDialog() {
      this.$store.state.createDialog = false;
    },
    async createProject() {
      const project = {
        userId: this.$store.state.user._id,
        username: this.$store.state.user.username,
        title: this.title,
      };
      await axios.post("/api/user/new-project", project);
      let id = this.$store.state.user._id;
      let projects = null;
      await axios.get(`/api/user/get-projects/${id}`).then((response) => {
        projects = response.data;
      });
      this.$store.state.user.projects = projects.projects;
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
.projectNameField {
  max-width: 75%;
}
</style>
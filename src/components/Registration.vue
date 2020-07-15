<template>
  <v-container>
    <Terms v-if="termDialog" />
    <v-row class="mainRow">
      <Login />
      <Signup />
    </v-row>
  </v-container>
</template>

<script>
import Terms from "@/components/Terms";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { mapGetters } from "vuex";
export default {
  name: "Registration",
  components: {
    Terms,
    Login,
    Signup
  },

  data: () => ({}),
  computed: {
    ...mapGetters(["termStatus", "termDialog"])
  },
  methods: {
    trySignup() {
      this.signup = true;
      this.login = false;
    },
    tryLogin() {
      this.login = true;
      this.signup = false;
    },
    signupUser() {
      if (!this.checkbox1) {
        alert("Please accept the terms and conditions");
      }
    }
  }
};
</script>

<style lang="scss">
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
}
.mainRow {
  background-position: center;
  background-size: 80% 100%;
  background-repeat: no-repeat;
  background-image: url("https://i.gyazo.com/d650150598e216eeed3bf644c868a8ab.png");
  margin-top: 0%;
  justify-content: center;
}
</style>
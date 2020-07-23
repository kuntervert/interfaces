<template>
  <v-card v-bind:class="{'loginCard': isLoginView===true,  'loginCardNone': isLoginView === false}">
    <changeToLoginButton v-if="isSignupView" />
    <v-row class="headerRow">
      <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">Login</h3>
    </v-row>
    <v-row class="loginEmailRow">
      <v-text-field
        v-model="email"
        class="custom-placeholer-color"
        id="input-10"
        placeholder="Email"
      ></v-text-field>
    </v-row>
    <v-row class="loginPasswordRow">
      <v-text-field
        v-model="password"
        class="custom-placeholer-color"
        id="input-10"
        :type="'password'"
        placeholder="Password"
        @keydown.enter="loginUser()"
      ></v-text-field>
    </v-row>
    <v-row class="buttonsRow">
      <v-btn tile class="loginButton" @click="loginUser()" outlined>Login</v-btn>
      <p role="button" class="forgotButton">Forgot password?</p>
    </v-row>
    <v-row class="socialRow">
      <p class="socialPhrase">Login using Social Media accounts</p>
    </v-row>
    <v-row class="socialButtonsRow">
      <v-btn tile class="googleButton" outlined>
        <v-icon>mdi-google</v-icon>
        <p>Google</p>
      </v-btn>
      <v-btn tile class="facebookButton" outlined>
        <v-icon>mdi-facebook</v-icon>
        <p>Facebook</p>
      </v-btn>
    </v-row>
    <v-row class="changeViewToSignup">
      <p role="button" @click="trySignup()">Create an account</p>
    </v-row>
  </v-card>
</template>
      
      <script>
import { mapGetters, mapActions } from "vuex";
import changeToLoginButton from "@/components/changeToLoginButton";
import axios from "axios";
import "animate.css";
export default {
  name: "Login",
  components: {
    changeToLoginButton
  },
  data: () => ({
    email: null,
    password: null
  }),
  computed: {
    ...mapGetters(["termStatus", "isLoginView", "isSignupView"])
  },
  methods: {
    ...mapActions(["login"]),
    async loginUser() {
      try {
        const email = this.email;
        const password = this.password;
        await this.login({ email, password });
        let id = this.$store.state.user._id;
        let projects = null;
        await axios.get(`/api/user/get-projects/${id}`).then(response => {
          projects = response.data;
        });
        this.$store.state.user.projects = projects.projects;
        console.log(projects);
        console.log(this.$store.state.user);
        this.$router.push(`/dashboard/${id}/Home`);
      } catch (error) {
        this.feedback = "Login failed: Invalid username or password.";
      }
    },
    trySignup() {
      this.$store.dispatch("changeToSignup");
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

.loginCard {
  background-color: #4e65df !important;
  opacity: 0.8;
  width: 40%;
  animation: fadein 1s;
  border-radius: 0 !important;
  padding-top: 8%;
  padding-bottom: 8%;
}
.loginCardNone {
  background-color: #4e65df !important;
  opacity: 0.8;
  width: 40%;
  border-radius: 0 !important;
  display: flex;
  justify-content: space-evenly;
  div {
    display: none;
  }
}
.headerRow {
  padding-left: 25%;
}
.loginEmailRow {
  padding-left: 25%;
  padding-right: 18%;
  padding-top: 5%;
}
.loginPasswordRow {
  padding-left: 25%;
  padding-right: 18%;
}

.buttonsRow {
  padding-left: 25%;
  padding-right: 0%;
  padding-top: 5%;
  padding-bottom: 20%;
}

.loginButton {
  border-width: 2px;
  color: white !important;
  width: 40%;
  height: 3rem !important;
  font-size: 1vw;
  text-transform: none;
  margin-right: 3%;
}
.forgotButton {
  color: white !important;
  opacity: 0.5;
  width: 30%;
  font-size: calc(0.5em + 0.8vmin) !important;
  padding-top: 2%;
}
.socialRow {
  padding-left: 25%;
}
.socialPhrase {
  width: fit-content;
  color: white !important;
  font-size: calc(0.5em + 0.8vmin) !important;
}
.socialButtonsRow {
  padding-left: 25%;
  padding-right: 0%;
  padding-top: 8%;
}
.googleButton {
  border-width: 2px;
  color: white !important;
  width: 40%;
  height: 3rem !important;
  font-size: calc(0.5em + 0.8vmin) !important;
  text-transform: none;
  margin-right: 3%;
  p {
    margin-left: 5%;
  }
}
.facebookButton {
  border-width: 2px;
  color: white !important;
  width: 40%;
  height: 3rem !important;
  font-size: calc(0.5em + 0.8vmin) !important;
  text-transform: none;
  margin-right: 3%;
  p {
    margin-left: 5%;
  }
}
.v-label.theme--light {
  left: 5% !important;
}
#input-10 {
  margin-left: 4%;
  color: white !important;
  animation: slideInLeft;
  animation-duration: 1s;
}
#input-13 {
  margin-left: 4%;
  color: white !important;
  animation: slideInLeft;
  animation-duration: 1s;
}
.custom-placeholer-color input::placeholder {
  color: white !important;
  opacity: 0.8;
  font-size: 15px !important;
}
.v-input__slot {
  color: white !important;
}
.changeViewToSignup {
  display: none;
}
@media screen and (max-width: 960px) {
  .loginCard {
    width: 100%;
    padding-top: 20%;
    padding-bottom: 10%;
  }
  .loginCardNone {
    width: 100%;
  }
  .changeViewToSignup {
    display: initial;
    justify-content: space-evenly;
    p {
      padding-top: 10%;
      color: lavenderblush;
    }
  }
}
@media screen and (max-width: 350px) {
  .googleButton {
    p {
      display: none;
    }
  }
  .facebookButton {
    p {
      display: none;
    }
  }
}
</style>
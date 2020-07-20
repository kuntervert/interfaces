<template>
  <v-card
    v-bind:class="{'signupCard': isSignupView===true,  'signupCardNone': isSignupView === false}"
  >
    <changeToSignupButton v-if="isLoginView" />
    <v-row class="signupHeaderRow">
      <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">Signup</h3>
    </v-row>
    <v-row class="signupEmailRow">
      <v-text-field
        v-model="username"
        id="input-10"
        class="custom-placeholer-color"
        placeholder="Name"
      ></v-text-field>
    </v-row>
    <v-row class="signupPasswordRow">
      <v-text-field
        id="input-10"
        class="custom-placeholer-color"
        :rules="emailRules"
        placeholder="Email"
        v-model="email"
      ></v-text-field>
    </v-row>
    <v-row class="signupPasswordRow">
      <v-text-field
        id="input-10"
        class="custom-placeholer-color"
        :type="'password'"
        placeholder="Password"
        v-model="password"
      ></v-text-field>
    </v-row>
    <v-row class="signupPasswordRow">
      <v-text-field
        v-model="repeatedPassword"
        id="input-10"
        :type="'password'"
        class="custom-placeholer-color"
        placeholder="Repeat password"
      ></v-text-field>
    </v-row>
    <v-row class="termsRow">
      <v-checkbox style="padding: 0; margin: 0;" @click="termsDialog=true" v-model="termStatus"></v-checkbox>
      <p
        style="font-size: 15px;"
        role="button"
        @click="$store.state.termDialog = true"
      >I agree to the terms and conditions</p>
    </v-row>
    <v-row class="signupButtonRow">
      <v-btn @click="signupUser()" tile class="loginButton" outlined>Sign up</v-btn>
    </v-row>
    <v-row class="changeViewToLogin">
      <p role="button" @click="tryLogin()">Login instead</p>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import changeToSignupButton from "@/components/changeToSignupButton";
import axios from "axios";
export default {
  name: "Signup",
  components: {
    changeToSignupButton
  },
  data: () => ({
    email: null,
    password: null,
    username: null,
    repeatedPassword: null,
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),
  computed: {
    ...mapGetters(["termStatus", "isLoginView", "isSignupView", "termDialog"])
  },
  methods: {
    ...mapActions(["signup"]),
    tryLogin() {
      this.$store.dispatch("changeToLogin");
    },
    async signupUser() {
      const email = this.email;
      const password = this.password;
      const password2 = this.repeatedPassword;
      const username = this.username;
      const userInfo = { email: email, password: password, username: username };
      if (password === password2) {
        if (!this.termStatus) {
          alert("Please accept the terms and conditions");
        } else {
          await axios.post("/api/user/signup", userInfo);
          alert("Successful");
        }
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

.signupCard {
  background-color: rgb(111, 93, 173) !important;
  width: 40%;
  opacity: 0.8;
  animation: fadein 1s;
  border-radius: 0 !important;
  padding-top: 8%;
  padding-bottom: 8%;
}
.signupCardNone {
  background-color: rgb(111, 93, 173) !important;
  width: 40%;
  opacity: 0.8;
  border-radius: 0 !important;
  display: flex;
  justify-content: space-evenly;
  div {
    display: none;
  }
}

.signupHeaderRow {
  padding-left: 25%;
  padding-top: 0;
}
.signupEmailRow {
  padding-top: 5%;
  padding-left: 25%;
  padding-right: 18%;
}
.signupPasswordRow {
  padding-left: 25%;
  padding-right: 18%;
}
.termsRow {
  padding-left: 25%;
  padding-right: 18%;
  padding-top: 2%;
  p {
    color: white;
    margin-left: 5%;
    font-size: calc(0.5em + 0.8vmin);
    width: 75%;
    text-align: left;
    padding-top: 0.5%;
  }
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

.signupButtonRow {
  padding-left: 25%;
  padding-right: 0%;
  padding-top: 5%;
}
.v-label.theme--light {
  left: 5% !important;
}
#input-10 {
  margin-left: 4%;
  color: white !important;
}
#input-13 {
  margin-left: 4%;
  color: white !important;
}
.custom-placeholer-color input::placeholder {
  color: white !important;
  opacity: 0.8;
  font-size: 15px !important;
}
.v-input__slot {
  color: white !important;
}
.changeViewToLogin {
  display: none;
}
@media screen and (max-width: 960px) {
  .signupCard {
    width: 100%;
    padding-top: 20%;
    padding-bottom: 10%;
  }
  .signupCardNone {
    width: 100%;
  }
  .changeViewToLogin {
    display: initial;
    justify-content: space-evenly;
    p {
      padding-top: 10%;
      color: lavenderblush;
    }
  }
}
</style>
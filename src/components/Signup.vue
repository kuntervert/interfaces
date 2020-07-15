<template>
  <v-card
    v-bind:class="{'signupCard': isSignupView===true,  'signupCardNone': isSignupView === false}"
  >
    <v-btn
      @click="trySignup()"
      v-if="isLoginView"
      outlined
      x-large
      class="changeScreenButton"
    >Signup</v-btn>
    <v-row class="headerRow">
      <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">Signup</h3>
    </v-row>
    <v-row class="passwordRow">
      <v-text-field id="input-10" class="custom-placeholer-color" placeholder="Email"></v-text-field>
    </v-row>
    <v-row class="passwordRow">
      <v-text-field
        id="input-10"
        class="custom-placeholer-color"
        :type="'password'"
        placeholder="Password"
      ></v-text-field>
    </v-row>
    <v-row class="passwordRow">
      <v-text-field id="input-10" class="custom-placeholer-color" placeholder="Repeat password"></v-text-field>
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
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Signup",

  data: () => ({
    checkbox1: false
  }),
  computed: {
    ...mapGetters(["termStatus", "isLoginView", "isSignupView", "termDialog"])
  },
  methods: {
    trySignup() {
      this.$store.dispatch("changeToSignup");
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

.headerRow {
  padding-left: 25%;
  padding-top: 25%;
}

.passwordRow {
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

.changeScreenButton {
  border-radius: 50%;
  border-width: 2px;
  color: white !important;
  height: 8rem !important;
  width: 8rem !important;
  font-size: 1rem !important;
  transition: width 2s, height 2s;
  margin-top: 50%;
}
.changeScreenButton:hover {
  height: 25% !important;
  width: 35% !important;
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

.signupCard {
  background-color: rgb(111, 93, 173) !important;
  width: 40%;
  opacity: 0.8;
  animation: fadein 1s;
  border-radius: 0 !important;
}
.signupCardNone {
  background-color: rgb(111, 93, 173) !important;
  width: 40%;
  opacity: 0.8;
  border-radius: 0 !important;
  div {
    display: none;
  }
}
.signupButtonRow {
  padding-left: 25%;
  padding-right: 0%;
  padding-top: 5%;
  padding-bottom: 20%;
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
</style>
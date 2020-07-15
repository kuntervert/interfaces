<template>
  <v-card v-bind:class="{'loginCard': isLoginView===true,  'loginCardNone': isLoginView === false}">
    <changeToLoginButton v-if="isSignupView" />
    <v-row class="headerRow">
      <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">Login</h3>
    </v-row>
    <v-row class="loginEmailRow">
      <v-text-field class="custom-placeholer-color" id="input-10" placeholder="Email"></v-text-field>
    </v-row>
    <v-row class="loginPasswordRow">
      <v-text-field
        class="custom-placeholer-color"
        id="input-10"
        :type="'password'"
        placeholder="Password"
      ></v-text-field>
    </v-row>
    <v-row class="buttonsRow">
      <v-btn tile class="loginButton" outlined>Login</v-btn>
      <p role="button" class="forgotButton">Forgot password?</p>
    </v-row>
    <v-row class="socialRow">
      <h4
        class="display-2 font-weight-bold mb-3;"
        style="color: white; font-size: 15px;"
      >Login using Social Media accounts</h4>
    </v-row>
    <v-row class="socialButtonsRow">
      <v-btn tile class="googleButton" outlined>
        <v-icon left>mdi-google</v-icon>Google
      </v-btn>
      <v-btn tile class="facebookButton" outlined>
        <v-icon left>mdi-facebook</v-icon>Facebook
      </v-btn>
    </v-row>
  </v-card>
</template>
      
      <script>
import { mapGetters } from "vuex";
import changeToLoginButton from "@/components/changeToLoginButton";
export default {
  name: "Login",
  components: {
    changeToLoginButton
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["termStatus", "isLoginView", "isSignupView"])
  },
  methods: {}
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
  padding-top: 25%;
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
.socialButtonsRow {
  padding-left: 25%;
  padding-right: 0%;
  padding-top: 8%;
  padding-bottom: 20%;
}
.googleButton {
  border-width: 2px;
  color: white !important;
  width: 40%;
  height: 3rem !important;
  font-size: 0.8vw;
  text-transform: none;
  margin-right: 3%;
}
.facebookButton {
  border-width: 2px;
  color: white !important;
  width: 40%;
  height: 3rem !important;
  font-size: 0.8vw;
  text-transform: none;
  margin-right: 3%;
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
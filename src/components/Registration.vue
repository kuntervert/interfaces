<template>
  <v-container>
    <v-row class="mainRow">
      <v-card v-bind:class="{'loginCard': login===true,  'loginCardNone': login === false}">
        <v-btn @click="tryLogin()" v-if="signup" outlined x-large class="changeScreenButton">Login</v-btn>
        <v-row class="headerRow">
          <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">Login</h3>
        </v-row>
        <v-row class="emailRow">
          <v-text-field class="custom-placeholer-color" id="input-10" placeholder="Email"></v-text-field>
        </v-row>
        <v-row class="passwordRow">
          <v-text-field
            class="custom-placeholer-color"
            id="input-10"
            :type="show3 ? 'text' : 'password'"
            placeholder="Password"
          ></v-text-field>
        </v-row>
        <v-row class="buttonsRow">
          <v-btn tile class="loginButton" outlined>Login</v-btn>
          <v-btn outlined depressed class="forgotButton">Forgot password?</v-btn>
        </v-row>
        <v-row class="socialRow">
          <h4
            class="display-2 font-weight-bold mb-3;"
            style="color: white;"
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

      <v-card v-bind:class="{'signupCard': signup===true,  'signupCardNone': signup === false}">
        <v-btn @click="trySignup()" v-if="login" outlined x-large class="changeScreenButton">Signup</v-btn>
        <v-row class="headerRow">
          <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">Signup</h3>
        </v-row>
        <v-row class="emailRow">
          <v-text-field id="input-10" class="custom-placeholer-color" placeholder="First name"></v-text-field>
        </v-row>

        <v-row class="passwordRow">
          <v-text-field id="input-10" class="custom-placeholer-color" placeholder="Last name"></v-text-field>
        </v-row>
        <v-row class="passwordRow">
          <v-text-field id="input-10" class="custom-placeholer-color" placeholder="Email"></v-text-field>
        </v-row>
        <v-row class="passwordRow">
          <v-text-field
            id="input-10"
            class="custom-placeholer-color"
            :type="show3 ? 'text' : 'password'"
            placeholder="Password"
          ></v-text-field>
        </v-row>
        <v-row class="passwordRow">
          <v-text-field
            id="input-10"
            class="custom-placeholer-color"
            placeholder="Company name (optional)"
          ></v-text-field>
        </v-row>
        <v-row class="signupButtonRow">
          <v-btn tile class="loginButton" outlined>Sign up</v-btn>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Registration",

  data: () => ({
    login: false,
    signup: true
  }),
  methods: {
    trySignup() {
      this.signup = true;
      this.login = false;
    },
    tryLogin() {
      this.login = true;
      this.signup = false;
    }
  }
};
</script>

<style lang="scss">
.mainRow {
  background-position: center;
  background-size: 80% 100%;
  background-repeat: no-repeat;
  background-image: url("https://i.gyazo.com/37c875e1ec466cbc5b67a18f0e16a383.jpg");
  margin-top: 0%;
  justify-content: center;
}
.loginCard {
  background-color: #4e65df !important;
  opacity: 0.9;
  width: 40%;
}
.loginCardNone {
  background-color: #4e65df !important;
  opacity: 0.9;
  width: 40%;
  div {
    display: none;
  }
}
.headerRow {
  padding-left: 25%;
  padding-top: 25%;
}
.emailRow {
  padding-left: 25%;
  padding-right: 18%;
  padding-top: 5%;
}
.passwordRow {
  padding-left: 25%;
  padding-right: 18%;
}
.buttonsRow {
  padding-left: 25%;
  padding-right: 0%;
  padding-top: 5%;
  padding-bottom: 15%;
}
.changeScreenButton {
  border-radius: 50%;
  border-width: 2px;
  color: white !important;
  height: 20% !important;
  width: 30% !important;
  left: 0%;
  margin-top: 40% !important;
  font-size: 0.8vw;
  transition: width 2s, height 2s;
}
.changeScreenButton:hover {
  height: 30% !important;
  width: 40% !important;
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
  border: none;
  width: 30%;
  height: 3rem !important;
  font-size: 0.8vw;
  text-transform: none;
}
.socialRow {
  padding-left: 25%;
}
.socialButtonsRow {
  padding-left: 25%;
  padding-right: 0%;
  padding-top: 5%;
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
.signupCard {
  background-color: rgb(111, 93, 173) !important;
  width: 40%;
  opacity: 0.9;
}
.signupCardNone {
  background-color: rgb(111, 93, 173) !important;
  width: 40%;
  opacity: 0.9;
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
}
.v-input__slot {
  color: white !important;
}
</style>
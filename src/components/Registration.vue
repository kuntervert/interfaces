<template>
  <v-container >
    <v-row style=" background-position: center; background-size: 80% 100%;
  background-repeat: no-repeat;background-image: url('https://i.gyazo.com/37c875e1ec466cbc5b67a18f0e16a383.jpg'); margin-top: 0%;justify-content:center; " class="text-center">
      <v-card v-bind:class="{'loginCard': login===true,  'loginCardNone': login === false}">
          <v-btn @click="tryLogin()" v-if="signup" outlined x-large style="border-radius: 50%; border-width: 2px; color: white;
    height: 20%;
    width: 30%;  left:0%; top:40%;font-size:0.8vw; ">Login</v-btn>
        <v-row  style="padding-left:25%; padding-top: 25%">
            <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">
            Login
            </h3>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 18%; padding-top: 5%">
            <v-text-field class="custom-placeholer-color" id="input-10" placeholder="Email"></v-text-field>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 18%">
            <v-text-field class="custom-placeholer-color" id="input-10" :type="show3 ? 'text' : 'password'" placeholder="Password"></v-text-field>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 0%; padding-top: 5%; padding-bottom: 15%">
            <v-btn tile style="border-width: 2px; color: white; width: 40%; height: 3rem !important; font-size:1vw; text-transform: none; margin-right: 3%" outlined>Login</v-btn>
            <v-btn outlined depressed style=" color: white; opacity:0.5; border: none; width: 30%; height: 3rem !important; font-size:0.8vw; text-transform: none" >Forgot password?</v-btn>
        </v-row>
        <v-row style="padding-left: 25%">
        <h4 class="display-2 font-weight-bold mb-3;" style="color: white;">
            Login using Social Media accounts 
            </h4>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 0%; padding-top: 5%; padding-bottom: 20%">
            
            <v-btn tile style="border-width: 2px; color: white; width: 40%; height: 3rem !important; font-size:0.8vw; text-transform: none; margin-right: 3%" outlined> <v-icon left>mdi-google</v-icon> Google</v-btn>
            <v-btn tile style="border-width: 2px; color: white; width: 40%; height: 3rem !important; font-size:0.8vw; text-transform: none; margin-right: 3%" outlined ><v-icon left>mdi-facebook</v-icon> Facebook</v-btn>
        </v-row>
      </v-card>








      <v-card v-bind:class="{'signupCard': signup===true,  'signupCardNone': signup === false}">
          <v-btn @click="trySignup()" v-if="login" outlined x-large style="border-radius: 50%; border-width: 2px; color: white;
    height: 20%;
    width: 30%;  left:0%; top:40%;font-size:0.8vw; ">Signup</v-btn>
        <v-row  style="padding-left:25%; padding-top: 25%">
            <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">
            Signup
            </h3>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 18%; padding-top: 5%">
            <v-text-field id="input-10" class="custom-placeholer-color" placeholder="First name"></v-text-field>
        </v-row>

                <v-row style="padding-left:25%; padding-right: 18%;">
            <v-text-field id="input-10" class="custom-placeholer-color" placeholder="Last name"></v-text-field>
        </v-row>
                <v-row style="padding-left:25%; padding-right: 18%; ">
            <v-text-field id="input-10" class="custom-placeholer-color" placeholder="Email"></v-text-field>
        </v-row>
                <v-row style="padding-left:25%; padding-right: 18%">
            <v-text-field id="input-10" class="custom-placeholer-color" :type="show3 ? 'text' : 'password'" placeholder="Password"></v-text-field>
        </v-row>
                <v-row style="padding-left:25%; padding-right: 18%;">
            <v-text-field id="input-10" class="custom-placeholer-color" placeholder="Company name (optional)"></v-text-field>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 0%; padding-top: 5%; padding-bottom: 20%">
            <v-btn tile style="border-width: 2px; color: white; width: 40%; height: 3rem !important; font-size:1vw; text-transform: none; margin-right: 3%" outlined>Sign up</v-btn>
        </v-row>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Registration',

    data: () => ({
     login: false,
     signup: true,
    }),
    methods: {
        trySignup() {
            this.signup = true
            this.login = false
        },
        tryLogin() {
            this.login = true
            this.signup = false
        }
    }
  }
</script>

<style lang="scss">

.loginCard {
    background-color: #4E65DF !important;
    opacity: 0.9; 
    width: 40%;
}
.loginCardNone {
    background-color: #4E65DF !important;
    opacity: 0.9; 
    width: 40%;
    div{
    display: none;
}}
.signupCard {
    background-color: rgb(111, 93, 173) !important; 
    width: 40%;
    opacity: 0.9;
}
.signupCardNone {
    background-color: rgb(111, 93, 173) !important; 
    width: 40%;
    opacity: 0.9;
    div{
    display: none;
}
}
#input-10 {
    margin-left:4%;
    color:white;
}
#input-13 {
    margin-left:4%;
    color:white;
}
.custom-placeholer-color input::placeholder {
  color: white!important;
  opacity: 0.8;
}
.v-input__slot {
    color: white;
}

</style>
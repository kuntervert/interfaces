<template>
  <v-container>
    <v-row style="margin-top: 0%;justify-content:center" class="text-center">
      <v-card style="background-color: #4E65DF; opacity: 0.8; width: 40%;">
        <v-row  style="padding-left:25%; padding-top: 25%">
            <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">
            Login
            </h3>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 18%; padding-top: 5%">
            <v-text-field placeholder="Email"></v-text-field>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 18%">
            <v-text-field :type="show3 ? 'text' : 'password'" placeholder="Password"></v-text-field>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 0%; padding-top: 5%; padding-bottom: 15%">
            <v-btn tile style="border-width: 2px; color: white; width: 40%; height: 3rem !important; font-size:0.8rem; text-transform: none; margin-right: 3%" outlined>Login</v-btn>
            <v-btn outlined depressed style=" color: white; opacity:0.5; border: none; width: 30%; height: 3rem !important; font-size:0.8rem; text-transform: none" >Forgot password?</v-btn>
        </v-row>
        <v-row style="padding-left: 25%">
        <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">
            Login using Social Media accounts 
            </h3>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 0%; padding-top: 5%; padding-bottom: 20%">
            
            <v-btn tile style="border-width: 2px; color: white; width: 40%; height: 3rem !important; font-size:0.8rem; text-transform: none; margin-right: 3%" outlined> <v-icon left>mdi-google</v-icon> Google</v-btn>
            <v-btn tile style="border-width: 2px; color: white; width: 40%; height: 3rem !important; font-size:0.8rem; text-transform: none; margin-right: 3%" outlined ><v-icon left>mdi-facebook</v-icon> Facebook</v-btn>
        </v-row>
      </v-card>








      <v-card style="background-color: #7774E5; width: 40%;">
        <v-row  style="padding-left:25%; padding-top: 25%">
            <h3 class="display-2 font-weight-bold mb-3;" style="color: white;">
            Signup
            </h3>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 18%; padding-top: 5%">
            <v-text-field placeholder="First name"></v-text-field>
        </v-row>

                <v-row style="padding-left:25%; padding-right: 18%;">
            <v-text-field placeholder="Last name"></v-text-field>
        </v-row>
                <v-row style="padding-left:25%; padding-right: 18%; ">
            <v-text-field placeholder="Email"></v-text-field>
        </v-row>
                <v-row style="padding-left:25%; padding-right: 18%">
            <v-text-field :type="show3 ? 'text' : 'password'" placeholder="Password"></v-text-field>
        </v-row>
                <v-row style="padding-left:25%; padding-right: 18%;">
            <v-text-field placeholder="Company name (optional)"></v-text-field>
        </v-row>
        <v-row style="padding-left:25%; padding-right: 0%; padding-top: 5%; padding-bottom: 20%">
            <v-btn tile style="border-width: 2px; color: white; width: 40%; height: 3rem !important; font-size:0.8rem; text-transform: none; margin-right: 3%" outlined>Sign up</v-btn>
        </v-row>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Registration',

    data: () => ({
     
    }),
  }
</script>

<style lang="scss">

#input-10 {
    margin-left:4%;
    color:white;
}
#input-13 {
    margin-left:4%;
    color:white;
}
.v-input__slot {
    color: white;
}
</style>
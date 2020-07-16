<template>
  <v-btn @click="trySignup()" outlined x-large class="changeToSignup">Signup</v-btn>
</template>

<script>
export default {
  name: "changeToSignupButton",

  data: () => ({}),

  methods: {
    trySignup() {
      this.$store.dispatch("changeToSignup");
    }
  }
};
</script>

<style>
.changeToSignup {
  border-radius: 50%;
  border-width: 2px;
  color: white !important;
  height: 8rem !important;
  width: 8rem !important;
  font-size: 1rem !important;
  transition: width 2s, height 2s;
  align-self: center;
}
.changeToSignup:hover {
  height: 25% !important;
  width: 35% !important;
}
@media screen and (max-width: 960px) {
  .changeToSignup {
    display: none;
  }
}
</style>
<template>
  <v-btn @click="tryLogin()" outlined x-large class="changeScreenButton">Login</v-btn>
</template>

<script>
export default {
  name: "changeToLoginButton",
  data: () => ({}),
  methods: {
    tryLogin() {
      this.$store.dispatch("changeToLogin");
    }
  }
};
</script>

<style>
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
</style>
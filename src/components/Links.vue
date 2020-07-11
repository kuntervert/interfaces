<template>
  <v-container>
    <v-row class="linksRow">
      <!-- <router-link to="/register">Login / Register</router-link>Live previews for -->
      <a class="loginView" href="http://localhost:8080/#/register">Login & Signup</a>
      <img class="loginImg" src="https://i.gyazo.com/948faaaa0ab14d47509e9c702b4e17d2.png" />
    </v-row>
    <v-row></v-row>
  </v-container>
</template>

<script>
export default {
  name: "Links",

  data: () => ({})
};
</script>
<style lang="scss" scoped>
.linksRow {
  justify-content: center;
}
.loginImg {
  display: none;
}
a.loginView:hover + .loginImg {
  display: block;
  position: fixed;
  bottom: 10%;
}
</style>

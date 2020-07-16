<template>
  <v-container>
    <v-row class="linksRow">
      <a class="loginView" @click="$router.push('/register')">Login & Signup</a>
      <img class="loginImg" src="https://i.gyazo.com/948faaaa0ab14d47509e9c702b4e17d2.png" />
      <div style="width: 2%;" />
      <a class="termsView" @click="$router.push('/terms')">Terms & Conditions</a>
      <img class="termsImg" src="https://i.gyazo.com/d6e1375e75dd24dda5b64b400de155e3.png" />
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
.loginView {
  cursor: pointer;
}
.loginView:hover + .loginImg {
  display: flex;
  position: fixed;
  top: 30%;
  max-height: 50%;
  bottom: 10%;
}
.termsImg {
  display: none;
}
.termsView {
  cursor: pointer;
}
a.termsView:hover + .termsImg {
  display: flex;
  position: fixed;
  top: 30%;
  max-height: 50%;
  bottom: 10%;
}
</style>

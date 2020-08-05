<template>
  <v-app>
    <div style="background-color:#c4c4c4; height: 100vh; " id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  p {
    margin-bottom: 0;
  }
}
// #app {
//   overflow-y: scroll;
//   scrollbar-width: none; /* Firefox */
//   -ms-overflow-style: none; /* Internet Explorer 10+ */
// }
// #app::-webkit-scrollbar {
//   /* WebKit */
//   width: 0;
//   height: 0;
// }
</style>

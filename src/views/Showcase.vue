<template>
  <div class="home">
    <img style="width: 10%; height: 10%;" alt="Css logo" src="../assets/css.jpg" />
    <Links />
    <div>Be sure to signup and test the application!</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Links from "@/components/Links.vue";

export default {
  name: "Home",
  components: {
    Links,
  },
};
</script>

<template>
  <div style="position: fixed;z-index:190; height: 100vh; width: 100vw;">
    <v-card class="mainCard">
      <p style="padding: 5%">{{termText}}</p>
      <v-btn @click="agreeToTerms()" outlined class="agreeBtn">I accept the terms</v-btn>
    </v-card>
  </div>
</template>


<script>
export default {
  name: "Terms",

  data: () => ({
    termText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin. Nunc id cursus metus aliquam. Mi bibendum neque egestas congue. Viverra mauris in aliquam sem fringilla ut. Congue quisque egestas diam in. Nulla facilisi cras fermentum odio. Lacinia at quis risus sed vulputate odio. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit tellus mauris a diam maecenas sed. Egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium. Maecenas pharetra convallis posuere morbi leo urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin. Nunc id cursus metus aliquam. Mi bibendum neque egestas congue. Viverra mauris in aliquam sem fringilla ut. Congue quisque egestas diam in. Nulla facilisi cras fermentum odio. Lacinia at quis risus sed vulputate odio. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit tellus mauris a diam maecenas sed. Egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium. Maecenas pharetra convallis posuere morbi leo urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin. Nunc id cursus metus aliquam. Mi bibendum neque egestas congue. Viverra mauris in aliquam sem fringilla ut. Congue quisque egestas diam in. Nulla facilisi cras fermentum odio. Lacinia at quis risus sed vulputate odio. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit tellus mauris a diam maecenas sed. Egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium. Maecenas pharetra convallis posuere morbi leo urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin. Nunc id cursus metus aliquam. Mi bibendum neque egestas congue. Viverra mauris in aliquam sem fringilla ut. Congue quisque egestas diam in. Nulla facilisi cras fermentum odio. Lacinia at quis risus sed vulputate odio. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit tellus mauris a diam maecenas sed. Egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium. Maecenas pharetra convallis posuere morbi leo urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin. Nunc id cursus metus aliquam. Mi bibendum neque egestas congue. Viverra mauris in aliquam sem fringilla ut. Congue quisque egestas diam in. Nulla facilisi cras fermentum odio. Lacinia at quis risus sed vulputate odio. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit tellus mauris a diam maecenas sed. Egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium. Maecenas pharetra convallis posuere morbi leo urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin. Nunc id cursus metus aliquam. Mi bibendum neque egestas congue. Viverra mauris in aliquam sem fringilla ut. Congue quisque egestas diam in. Nulla facilisi cras fermentum odio. Lacinia at quis risus sed vulputate odio. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit tellus mauris a diam maecenas sed. Egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium. Maecenas pharetra convallis posuere morbi leo urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin. Nunc id cursus metus aliquam. Mi bibendum neque egestas congue. Viverra mauris in aliquam sem fringilla ut. Congue quisque egestas diam in. Nulla facilisi cras fermentum odio. Lacinia at quis risus sed vulputate odio. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit tellus mauris a diam maecenas sed. Egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium. Maecenas pharetra convallis posuere morbi leo urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin. Nunc id cursus metus aliquam. Mi bibendum neque egestas congue. Viverra mauris in aliquam sem fringilla ut. Congue quisque egestas diam in. Nulla facilisi cras fermentum odio. Lacinia at quis risus sed vulputate odio. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit tellus mauris a diam maecenas sed. Egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium. Maecenas pharetra convallis posuere morbi leo urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin. Nunc id cursus metus aliquam. Mi bibendum neque egestas congue. Viverra mauris in aliquam sem fringilla ut. Congue quisque egestas diam in. Nulla facilisi cras fermentum odio. Lacinia at quis risus sed vulputate odio. Consectetur a erat nam at lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Suscipit tellus mauris a diam maecenas sed. Egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit. Tellus cras adipiscing enim eu turpis egestas pretium. Maecenas pharetra convallis posuere morbi leo urna."
  }),
  methods: {
    agreeToTerms() {
      this.$emit("agreed");
    }
  }
};
</script>
<style lang="scss">
.mainCard {
  position: fixed;
  width: 20%;
  height: 50%;
  z-index: 200;
  left: 40%;
  top: 20%;
  overflow-y: auto;
  -webkit-box-shadow: -5px 31px 64px -27px rgba(74, 74, 74, 1) !important;
  -moz-box-shadow: -5px 31px 64px -27px rgba(74, 74, 74, 1) !important;
  box-shadow: -5px 31px 64px -27px rgba(74, 74, 74, 1) !important;
  animation: fadein 1s;
  .agreeBtn {
    margin-top: 5%;
    margin-bottom: 5%;
    border: none !important;
    color: gray;
    font-size: 0.8vw;
  }
}
.mainCard::-webkit-scrollbar {
  display: none;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
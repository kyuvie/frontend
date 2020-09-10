<template>
  <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
  <div id="head">
    <Menu />
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col cols="12" class="text-center mt-5 pt-5">
          <!--<h1 id="home-title" class="font-weight-light"></h1>-->
          <h1><span id="home-title"></span></h1>
          <p class="lead">毎日 が Everyday</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Typed from "typed.js";
import Menu from "@/components/Menu.vue";

export default {
  components: {
    Menu,
  },
  mounted() {
    new Typed("#home-title", {
      strings: ['b1u3', 'kyuvie', 'Enuwai\'s ^500 Artwork'],
      typeSpeed: 100,
    });
  },
};

// @ is an alias to /src
/*
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
*/
</script>

<style>
#head {
  overflow: hidden;
  height: 100vh;
  min-height: 500px;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
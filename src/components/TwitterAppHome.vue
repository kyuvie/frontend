<template>
  <div class="n-twitter-y">
    <b-container>
      <b-row class="justify-content-center">
        <Menu />
      </b-row>
      <b-row class="justify-content-center">
        <span>選ばれし者だけがログイン・ツイートできます</span>
      </b-row>
      <b-row class="justify-content-center">
        <span>(えぬわいさんの独断と偏見)</span>
      </b-row>
      <b-row class="justify-content-center">
        <TwitterAppMenu />
      </b-row>
      <b-row>
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import TwitterAppMenu from "./TwitterAppMenu.vue";
import { mapState } from "vuex";
export default {
  components: {
    Menu,
    TwitterAppMenu,
  },
  props: ["title"],
  data() {
    return {
      textarea: "",
      textIsEditable: true,
    };
  },
  computed: {
    ...mapState(["isAuthenticated", "user"]),
  },
  methods: {
    LoginWithTwitter() {
      this.$store.dispatch("authenticate", "twitter");
    },
  },
};
</script>

<style scoped>
.n-twitter-y {
  overflow: hidden;
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: repeating-linear-gradient(
    45deg,
    #676f74,
    #676f74 14.3%,
    white 14.3%,
    white 28.6%
  );
}
</style>
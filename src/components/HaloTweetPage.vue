<template>
  <b-col cols="12">
    <b-row>
      <b-col>
        <h1>{{ title }}</h1>
      </b-col>
    </b-row>
    <b-row v-if="user" class="justify-content-start" align-v="center">
      <b-col cols="auto">
        <b-avatar class="mt-1" size="3em" :src="user.thumbnail"></b-avatar>
      </b-col>
      <b-col cols="auto">
        <b-row>
          <span>{{ user.name }}</span>
        </b-row>
        <b-row>
          <span>@{{ user.screen_name }}</span>
        </b-row>
      </b-col>
    </b-row>
    <b-row v-else class="justify-content-center">
      <b-col cols="auto">
        <b-button @click="LoginWithTwitter" variant="primary" pill>Twitterでログイン</b-button>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mt-3" align-v="center">
      <b-col cols="auto">
        <b-button :disabled="!user" pill variant="primary" @click="TweetButtonClick">えみりあたん！！！！</b-button>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["title"],
  async mounted() {
    try {
      const res = await this.axios.get("https://b1u3-website.herokuapp.com/api/detail/");
      this.$store.dispatch("loadUser", res.data);
    } catch {
      localStorage.removeItem("n-twitter-y.token");
      return;
    }
  },
  data() {
    return {
        textare: '',
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
    TweetButtonClick() {
      this.axios
        .post("https://b1u3-website.herokuapp.com/api/halo/", { })
        .then((res) => {
          if (res.data.status == 200) {
            alert(res.data.msg);
            this.textarea = "";
          } else {
            alert(res.data.msg);
          }
        });
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
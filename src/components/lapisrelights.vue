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
    <b-row v-if="number" class="justify-content-center mt-3" align-v="center">
      <youtube video-id="v5XVk4x_amw" />
    </b-row>
    <b-row class="justify-content-center mt-3" align-v="center">
      <b-col cols="auto">
      <span>↓まだツイートされません。</span>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mt-3" align-v="center">
      <b-col cols="auto">
        <b-button :disabled="!user" pill variant="primary" @click="GetNumber">7000垓チャレンジ</b-button>
      </b-col>
    </b-row>
    <b-row v-if="number" class="justify-content-center mt-3" align-v="center">
      <b-col cols="auto">
      <span>{{number}}の空で</span>
      </b-col>
    </b-row>
    <b-row v-if="number && !isLastTweeted" class="justify-content-center mt-3" align-v="center">
      <b-col cols="auto">
        <!--<b-button :disabled="!user" pill variant="primary" @click="TweetButtonClick">tweet</b-button>-->
        <b-button @click="ShowConfirmDialog">tweet</b-button>
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
      number: '',
      isLastTweeted: false,
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
        .post("https://b1u3-website.herokuapp.com/api/the_sky_of_7000_gai/tweet_number/", { })
        .then((res) => {
          if (res.data.status == 200) {
            alert(res.data.msg);
            this.textarea = "";
            this.isLastTweeted = true
          } else {
            alert(res.data.msg);
          }
        });
    },
    async GetNumber() {
      const res = await this.axios.post("https://b1u3-website.herokuapp.com/api/the_sky_of_7000_gai/get_number/")
      if (res.data.status == "200") {
        this.number = res.data.number
        this.isLastTweeted = false
      }
    },
    async ShowConfirmDialog() {
      let msg = 'ツイートしていい？'
      let loop = true
      while (loop) {
        const value = await this.$bvModal.msgBoxConfirm(msg)
        if (value) {
          this.TweetButtonClick()
          loop = false;
        } else {
          msg = 'して'
        }
      }

    }
  },
};
</script>

<style scoped>
.n-twitter-y {
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
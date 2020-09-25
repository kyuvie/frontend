<template>
  <twitter-app-home />
</template>

<script>
import TwitterAppHome from '../components/TwitterAppHome.vue'
<<<<<<< HEAD
// import { mapState } from 'vuex'
=======
>>>>>>> develop
export default {
  components: {
    TwitterAppHome,
  },
<<<<<<< HEAD
  /*
  async mounted () {
    try {
      const res = await this.axios.get('http://127.0.0.1:8000/api/detail/')
      this.$store.dispatch('loadUser', res.data)
      console.log(res.data)
    } catch {
    localStorage.removeItem('n-twitter-y.token')
      return;
    }
  },
  data() {
    return {
      textarea: ''
    }
  },
  computed: {
    ...mapState([
      'isAuthenticated',
      'user',
    ])
  },
  methods: {
    LoginWithTwitter() {
      this.$store.dispatch('authenticate', 'twitter')
    },
    TweetButtonClick() {
      this.axios.post('http://127.0.0.1:8000/api/tweet/', { 'tweet': this.textarea }).then(
        res => { if (res.data.status == 200) {alert(res.data.msg);this.textarea = ""} else { alert(res.data.msg) } }
      )
    },
  }
  */
=======
>>>>>>> develop
}
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
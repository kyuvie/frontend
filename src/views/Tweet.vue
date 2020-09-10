<template>
  <div class="tweet">
    <b-container>
      <b-row>
        <b-col>
          <h1>えぬTweetわい</h1>
        </b-col>
      </b-row>
      <b-row v-if="isAuthenticated" class="justify-content-start" align-v="center">
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
      <b-row class="mt-3">
        <b-col>
          <b-form-textarea :disabled="!isAuthenticated" v-model="textarea" placeholder="Tweet text" rows="5" max-rows="5"></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="justify-content-end mt-3" align-v="center">
        <b-col cols="auto">
          <b-button :disabled="!isAuthenticated" pill variant="primary" @click="TweetButtonClick">Tweet</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
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
        res => { if (res.data.status == 200) {alert('Tweet success');this.textarea = ""} else { alert('Tweet failed') } }
      )
    },
  }
}
</script>
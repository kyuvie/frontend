import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import { VueAuthenticate } from 'vue-authenticate'
import axios from 'axios';

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: 'http://127.0.0.1:8000',
  tokenPath: 'token',
  tokenType: 'Token',
  storageNamespace: 'n-twitter-y',
  tokenPrefix: '',
  providers: {
    twitter: {
      url: '/api/login/social/knox_user/twitter',
      redirectUri: 'http://127.0.0.1:8080/tweet',
    }
  }
})

export default new Vuex.Store({
  strict: true,
  state: {
    isAuthenticated: false,
    user: null,
  },
  getters: {
    isAuthenticated() {
      return this.$auth.isAuthenticated()
    }
  },
  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated
    },
    user(state, payload) {
      state.user = payload
      state.count++
    }
  },
  actions: {
    async authenticate({ commit }, provider) {
      await vueAuth.authenticate(provider)
      commit('isAuthenticated', { isAuthenticated: vueAuth.isAuthenticated() })
      if (this.state.isAuthenticated) {
        // axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('vue-authenticate.vueauth_token')}`
        const res = await axios.get('http://127.0.0.1:8000/api/detail/')
        commit('user', res.data)
      }
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import { VueAuthenticate } from 'vue-authenticate'
import axios from 'axios';

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
  baseUrl: 'https://b1u3-website.herokuapp.com',
  tokenPath: 'token',
  tokenType: 'Token',
  storageNamespace: 'n-twitter-y',
  tokenPrefix: '',
  providers: {
    twitter: {
      url: '/api/login/social/knox_user/twitter',
      redirectUri: 'https://nifty-goldwasser-29b584.netlify.app/',
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
        const res = await axios.get('https://b1u3-website.herokuapp.com/api/detail/')
        this.dispatch('loadUser', res.data)
      }
    },
    loadUser({ commit }, userInfo) {
      commit('user', userInfo)
    }

  },
  modules: {
  }
})

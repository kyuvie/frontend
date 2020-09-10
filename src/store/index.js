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
  providers: {
    twitter: {
      url: '/api/login/social/token_user/twitter'
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
    authenticate({ commit }, provider) {
      vueAuth.authenticate(provider).then(() => {
        commit('isAuthenticated', {
          isAuthenticated: vueAuth.isAuthenticated(),
        })
        if (this.state.isAuthenticated) {
          axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('vue-authenticate.vueauth_token')}`
          axios.get('http://127.0.0.1:8000/api/detail/').then((response) => {
            commit('user', response.data)
          })
        }
      })
    }
  },
  modules: {
  }
})

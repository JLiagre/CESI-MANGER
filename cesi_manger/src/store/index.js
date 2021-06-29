import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import router from '../router';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {},
    connected: false,
  },
  getters: {},
  mutations: {
    // mutating your user state
    isconnected() {
      console.log('OKEEEEE')
      this.state.connected = !this.state.connected
    },
  },
  actions: {
    async login(context, credentials) {
      return axios
        .post('api/auth', credentials)
        .then(() => {
          // console.log(response);
          context.commit("isconnected")
          router.push({name: 'Profil'});
        })
        .catch(function (error) {
          // handle error
          console.log('nope')
          console.log(error)
        })
    },
  },

})
export default store

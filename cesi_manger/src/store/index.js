import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    user: [],
    connected: false,
  },
  getters: {
    getID: state => {
      return state.user.ID
}
  },
  mutations: {
    // mutating your user state
    isconnected(state, userData) {
      state.connected = !this.state.connected
      state.user = userData
    },
    logoutUser(state) {
      state.connected = !state.connected
      state.user = []
    },
  },
  actions: {
    async login(context, credentials) {
      return await axios
        .post('/api/auth', credentials)
        .then((response) => {
          console.log(response.data.recordset[0])
          context.commit('isconnected', response.data.recordset[0])
          router.push({ name: 'Profil' })
        })
        .catch(function (error) {
          // handle error
          console.log('nope')
          console.log(error)
        })
    },
    logout(context) {
      context.commit('logoutUser')
      router.push({ name: 'home' })
    },
    async signup(context, credentials) {
      return await axios
        .post('/api/auth/signup', credentials)
        .then(() => {
          console.log('User created ')
          router.push({ name: 'login' })
        })
        .catch(function (error) {
          // handle error
          console.log('nope')
          console.log(error)
        })
    },
    async createRestaurant(context, data) {
      return await axios
        .post('/api/restaurant/create', data)
        .then(() => {
          console.log('Restaurant created ')
          router.push({ name: '/' })
        })
        .catch(function (error) {
          console.log('nope')
          console.log(error)
        })
    },
  },
})

export default store

import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    user: [],
    connected: false,
    restaurantList: [],
    selectedRestaurant: [],
  },
  getters: {
    getID: (state) => {
      return state.user.ID
    },
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
    updateUser(state, user) {
      state.user = user
    },
    restaurantListChange(state, list) {
      state.restaurantList = list
      console.log(state.restaurantList)
    },
    selectedRestaurant(state, list) {
      state.selectedRestaurant = list
      console.log(state.restaurantList)
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
          router.push({ name: 'restaurants' })
        })
        .catch(function (error) {
          console.log('nope')
          console.log(error)
        })
    },
    async getRestaurants(context) {
      return await axios
        .get('/api/restaurant', {
          params: {
            id: this.state.user.ID,
          },
        })
        .then((response) => {
          console.log('Restaurant list for this user ')
          console.log(response.data)
          context.commit('restaurantListChange', response.data)
          router.push({ name: 'restaurants' })
        })
        .catch(function (error) {
          console.log('nope')
          console.log(error)
        })
    },
    async deleteRestaurant(context, id) {
      console.log(id)
      return await axios
        .get('/api/restaurant/delete', {
          params: {
            id: id,
          },
        })
        .then(() => {
          context.dispatch('getRestaurants')
        })
        .catch(function (error) {
          console.log('nope')
          console.log(error)
        })
    },
    async selectRestaurant(context, id) {
      return await axios
        .get('/api/restaurant/edit', {
          params: {
            id: id,
          },
        })
        .then((response) => {
          console.log('Entered in there')
          console.log(response)
          console.log(response.data)
          context.commit('selectedRestaurant', response.data)
          router.push({ name: 'Edit Restaurant' })
        })
        .catch(function (error) {
          console.log('nope')
          console.log(error)
        })
    },

    async editRestaurant(context, data) {
      console.log(data)
      return await axios
        .post('/api/restaurant/edit', { id: context.state.user.ID, data: data })
        .then(() => {
          context.dispatch('getRestaurants')
          console.log('Restaurant edited ')
        })
        .catch(function (error) {
          console.log('nope')
          console.log(error)
        })
    },

    async editUser(context, data) {
      console.log('efefefef')
      console.log(data)
      return await axios
        .post('/api/user/edit', { id: context.state.user.ID, data: data })
        .then((response) => {
          context.commit('updateUser', response.data.recordset[0])
          console.log('User edited ')
          // router.push({ name: 'Profil' })
        })
        .catch(function (error) {
          console.log('nope')
          console.log(error)
        })
    },
  },
})

export default store

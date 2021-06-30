import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: [],
        connected: false,
    },
    getters: {},
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
                .post('api/auth', credentials)
                .then((response) => {
                    console.log(response.data.recordset[0])
                    context.commit('isconnected', response.data.recordset[0])
                    router.push({name: 'Profil'})
                })
                .catch(function (error) {
                    // handle error
                    console.log('nope')
                    console.log(error)
                })
        },
        logout(context) {
            context.commit('logoutUser')
            router.push({name: 'home'})
        },
        async signup(context, credentials){
           return await axios
                .post('api/auth/signup', credentials)
                .then(() => {
                    console.log('User created ')
                    router.push({ name: 'login' })
                })
               .catch(function (error) {
                   // handle error
                   console.log('nope')
                   console.log(error)
               })
        }
    },
})

export default store

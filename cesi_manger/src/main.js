import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Notifications from 'vue-notification'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.min.css'
import boot from 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import VueCookie from 'vue-cookie'
import VueSplash from 'vue-splash'

Vue.config.productionTip = false
Vue.use(Notifications)
Vue.use(VueCookie)
Vue.use(VueSplash)
Vue.use(boot)

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  //
  // Connexion
  //
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Auth/Signup.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Auth/Login.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/Auth/ForgotPassword.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  //
  // Commandes
  //
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../components/Shop/Shop.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/Shop/ShoppingCart.vue'),
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../components/Shop/Payment.vue'),
  },
  {
    path: '/bardon',
    name: 'bardon',
    component: () => import('../components/Shop/Restaurants/Bardon.vue'),
  },
  {
    path: '/caci',
    name: 'caci',
    component: () => import('../components/Shop/Restaurants/Caci.vue'),
  },
  {
    path: '/ces',
    name: 'ces',
    component: () => import('../components/Shop/Restaurants/CES.vue'),
  },
  {
    path: '/salade',
    name: 'salade',
    component: () => import('../components/Shop/Restaurants/Salade.vue'),
  },
  {
    path: '/jojo',
    name: 'jojo',
    component: () => import('../components/Shop/Restaurants/Jojo.vue'),
  },
  {
    path: '/sésé',
    name: 'sésé',
    component: () => import('../components/Shop/Restaurants/Sésé.vue'),
  },
  //
  // Gestion Profil
  //
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../components/Profil/Profil.vue'),
  },
  {
    path: '/statscommandes',
    name: 'Statistiques',
    component: () => import('../components/Stats/Commandes.vue'),
  },

  //
  // RESTAURANTS
  //
  {
    path: '/Restaurants',
    name: 'restaurants',
    component: () => import('../components/Restaurants/ListRestaurant.vue'),
  },
  {
    path: '/Restaurants/edit',
    name: 'Edit Restaurant',
    component: () => import('../components/Restaurants/EditRestaurant.vue'),
  },
  {
    path: '/Restaurants/view',
    name: 'restaurants',
    component: () => import('../components/Restaurants/ListRestaurant.vue'),
  },
  {
    path: '/Restaurants/new',
    name: 'New Restaurant',
    component: () => import('../components/Restaurants/NewRestaurant.vue'),
  },
  {
    path: '/Restaurants/editMenu',
    name: 'Edit Menu',
    component: () => import('../components/Restaurants/EditMenu.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

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
    path: '/products',
    name: 'products',
    component: () => import('../components/Shop/Products.vue'),
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../components/Shop/Product.vue'),
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
    path: '/profil',
    name: 'Profil',
    component: () => import('../components/Profil/Profil.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Auth/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Auth/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/Auth/ForgotPassword.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  //
  // Les commandes
  //
  {
    path: '/products',
    name: 'products',
    component: () => import('../components/Shop/Products.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../components/Shop/Product.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/Shop/ShoppingCart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

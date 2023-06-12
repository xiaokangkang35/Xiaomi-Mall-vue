import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
    redirect: "/home",
    children: [
      {path: 'home', name: 'Home', component: () => import('../views/Home.vue')},
      {path: 'goods', name: 'Goods', component: () => import('../views/Goods.vue'),},
      {path: 'shopping', name: 'Shopping', component: () => import('../views/Shopping.vue')},
      {path: 'details', name: 'Details', component: () => import('../views/Details.vue')},
      {path: 'search', name: 'Search', component: () => import('../views/Search.vue')}
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

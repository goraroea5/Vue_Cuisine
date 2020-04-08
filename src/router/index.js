import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Thaifood from '../components/thaifood.vue'
import Japanfood from '../components/japanfood.vue'
import Braverage from '../components/braverage.vue'
import Register from '../components/register.vue'
import China from '../components/chinese.vue'
import Euro from '../components/euro.vue'
import dashboard from '../components/dashboard'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/thaifood',
    name: 'thaifood',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Thaifood
  },
  {
    path: '/japanfood',
    name: 'japanfood',
    component:Japanfood
  },
  {
    path: '/braverage',
    name: 'braverage',
    component: Braverage
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/china',
    name: 'china',
    component: China
  },
  {
    path: '/euro',
    name : 'euro',
    component : Euro
  },
  {
    path:'/dashboard',
    name : 'dashboard',
    component :dashboard
  }
]

const router = new VueRouter({
  routes
})

export default router

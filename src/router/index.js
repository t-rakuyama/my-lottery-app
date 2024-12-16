import { createRouter, createWebHashHistory } from 'vue-router'
import Register from '../views/RegisterView.vue'
import Draw from '../views/DrawView.vue'

const routes = [
  {
    path: '/',
    name: 'RegisterView',
    component: Register
  },
  {
    path: '/draw',
    name: 'DrawView',
    component: Draw
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
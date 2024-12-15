import { createRouter, createWebHistory } from 'vue-router'
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
  history: createWebHistory(),
  routes
})

export default router
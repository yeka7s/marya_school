import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ColorCommotionView from '../views/ColorCommotionView.vue'
import MemoryView from '@/views/MemoryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/color-commotion',
    name: 'color-commotion',
    component: ColorCommotionView
  },
  {
    path: '/memory',
    name: 'memory',
    component: MemoryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

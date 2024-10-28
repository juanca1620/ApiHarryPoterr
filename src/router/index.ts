import { createRouter, createWebHistory } from 'vue-router'
import HarryPotter from '../views/HarryPotter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HarryPotter,
    },
  ],
})

export default router

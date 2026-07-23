import { createRouter, createWebHistory } from 'vue-router'
import FormalPortfolioView from '@/views/formal/FormalPortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gateway',
      component: () => import('@/views/immersive/GatewayView.vue'),
      meta: { immersive: true },
    },
    {
      path: '/formal',
      name: 'formal',
      component: FormalPortfolioView,
    },
    {
      path: '/world',
      name: 'archive-world',
      component: () => import('@/views/immersive/ArchiveWorldView.vue'),
      meta: { immersive: true },
    },
    {
      path: '/world/archive',
      redirect: '/world',
    },
    {
      path: '/world/room',
      redirect: '/world',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (from.name === 'formal' && to.meta.immersive === true) return false
    return { top: 0 }
  },
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/Experience.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/skills-contact',
      name: 'skills-contact',
      component: () => import('../views/SkillsContact.vue')
    },
    {
      path: '/mechanical',
      name: 'mechanical',
      component: () => import('../views/Mechanical.vue')
    },
    {
      path: '/electrical',
      name: 'electrical',
      component: () => import('../views/Electrical.vue')
    },
    {
      path: '/plumbing',
      name: 'plumbing',
      component: () => import('../views/Plumbing.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

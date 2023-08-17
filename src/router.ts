import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/HomePage/IndexPage.vue'
import AboutUsPage from '@/pages/AboutUs/AboutUsPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Anasayfa',
    },
  },
  {
    path: '/Hakkimizda',
    component: AboutUsPage,
    meta: {
      title: 'Rent Car',
    },
  },
  {
    path: '/Araclar',
    component: AboutUsPage,

  },
  {
    path: '/iletisim',
    component: AboutUsPage,

  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/HomePage/IndexPage.vue'
import AboutUsPage from '@/pages/AboutUs/AboutUsPage.vue'
import OurServicesPage from '@/pages/OurServices/OurServicesPage.vue'
import ContactUsPage from '@/pages/ContactUs/ContactUsPage.vue'
import CarsPage from '@/pages/Cars/CarsPage.vue'

const routes = [
  {
    path: '/Anasayfa',
    component: IndexPage,
    meta: {
      title: 'Anasayfa',
    },
    alias: '/'
  },
  {
    path: '/Hakkımızda',
    component: AboutUsPage,
    meta: {
      title: 'Rent Car',
    },
  },
  {
    path: '/Servisler',
    component: OurServicesPage,
    meta: {
      title: 'Servisler',
    },
  },
  {
    path: '/İletişim',
    component: ContactUsPage,
    meta: {
      title: 'İletişim',
    },
  },
  {
    path: '/Araçlar',
    component: CarsPage,
    meta: {
      title: 'Araçlar',
    },
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

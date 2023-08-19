import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/HomePage/IndexPage.vue'
import AboutUsPage from '@/pages/AboutUs/AboutUsPage.vue'
import OurServicesPage from '@/pages/OurServices/OurServicesPage.vue'
import ContactUsPage from '@/pages/ContactUs/ContactUsPage.vue'
import CarsPage from '@/pages/Cars/CarsPage.vue'

const routes = [
  {
    path: '/anasayfa',
    component: IndexPage,
    meta: {
      title: 'Anasayfa',
    },
    alias: '/'
  },
  {
    path: '/hakkimizda',
    component: AboutUsPage,
    meta: {
      title: 'Hakkımızda',
    },
  },
  {
    path: '/hizmetler',
    component: OurServicesPage,
    meta: {
      title: 'Hizmetler',
    },
  },
  {
    path: '/iletisim',
    component: ContactUsPage,
    meta: {
      title: 'İletişim',
    },
  },
  {
    path: '/araclar',
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

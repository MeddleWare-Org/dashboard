import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WalrusPage from '../views/WalrusPage.vue'
import AccessGatePage from '../views/AccessGatePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/walrus', component: WalrusPage },
    { path: '/access-gate', component: AccessGatePage },
  ],
})

export default router

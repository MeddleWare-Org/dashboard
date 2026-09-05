import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ToolPage from '../views/ToolPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/walrus', component: ToolPage, props: { src: 'https://sui-walrus.meddleware.co.uk/?embedded=1', title: 'Walrus' } },
    { path: '/access-gate', component: ToolPage, props: { src: 'https://sui-access-gate.meddleware.co.uk/?embedded=1', title: 'Access Gate' } },
    { path: '/sealed-storage', component: ToolPage, props: { src: 'https://sui-seal.meddleware.co.uk/?embedded=1', title: 'Sealed Storage' } },
  ],
})

export default router

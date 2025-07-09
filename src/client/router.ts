import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import TablePage from './pages/TablePage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/table', component: TablePage },
  ],
})

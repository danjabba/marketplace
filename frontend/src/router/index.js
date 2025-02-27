import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/RegisterView.vue'
import Dashboard from '../views/Dashboard.vue'
import ProductListView from '@/views/ProductListView.vue'
import ProductCreateView from '@/views/ProductCreateView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },

  { path: '/products', component: ProductListView },
  { path: '/products/create', component: ProductCreateView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

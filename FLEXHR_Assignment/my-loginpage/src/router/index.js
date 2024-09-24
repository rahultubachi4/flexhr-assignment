import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginMainView from '../views/LoginMain.vue'
import RegistrationForm from '../components/RegistrationForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginMainView
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: RegistrationForm
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

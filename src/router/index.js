import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "./../components/LoginCard.vue"
import RegisterPage from "./../components/RegisterCard.vue"

const routes = [
  {
    path: "/login",
    name: "loginPage",
    component: LoginPage
  },
  {
    path: "/register",
    name: "registerPage",
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import AppointmentView from '../views/appointment/AppointmentView.vue'
import NotFound from '../components/NotFound.vue'
import AllappointmentView from '../views/appointment/AllappointmentView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/singup',
    name: 'singup',
    component:SignupView
  },
  {
    path: '/appointment',
    name: 'appointment',
    component:AppointmentView
  },
    {
    path: '/:cathAll(.*)',
    name: 'NotFound',
    component:NotFound
  },
  {
    path: '/allappointment:',
    name: 'Allappointment',
    component:AllappointmentView
  }
  
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

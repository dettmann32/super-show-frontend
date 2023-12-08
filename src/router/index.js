import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    
    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/verify',
    name: 'verify',
   
    component: () => import('../views/VerifyView.vue')
  },


  {
    path: '/message',
    name: 'mensagens',
  
    component: () => import('../views/messageView.vue')
  },

  {
    path: '/login',
    name: 'login',
    
    component: () => import( '../views/LoginView.vue')
  },


  
 

  {
    path: '/gerenciamentoCliente',
    name: 'Gerenciamento Cliente',

    component: () => import('../views/gerenciaUserView.vue')
  },



  

 
  



  


  {
    path: '/Pendentes',
    name: ' Pendentes',

    component: () => import('../views/gerenciamentoPendentesView.vue')
  },

  {
    path: '/Rejeitados',
    name: 'Rejeitados',

    component: () => import('../views/gerenciamentoRejeitados.vue')
  },

  
  {
    path: '/Concluidos',
    name: 'Concluidos',

    component: () => import('../views/gerenciamentoConcluidos.vue')
  },






  {
    path: '/gerenciamento',
    name: 'gerenciamento',

    component: () => import('../views/gerenciaView.vue')
  },




  






  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

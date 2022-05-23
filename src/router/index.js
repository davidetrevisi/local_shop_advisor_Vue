import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inserimento',
      name: 'inserimento',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InserimentoView.vue')
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CatalogoView.vue')
    },
    {
      path: '/ricerca',
      name: 'ricerca',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RicercaView.vue')
    },
    {
      path: '/modificaProdotto',
      name: 'modificaProdotto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ModificaProdottoView.vue')
    },
    {
      path: '/negozio',
      name: 'negozio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NegozioView.vue')
    },
    {
      path: '/modificaNegozio',
      name: 'modificaNegozio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ModificaNegozioView.vue')
    },
    {
      path: '/prodotto',
      name: 'prodotto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProdottoView.vue')
    },
    {
      path: '/infoNegozio',
      name: 'infoNegozio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InfoNegozioView.vue')
    },
    {
      path: '/carrello',
      name: 'carrello',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CarrelloView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/local_shop_advisor_Hosting",
      name: "home",
      component: HomeView,
    },
    {
      path: "/local_shop_advisor_Hosting/profilo",
      name: "profilo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProfiloView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/registrazione",
      name: "registrazione",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegistrazioneView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/inserimento",
      name: "inserimento",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/InserimentoView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/catalogo",
      name: "catalogo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CatalogoView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/ricerca",
      name: "ricerca",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RicercaView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/modificaProdotto",
      name: "modificaProdotto",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ModificaProdottoView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/negozio",
      name: "negozio",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NegozioView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/modificaNegozio",
      name: "modificaNegozio",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ModificaNegozioView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/prodotto",
      name: "prodotto",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProdottoView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/infoNegozio",
      name: "infoNegozio",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/InfoNegozioView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/carrello",
      name: "carrello",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CarrelloView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/catalogoVenditore",
      name: "catalogo venditore",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CatalogoVenditoreView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/ordini",
      name: "ordini",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OrdiniView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/ordiniVenditore",
      name: "ordini venditore",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OrdiniVenditoreView.vue"),
    },
    {
      path: "/local_shop_advisor_Hosting/infoordini",
      name: "ordine",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/InfoOrdiniView.vue"),
    },
  ],
});

export default router;

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { cercaCarrello } from "@/states/carts.js";
import { catalogoProdotto } from "@/states/products.js";
import Login from "@/components/Login.vue";
import { loggedUser } from "@/states/users.js";
import { listaNegozi } from "@/states/shops.js";
import { ref, computed } from "vue";

const isLoggedIn = computed(() => loggedUser.account !== undefined);
const isVenditore = computed(() => loggedUser.account === "Venditore");
const isCliente = computed(() => loggedUser.account === "Cliente");
const isAdmin = computed(() => loggedUser.account === "Admin");
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/Logo2.png" width="100" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/registrazione" v-if="!isLoggedIn || isAdmin">Registrazione</RouterLink>
        <RouterLink to="/inserimento" v-if="isVenditore || isAdmin">Inserimento</RouterLink>
        <RouterLink to="/catalogo" v-if="!isVenditore || isAdmin || isCliente ">Catalogo</RouterLink>
        <RouterLink to="/catalogoVenditore" @click="catalogoProdotto()" v-if="isVenditore">Catalogo</RouterLink>
        <RouterLink to="/negozio" @click="listaNegozi()" v-if="isVenditore || isAdmin">Negozi</RouterLink>
        <RouterLink to="/ricerca" v-if="!isVenditore || isAdmin">Ricerca</RouterLink>
        <RouterLink to="/carrello" @click="cercaCarrello()" v-if="isCliente">Carrello</RouterLink>
      </nav>

      <Login />
      <h2>pagina di prova</h2>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

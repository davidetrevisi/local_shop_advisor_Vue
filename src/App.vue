<script setup>
import { RouterLink, RouterView } from "vue-router";
import { cercaCarrello } from "@/states/carts.js";
import Login from "@/components/Login.vue";
import { loggedUser } from "@/states/users.js";

import { ref, computed } from "vue";

const isLoggedIn = computed(() => loggedUser.account !== undefined);
const isVenditore = computed(() => loggedUser.account === "Venditore");
const isCliente = computed(() => loggedUser.account === "Cliente");
const isAdmin = computed(() => loggedUser.account === "Admin");
</script>

<template>

  <img alt="Vue logo" class="logo" src="@/assets/Logo2.png" width="150" />

  <div class="log">

    <Login />
    <button v-if="!isLoggedIn || !isAdmin" @click="$router.push('/registrazione')">Registrati</button>

  </div>

  <header>




    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/inserimento" v-if="isVenditore || isAdmin">Inserimento</RouterLink>
        <RouterLink to="/catalogo">Catalogo</RouterLink>
        <RouterLink to="/negozio" v-if="isVenditore || isAdmin">Negozi</RouterLink>
        <!-- <RouterLink to="/ricerca" v-if="!isVenditore || isAdmin">Ricerca</RouterLink> unito pagina di catalogo e ricerca-->
        <RouterLink to="/carrello" @click="cercaCarrello()" v-if="isCliente">Carrello</RouterLink>
      </nav>
      <br />
      <br />
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  position: absolute;
}


.log {

  margin-top: 2rem;
  margin-bottom: 3rem;
  text-align: right;
}

.btn {
  width: 10%;
  float: right;
  margin-top: 0.2em;
  margin-left: 1rem;
  pointer-events: none;
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
  font-size: 30px;
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

/*
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
}*/
</style>

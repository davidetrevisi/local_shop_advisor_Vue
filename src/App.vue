<script setup>
import { RouterLink, RouterView } from "vue-router";
import { cercaCarrello } from "@/states/carts.js";
import { fetchProdotto, catalogoProdotto } from "@/states/products.js";
import Login from "@/components/Login.vue";
import { loggedUser, cercaUtente, logout } from "@/states/users.js";
import { listaNegozi } from "@/states/shops.js";
import { listaOrdini, listaOrdiniVenditore } from "@/states/orders.js";
import { ref, computed, onBeforeMount } from "vue";


const isLoggedIn = computed(() => loggedUser.account !== undefined);
const isVenditore = computed(() => loggedUser.account === "Venditore");
const isCliente = computed(() => loggedUser.account === "Cliente");
const isAdmin = computed(() => loggedUser.account === "Admin");
onBeforeMount(() => {
  fetchProdotto()
})
</script>

<template>

  <RouterLink to="/local_shop_advisor_Hosting">
    <img alt="Vue logo" class="logo" src="@/assets/Logo3.png" width="170" />
  </RouterLink>



  <div class="log" v-if="loggedUser.account == undefined">

    <Login />
    <button class="btn" style="margin-top: 10px ;"
      @click="$router.push('/local_shop_advisor_Hosting/registrazione')">Registrati</button>

  </div>

  <div class="log" v-if="loggedUser.id !== undefined">

    <router-link to="/local_shop_advisor_Hosting/profilo">{{ loggedUser.email }}</router-link>
    <button class="btn" style="margin-left: 2rem ;" type="button"
      @click="logout(); $router.push('/local_shop_advisor_Hosting')">LogOut</button>

  </div>


  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/local_shop_advisor_Hosting">Home</RouterLink>
        <RouterLink to="/local_shop_advisor_Hosting/inserimento" v-if="isVenditore || isAdmin">Inserimento</RouterLink>
        <RouterLink to="/local_shop_advisor_Hosting/catalogo" @click="fetchProdotto()" v-if="!isVenditore">Catalogo
        </RouterLink>
        <RouterLink to="/local_shop_advisor_Hosting/ordini" @click="listaOrdini()" v-if="isCliente">Ordini</RouterLink>
        <RouterLink to="/local_shop_advisor_Hosting/ordiniVenditore" @click="listaOrdiniVenditore()" v-if="isVenditore">
          Ordini</RouterLink>
        <RouterLink to="/local_shop_advisor_Hosting/catalogoVenditore" @click="catalogoProdotto()" v-if="isVenditore">
          Catalogo</RouterLink>
        <RouterLink to="/local_shop_advisor_Hosting/negozio" @click="listaNegozi()" v-if="isVenditore || isAdmin">Negozi
        </RouterLink>
        <RouterLink to="/local_shop_advisor_Hosting/carrello" @click="cercaCarrello()" v-if="isCliente">Carrello
        </RouterLink>
        <RouterLink to="/local_shop_advisor_Hosting/profilo" v-if="isVenditore || isCliente">Profilo</RouterLink>
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
  font-size: 20px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-align: right;
}

.btn {
  border-radius: 12px;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);
  color: hsla(160, 100%, 37%, 1);
  border: 2px solid hsla(160, 100%, 37%, 1);
  transition-duration: 0.4s;
}

.btn:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  /* Green 
  color: black;*/
}

.btn2 {
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0);
  color: hsla(160, 100%, 37%, 1);
  border: 2px solid hsla(160, 100%, 37%, 1);
  transition-duration: 0.4s;
}

.btn2:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  /* Green 
  color: black;*/
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.6s;
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
</style>

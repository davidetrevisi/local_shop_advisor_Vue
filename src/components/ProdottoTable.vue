<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodottosingolo } from '../states/products.js'
import { aggiungiCarrello } from '../states/carts.js'
import { loggedUser } from '../states/users.js'
import { dettagliNegozio } from '../states/shops.js'
const quantity = ref("")
console.log(prodottosingolo)
</script>

<template>
  <h1>{{ prodottosingolo.value.name }}</h1>
  <br />
  <h3>Categoria: {{ prodottosingolo.value.category }}</h3>
  <br />
  <h3>Prezzo: {{ prodottosingolo.value.price }} $</h3>
  <br />
  <h3>Descrizione: {{ prodottosingolo.value.description }}</h3>
  <br />
  <h3>Tags:</h3>
  <div v-for="h in prodottosingolo.value.tags">
    <h3>{{ h }}</h3>
  </div>
  <br />
  <h3>Immagini:</h3>
  <div v-for="h in prodottosingolo.value.images">
    <img :src="'https://local-shop-advisor.herokuapp.com/' + h" width="200">
  </div>
  <br />
  <span v-if="loggedUser.account == 'Cliente'">Inserisci la quantitá da aggiungere al carrello
    <br />
    <input v-model="quantity" placeholder="Quantitá" />
  </span>
  <br />
  <button class="btn2" style="margin: 1rem 0;"
    @click="aggiungiCarrello(prodottosingolo.value, quantity); $router.push('/local_shop_advisor_Hosting/catalogo')"
    v-if="loggedUser.account == 'Cliente'">Aggiungi a carrello</button>
  <br />
  <span v-if="loggedUser.account == 'Cliente' || loggedUser.account == 'Venditore' || loggedUser.account == 'Admin'">
    <router-link to="/local_shop_advisor_Hosting/infoNegozio" @click="dettagliNegozio(prodottosingolo.value.shopId)">vai
      a negozio</router-link>
  </span>

</template>
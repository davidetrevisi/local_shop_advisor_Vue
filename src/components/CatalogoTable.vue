<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodotto, fetchProdotto, deleteProdotto, salvaProdotto } from '../states/products.js'
import { aggiungiCarrello } from '../states/carts.js'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`
const PRODUCTS_URL = API_URL + '/products'
const quantity = ref("")
onMounted(() => {
  fetchProdotto() // fetch on init
})

</script>

<template>
  <form>
    <center>
      <h1>Prodotti in catalogo:</h1>
    </center>
    <ul>
      <li v-for="prodotto in prodotto.value" :key="prodotto.self">
        <router-link to="/prodotto" @click="salvaProdotto(prodotto)">{{ prodotto.name }}</router-link>
        -
        <!--<input
      v-model="quantity"
      placeholder="Quantitá"
      />
      <br/>
      -
      <button @click="aggiungiCarrello(prodotto,quantity)">Aggiungi a carrello</button>
      - -->
        <button @click="$router.push('/modificaProdotto'); salvaProdotto(prodotto)">Modifica</button>
        -
        <button @click="deleteProdotto(prodotto)">Rimuovi</button>
      </li>
    </ul>
  </form>

</template>

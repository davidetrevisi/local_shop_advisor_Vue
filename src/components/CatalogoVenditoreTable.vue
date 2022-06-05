<script setup>
import { ref, onMounted, watch } from 'vue'
import { loggedUser } from '../states/users.js'
import { prodotto, deleteProdotto, catalogoProdotto, prodottoCercato, dettagliProdotto } from '../states/products.js'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`
const PRODUCTS_URL = API_URL + '/products'
const quantity = ref("")

onMounted(() => {
  catalogoProdotto() // fetch on init
})

</script>

<template>
  <h3>Prodotti nel catalogo del venditore: {{ loggedUser.email }}</h3>

  <ul>
    <li v-for="prodottoCercato in prodottoCercato.value" :key="prodottoCercato.self">
      <router-link to="/local_shop_advisor_Hosting/prodotto" @click="dettagliProdotto(prodottoCercato.id)">{{
          prodottoCercato.name
      }}</router-link>
      <span v-if="loggedUser.account == 'Venditore'">
        -
        <button class="btn2"
          @click="$router.push('/local_shop_advisor_Hosting/modificaProdotto'); dettagliProdotto(prodottoCercato.id)">Modifica</button>
        -
        <button class="btn2" @click="deleteProdotto(prodottoCercato)">Rimuovi</button>
      </span>
    </li>
  </ul>

</template>
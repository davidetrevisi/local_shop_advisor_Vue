<script setup>
import { ref, onMounted, watch } from 'vue'
import { negoziosingolo } from '../states/shops.js'
import { catalogoProdottoNegozio, dettagliProdotto, prodottoCercato1 } from '../states/products.js'

</script>

<template>
  <h1>{{ negoziosingolo.value.name }}</h1>
  <br />
  <h3>Categoria: {{ negoziosingolo.value.category }}</h3>
  <br />
  <h3>position: {{ negoziosingolo.value.position }}</h3>
  <br />
  <h3>Descrizione: {{ negoziosingolo.value.description }}</h3>
  <br />
  <h3>Tags:</h3>
  <div v-for="h in negoziosingolo.value.tags">
    <h3>{{ h }}</h3>
  </div>
  <br />
  <h3>Immagini:</h3>
  <div v-for="h in negoziosingolo.value.images">
    <img :src="'https://local-shop-advisor.herokuapp.com/' + h" width="200">
  </div>
  <br />
  <h3>Prodotti in catalogo del negozio:</h3>

  <ul>
    <li v-for="prodottoCercato1 in prodottoCercato1.value" :key="prodottoCercato1.self">
      <router-link to="/local_shop_advisor_Hosting/prodotto" @click="dettagliProdotto(prodottoCercato1.id)">{{
          prodottoCercato1.name
      }}</router-link>
    </li>
  </ul>
</template>
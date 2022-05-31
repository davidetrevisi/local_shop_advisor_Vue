<script setup>
import { ref, onMounted, watch } from 'vue'
import { negoziosingolo } from '../states/shops.js'
import { catalogoProdottoNegozio, dettagliProdotto, prodottoCercato } from '../states/products.js'
onMounted(() => {
catalogoProdottoNegozio(negoziosingolo.value.id)
})

console.log(negoziosingolo.value.id)
</script>

<template>
  <h1>{{ negoziosingolo.value.name }}</h1>
  <br />
  <h3>Categoria: {{ negoziosingolo.value.category }}</h3>
  <br />
  <h3>position: {{ negoziosingolo.value.position }}</h3>
  <br />
  <h3>Descrizione: {{ negoziosingolo.value.description }}</h3>
  <h3>Prodotti in catalogo del negozio:</h3>
    <ul>
      <li v-for="prodottoCercato in prodottoCercato.value" :key="prodottoCercato.self">
        <router-link to="/prodotto" @click="dettagliProdotto(prodottoCercato.id)">{{ prodottoCercato.name }}</router-link>
      </li>
    </ul>
</template>
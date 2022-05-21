<script setup>
import { ref, onMounted, watch } from 'vue'
import { negozio, fetchNegozio, deleteNegozio, salvaNegozio } from '../states/shops.js'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`

onMounted( () => {
  fetchNegozio() // fetch on init
})

</script>

<template>
  <h1>Negozi registrati:</h1>

  <ul>
    <li v-for="negozio in negozio.value" :key="negozio.self">
      <router-link to="/infoNegozio" @click="salvaNegozio(negozio)">{{negozio.name}}</router-link>
      -
      <button @click="$router.push('/modificaNegozio'); salvaNegozio(negozio)">Modifica</button>
      -
      <button @click="deleteNegozio(negozio)">Rimuovi</button>
    </li>
  </ul>

</template>
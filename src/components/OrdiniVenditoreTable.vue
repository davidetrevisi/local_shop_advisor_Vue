<script setup>
import { ref, onMounted, watch } from 'vue'
import { loggedUser } from '../states/users.js'
import {  listaOrdiniVenditore,ordinev, dettagliOrdine } from '../states/orders.js'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`

onMounted(() => {
  listaOrdiniVenditore() // fetch on init
})

</script>

<template>
  <h3>Ordini ricevuti dal venditore: {{ loggedUser.email}}</h3>

  <ul>
    <li v-for="ordinev in ordinev.value" :key="ordinev.self">
   <router-link to="/infoordini" @click="dettagliOrdine(ordinev.id)">{{ordinev.id}}</router-link>
    </li>
  </ul>

</template>
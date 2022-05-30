<script setup>
import { ref, onMounted, watch } from 'vue'
import { loggedUser } from '../states/users.js'
import {  ordine, listaOrdini, dettagliOrdine } from '../states/orders.js'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`

onMounted(() => {
  listaOrdini() // fetch on init
})

</script>

<template>
  <h3>Ordini effettuati dal cliente: {{ loggedUser.email}}</h3>

  <ul>
    <li v-for="ordine in ordine.value" :key="ordine.self">
   <router-link to="/infoordini" @click="dettagliOrdine(ordine.id)">{{ordine.id}}</router-link>
    </li>
  </ul>

</template>
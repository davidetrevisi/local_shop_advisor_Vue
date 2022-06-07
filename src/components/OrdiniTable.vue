<script setup>
import { ref, onMounted, watch } from 'vue'
import { loggedUser } from '../states/users.js'
import { ordine, listaOrdini, dettagliOrdine } from '../states/orders.js'

onMounted(() => {
  listaOrdini() // fetch on init
})

</script>

<template>
  <h2>Ordini effettuati dal cliente: {{ loggedUser.email }}</h2>
  <h4 style="margin-left: 1.5rem;">(Dal meno recente al più recente)</h4>
  <br />

  <ul>
    <li v-for="ordine in ordine.value" :key="ordine.self">
      <router-link to="/local_shop_advisor_Hosting/infoordini" @click="dettagliOrdine(ordine.id)">{{ ordine.id }}
      </router-link>
    </li>
  </ul>

</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { dettagliNegozio, deleteNegozio, listaNegozi, listaNegozio } from '../states/shops.js'
import { loggedUser } from '../states/users.js'

onMounted(() => {
  listaNegozi() // fetch on init
})

</script>

<template>
  <h3>Negozi registrati dall'utente: {{ loggedUser.email }}</h3>

  <ul>
    <li v-for="listaNegozio in listaNegozio.value" :key="listaNegozio.self">
      <router-link to="/local_shop_advisor_Hosting/infoNegozio" @click="dettagliNegozio(listaNegozio.id)">
        {{ listaNegozio.name }}</router-link>
      -
      <button class="btn2"
        @click="dettagliNegozio(listaNegozio.id); $router.push('/local_shop_advisor_Hosting/modificaNegozio')">Modifica</button>
      -
      <button class="btn2" @click="deleteNegozio(listaNegozio)">Rimuovi</button>
    </li>
  </ul>

</template>
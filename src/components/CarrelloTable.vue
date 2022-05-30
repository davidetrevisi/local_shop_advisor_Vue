<script setup>
import { ref, onMounted, watch } from 'vue'
import { loggedUser } from '../states/users.js'
import { carrello, cercaCarrello, carrelloSalvato, eliminaCarrello } from '../states/carts.js'
import { prodotto, fetchProdotto } from '../states/products.js'
onMounted(() => {
  fetchProdotto()
  cercaCarrello()
})


</script>



<template>
  <h3 v-if="loggedUser.id !== undefined"> Carrello di: {{ loggedUser.email }}: </h3>
  <ul>

    <li v-for="item in carrelloSalvato.items" :key="item.value">
      <h3>Prodotto: {{ (prodotto.value.find(p => p.id == item.productId) || { name: 'unknown' }).name }}</h3>
      <h3>Prezzo: {{ item.price }} €</h3>
      <h3>Quantitá: {{ item.quantity }}</h3>
      <h3>Parziale: {{ item.total }} €</h3>
      <button class="btn2" @click="eliminaCarrello(item.productId)">Elimina il prodotto dal carrello</button>
    </li>

  </ul>

  <h3>Totale: {{ carrelloSalvato.subTotal }} €</h3>
</template>
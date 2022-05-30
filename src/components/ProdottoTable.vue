<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodottosingolo } from '../states/products.js'
import { aggiungiCarrello } from '../states/carts.js'
import { loggedUser } from '../states/users.js'
const quantity = ref("")
console.log(prodottosingolo)
</script>

<template>
  <h1>{{ prodottosingolo.value.name }}</h1>
  <br />
  <h3>Categoria: {{ prodottosingolo.value.category }}</h3>
  <br />
  <h3>Prezzo: {{ prodottosingolo.value.price }}</h3>
  <br />
  <h3>Descrizione: {{ prodottosingolo.value.description }}</h3>
  <br />
  <span v-if="loggedUser.account == 'Cliente'">Inserisci la quantitá da aggiungere al carrello
  <br />
      <input
      v-model="quantity"
      placeholder="Quantitá"
    />
  </span>  
  <br />
  <button @click="aggiungiCarrello(prodottosingolo.value,quantity)" v-if="loggedUser.account == 'Cliente'">Aggiungi a carrello</button>

</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodottoDaModificare } from '../states/products.js'
import { aggiungiCarrello } from '../states/carts.js'
import { loggedUser } from '../states/users.js'
const quantity = ref("")

</script>

<template>
  <h1>{{ prodottoDaModificare.name }}</h1>
  <br />
  <h3>Categoria: {{ prodottoDaModificare.category }}</h3>
  <br />
  <h3>Prezzo: {{ prodottoDaModificare.price }}</h3>
  <br />
  <h3>Descrizione: {{ prodottoDaModificare.description }}</h3>
  <br />
  <span v-if="loggedUser.account == 'Cliente'">Inserisci la quantitá da aggiungere al carrello
  <br />
      <input
      v-model="quantity"
      placeholder="Quantitá"
    />
  </span>  
  <br />
  <button @click="aggiungiCarrello(prodottoDaModificare,quantity)" v-if="loggedUser.account == 'Cliente'">Aggiungi a carrello</button>

</template>
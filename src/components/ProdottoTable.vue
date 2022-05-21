<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodottoDaModificare } from '../states/products.js'


</script>

<template>
  <h1>{{ prodottoDaModificare.name }}</h1>
  <br />
  <h3>Categoria: {{ prodottoDaModificare.category }}</h3>
  <br />
  <h3>Prezzo: {{ prodottoDaModificare.price }}</h3>
  <br />
  <h3>Descrizione: {{ prodottoDaModificare.description }}</h3>

</template>
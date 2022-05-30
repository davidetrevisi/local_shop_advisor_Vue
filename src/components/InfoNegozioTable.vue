<script setup>
import { ref, onMounted, watch } from 'vue'
import { negoziosingolo } from '../states/shops.js'


</script>

<template>
  <h1>{{ negoziosingolo.value.name }}</h1>
  <br />
  <h3>Categoria: {{ negoziosingolo.value.category }}</h3>
  <br />
  <h3>position: {{ negoziosingolo.value.position }}</h3>
  <br />
  <h3>Descrizione: {{ negoziosingolo.value.description }}</h3>

</template>
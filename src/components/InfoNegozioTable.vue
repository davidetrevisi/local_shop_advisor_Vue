<script setup>
import { ref, onMounted, watch } from 'vue'
import { negozioDaModificare } from '../states/shops.js'


</script>

<template>
  <h1>{{ negozioDaModificare.name }}</h1>
  <br />
  <h3>Categoria: {{ negozioDaModificare.category }}</h3>
  <br />
  <h3>position: {{ negozioDaModificare.position }}</h3>
  <br />
  <h3>Descrizione: {{ negozioDaModificare.description }}</h3>

</template>
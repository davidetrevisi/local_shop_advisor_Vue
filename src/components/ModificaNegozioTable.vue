<script setup>
import { ref, onMounted, watch } from 'vue'
import { negozioDaModificare, modificaNegozio } from '../states/shops.js'


const name = ref(negozioDaModificare.name)
const category = ref(negozioDaModificare.category)
const position = ref(negozioDaModificare.position)
const description = ref(negozioDaModificare.description)
const warningMessage = ref('')


function modificaNegozioButton(ID) {
  warningMessage.value = ''
  modificaNegozio(name.value, category.value, position.value, description.value, ID).catch( err => console.error(err) );
};

</script>



<template>
  <form>
    <span>Modifica il negozio</span>
    <br />
    <input v-model="name" />
    <input v-model="category" />
    <input v-model="position" />
    <input v-model="description" />
    <button type="button" @click="modificaNegozioButton(negozioDaModificare.self)">modifica</button>
    <br />
    <span style="color: red"> {{negozioDaModificare.self}} </span>
    <span style="color: red"> {{warningMessage}} </span>
  </form>
</template>

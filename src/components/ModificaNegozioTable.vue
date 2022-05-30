<script setup>
import { ref, onMounted, watch } from 'vue'
import { negoziosingolo, modificaNegozio } from '../states/shops.js'


const name = ref(negoziosingolo.value.name)
const category = ref(negoziosingolo.value.category)
const position = ref(negoziosingolo.value.position)
const description = ref(negoziosingolo.value.description)
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
    <button type="button" @click="modificaNegozioButton(negoziosingolo.value.self)">modifica</button>
    <br />
    <span style="color: red"> {{negoziosingolo.value.self}} </span>
    <span style="color: red"> {{warningMessage}} </span>
  </form>
</template>

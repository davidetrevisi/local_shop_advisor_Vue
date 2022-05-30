<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodottosingolo, modificaProdotto } from '../states/products.js'


const name = ref(prodottosingolo.value.name)
const category = ref(prodottosingolo.value.category)
const price = ref(prodottosingolo.value.price)
const description = ref(prodottosingolo.value.description)
const warningMessage = ref('')


function modificaProdottoButton(ID) {
  warningMessage.value = ''
  modificaProdotto(name.value, category.value, price.value, description.value, ID).catch( err => console.error(err) );
};

</script>



<template>
  <form>
    <span>Modifica il prodotto</span>
    <br />
    <input v-model="name" />
    <input v-model="category" />
    <input v-model="price" />
    <input v-model="description" />
    <button type="button" @click="modificaProdottoButton(prodottosingolo.value.self)">modifica</button>
    <br />
    <span style="color: red"> {{prodottosingolo.value.self}} </span>
    <span style="color: red"> {{warningMessage}} </span>
  </form>
</template>

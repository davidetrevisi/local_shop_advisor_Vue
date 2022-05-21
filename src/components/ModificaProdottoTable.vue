<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodottoDaModificare, modificaProdotto } from '../states/products.js'


const name = ref(prodottoDaModificare.name)
const category = ref(prodottoDaModificare.category)
const price = ref(prodottoDaModificare.price)
const description = ref(prodottoDaModificare.description)
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
    <button type="button" @click="modificaProdottoButton(prodottoDaModificare.self)">modifica</button>
    <br />
    <span style="color: red"> {{prodottoDaModificare.self}} </span>
    <span style="color: red"> {{warningMessage}} </span>
  </form>
</template>

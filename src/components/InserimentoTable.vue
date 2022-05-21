<script setup>
import { ref, onMounted, watch } from 'vue'
import { createProdotto } from '../states/products.js'
import { createNegozio } from '../states/shops.js'


const name = ref('nome')
const category = ref('categoria')
const price = ref('prezzo')
const description = ref('descrizione')
const warningMessage = ref('')

const name1 = ref('nome')
const category1 = ref('categoria')
const position = ref('posizione')
const description1 = ref('descrizione')
const warningMessage1 = ref('')


function createProdottoButton() {
  if (name.value=='' || category.value=='' || price.value=='' || description.value=='') {
    warningMessage.value = 'Please specify valid items!'
    return;
  }
  warningMessage.value = ''
  createProdotto(name.value, category.value, price.value, description.value).catch( err => console.error(err) );
};

function createNegozioButton() {
  if (name.value=='' || category.value=='' || price.value=='' || description.value=='') {
    warningMessage1.value = 'Please specify valid items!'
    return;
  }
  warningMessage.value = ''
  createNegozio(name.value, category.value, position.value, description.value).catch( err => console.error(err) );
};

</script>



<template>
  <form>
    <span>Inserisci un nuovo negozio</span>
    <br />
    <input v-model="name1" />
    <input v-model="category1" />
    <input v-model="position" />
    <input v-model="description1" />
    <button type="button" @click="createNegozioButton">inserisci</button>
    <br />
    <span style="color: red"> {{warningMessage1}} </span>
  </form>
  <br />
  <br />
  <form>
    <span>Inserisci un nuovo prodotto</span>
    <br />
    <input v-model="name" />
    <input v-model="category" />
    <input v-model="price" />
    <input v-model="description" />
    <button type="button" @click="createProdottoButton">inserisci</button>
    <br />
    <span style="color: red"> {{warningMessage}} </span>
  </form>
</template>

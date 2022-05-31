<script setup>
import { ref, onMounted, watch } from 'vue'
import { createProdotto } from '../states/products.js'
import { createNegozio, listaNegozio, listaNegozi, dettagliNegozio, negoziosingolo } from '../states/shops.js'


const name = ref("")
const category = ref('')
const price = ref('')
const description = ref('')
const warningMessage = ref('')

const name1 = ref('')
const category1 = ref('')
const position = ref('')
const description1 = ref('')
const warningMessage1 = ref('')
const scelta = ref('')

var obj


onMounted(() => {
  listaNegozi() // fetch on init
})

function createProdottoButton() {
  if (name.value == '' || category.value == '' || price.value == '' || description.value == '') {
    warningMessage.value = 'Please specify valid items!'
    return;
  }
  console.log(scelta.value)
  //dettagliNegozio(scelta.value)
  //console.log(negoziosingolo.id)
  warningMessage.value = ''
  createProdotto(name.value, category.value, price.value, description.value, scelta.value).catch(err => console.error(err));
};


function createNegozioButton() {
  if (name1.value == '' || category1.value == '' || position.value == '' || description1.value == '') {
    warningMessage1.value = 'Please specify valid items!'
    return;
  }
  warningMessage1.value = ''
  createNegozio(name1.value, category1.value, position.value, description1.value).catch(err => console.error(err));
};

</script>



<template>
  <form>
    <span>Inserisci un nuovo negozio</span>
    <br />
    <input v-model="name1" placeholder="nome" />
    <input v-model="category1" placeholder="categoria" />
    <input v-model="position" placeholder="posizione" />
    <input v-model="description1" placeholder="descrizione" />
    <button class="btn2" style="margin-left:0.5rem;" type="button" @click="createNegozioButton">inserisci</button>
    <br />
    <span style="color: red"> {{ warningMessage1 }} </span>
  </form>
  <br />
  <br />
  <form>
    <span>Inserisci un nuovo prodotto</span>
    <br />
    <input v-model="name" placeholder="nome" />
    <input v-model="category" placeholder="categoria" />
    <input v-model="price" placeholder="prezzo" />
    <input v-model="description" placeholder="descrizione" />
    <button class="btn2" style="margin-left:0.5rem;" type="button" @click="createProdottoButton">inserisci</button>
    <br />

    <div>Selected: {{ scelta }}</div>

    <select v-model="scelta">
      <option disabled value="">Seleziona un negozio</option>
      <option v-for="listaNegozio in listaNegozio.value" :key="listaNegozio.self" :value="listaNegozio.id">{{
          listaNegozio.name
      }}
      </option>
    </select>

    <br />
    <span style="color: red"> {{ warningMessage }} </span>
  </form>
</template>

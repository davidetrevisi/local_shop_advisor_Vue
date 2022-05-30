<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodottoCercato, cercaProdotto, dettagliProdotto } from '../states/products.js'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`
const PRODUCTS_URL = API_URL + '/products'

const cercato = ref('')
const warningMessage = ref('')


function cercaProdottoButton() {
  if (cercato.value == '') {
    warningMessage.value = 'inserisci il prodotto da cercre'
    return;
  }
  warningMessage.value = ''
  cercaProdotto(cercato.value).catch(err => console.error(err));
};


</script>

<template>
  <form>
    <center>
      <h1>Ricerca un prodotto nel catalogo</h1>


      <br />

      <input v-model="cercato" />
      <button type="button" @click="cercaProdottoButton()">cerca</button>

      <br />

      <span style="color: red"> {{ warningMessage }} </span>
    </center>

    <ul>
      <li v-for="prodottoCercato in prodottoCercato.value" :key="prodottoCercato.self">
        <router-link to="/prodotto" @click="dettagliProdotto(prodottoCercato)">{{ prodottoCercato.name }}</router-link>
      </li>
    </ul>

  </form>
</template>
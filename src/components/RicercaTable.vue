<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodottoCercato, cercaProdotto, dettagliProdotto } from '../states/products.js'

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
        <router-link to="/local_shop_advisor_Hosting/prodotto" @click="dettagliProdotto(prodottoCercato)">{{
            prodottoCercato.name
        }}</router-link>
      </li>
    </ul>

  </form>
</template>
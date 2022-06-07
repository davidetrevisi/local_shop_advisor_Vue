<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { prodotto, fetchProdotto, prodottoCercato, cercaProdotto, dettagliProdotto } from '../states/products.js'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`
const PRODUCTS_URL = API_URL + '/products'

const cercato = ref('')
const warningMessage = ref('')
const quantity = ref("")
const n = reactive([])
const notN = computed(() => n.value === false);
const isN = computed(() => n.value === true);

n.value = false

function cercaProdottoButton() {
  if (cercato.value == '') {
    warningMessage.value = 'inserisci il prodotto da cercre'
    return;
  }
  n.value = true
  warningMessage.value = ''
  cercaProdotto(cercato.value).catch(err => console.error(err));
};


onMounted(() => {
  fetchProdotto() // fetch on init
})



</script>

<template>
  <center>
    <h1>Ricerca un prodotto nel catalogo</h1>


    <br />

    <input v-model="cercato" placeholder="cerca" />
    <button class="btn2" type="button" @click="cercaProdottoButton();">cerca</button>

    <br />

    <span style="color: red"> {{ warningMessage }} </span>
  </center>

  <form v-if="notN">
    <h1>Prodotti in catalogo:</h1>

    <ul>
      <li v-for="prodotto in prodotto.value" :key="prodotto.self">
        <router-link to="/local_shop_advisor_Hosting/prodotto" @click="dettagliProdotto(prodotto.id)">{{ prodotto.name
        }}</router-link>
      </li>
    </ul>
  </form>

  <form v-if="isN">
    <h1>Prodotto ricercato:</h1>
    <ul>
      <li v-for="prodottoCercato in prodottoCercato.value" :key="prodottoCercato.self">
        <router-link to="/local_shop_advisor_Hosting/prodotto" @click="dettagliProdotto(prodottoCercato.id)">{{
            prodottoCercato.name
        }}
        </router-link>
      </li>
    </ul>
  </form>
</template>

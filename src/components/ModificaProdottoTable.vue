<script setup>
import { ref, onMounted, watch } from 'vue'
import { prodottosingolo, modificaProdotto } from '../states/products.js'



const warningMessage = ref('')


function modificaProdottoButton(ID) {
  warningMessage.value = ''
  modificaProdotto(prodottosingolo.value.name, prodottosingolo.value.category, prodottosingolo.value.price, prodottosingolo.value.description, ID)
    .catch(err => console.error(err));
};

</script>



<template>
  <form>
    <span>Modifica il prodotto</span>
    <br />
    <input v-model="prodottosingolo.value.name" />
    <input v-model="prodottosingolo.value.category" />
    <input v-model="prodottosingolo.value.price" />
    <input v-model="prodottosingolo.value.description" />
    <button class="btn2" style="margin-left: 0.5em;" type="button"
      @click="modificaProdottoButton(prodottosingolo.value.self); $router.push('/local_shop_advisor_Hosting/catalogoVenditore')">modifica</button>
    <br />
    <span style="color: red"> {{ prodottosingolo.value.self }} </span>
    <span style="color: red"> {{ warningMessage }} </span>
  </form>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { negoziosingolo, modificaNegozio } from '../states/shops.js'



const warningMessage = ref('')


function modificaNegozioButton(ID) {
  warningMessage.value = ''
  modificaNegozio(negoziosingolo.value.name, negoziosingolo.value.category, negoziosingolo.value.position, negoziosingolo.value.description, ID)
    .catch(err => console.error(err));
};

</script>



<template>
  <form>
    <span>Modifica il negozio</span>
    <br />
    <input v-model="negoziosingolo.value.name" />
    <input v-model="negoziosingolo.value.category" />
    <input v-model="negoziosingolo.value.position" />
    <input v-model="negoziosingolo.value.description" />
    <button class="btn2" style="margin-left: 0.5em;" type="button"
      @click="modificaNegozioButton(negoziosingolo.value.self); $router.push('/local_shop_advisor_Hosting/negozio')">modifica</button>
    <br />
    <span style="color: red"> {{ negoziosingolo.value.self }} </span>
    <span style="color: red"> {{ warningMessage }} </span>
  </form>
</template>

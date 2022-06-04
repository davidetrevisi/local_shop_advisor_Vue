<script setup>
import { ref, onMounted, watch } from 'vue'
import { modificaStato, ordinesingolo } from '../states/orders.js'
import { loggedUser } from '../states/users.js'
import { prodotto, fetchProdotto } from '../states/products.js'
const status = ref("")
onMounted(() => {
  fetchProdotto()
})
console.log(ordinesingolo)
</script>

<template>
  <h1>Ordine: {{ ordinesingolo.value.id }}</h1>
  <br />
  <h3>Cliente: {{ ordinesingolo.value.customerId }}</h3>
  <br />
  <ul>

    <li v-for="item in ordinesingolo.value.items" :key="item.value">
     <!-- <h3>Prodotto: {{ (prodotto.value.find(p => p.id == item?.productId) || { name: 'unknown' }).name }}</h3>-->
      <h3 v-if="item.productId?.name !== undefined">Nome: {{item?.productId?.name}}</h3>
      <h3 v-if="item.productId?.name === undefined" style="color: red" >Prodotto eliminato dal catalogo</h3>
      <h3>Prezzo: {{ item.price }} €</h3>
      <h3>Quantitá: {{ item.quantity }}</h3>
      <h3>Parziale: {{ item.total }} €</h3>
    </li>

  </ul>
  <br />
  <h3>Totale: {{ ordinesingolo.value.subTotal }} €</h3>
  <br />
  <h3>Metodo di pagamento: {{ ordinesingolo.value.payment }} </h3>
  <br />
  <h3>Indirizzo di spedizione: {{ ordinesingolo.value.shipping_address.street }},
    {{ ordinesingolo.value.shipping_address.number }} {{ ordinesingolo.value.shipping_address.city }}
    {{ ordinesingolo.value.shipping_address.CAP }}</h3>
  <br />
  <h3>Stato: {{ ordinesingolo.value.status }}</h3>
  <br />
  <span v-if="loggedUser.account == 'Venditore'">Modifica lo stato dell'ordine
    <br />
    <input v-model="status" placeholder="Stato" />
  </span>
  <br />
  <button class="btn2" @click="modificaStato(status, ordinesingolo.value.self); $router.push('/ordiniVenditore')"
    v-if="loggedUser.account == 'Venditore'">Modifica Stato</button>

</template>
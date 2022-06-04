<script setup>
import { onBeforeMount } from 'vue'
import { loggedUser } from '../states/users.js'
<<<<<<< HEAD
import { carrello, cercaCarrello, eliminaCarrello, svuotaCarrello} from '../states/carts.js'
import { prodotto, fetchProdotto} from '../states/products.js'
=======
import { carrello, cercaCarrello, eliminaCarrello } from '../states/carts.js'
import { prodotto, fetchProdotto } from '../states/products.js'
>>>>>>> 5d5398ae21df3ffed1825bb1087b4d29a3a6d477
import { aggiungiOrdine } from '../states/orders.js'
onBeforeMount(() => {
  fetchProdotto()
  cercaCarrello()
})

//(prodotto.value.find(p => p.id == item.productId._id) || { name: 'unknown' }).name
</script>



<template>
<<<<<<< HEAD
 <h3 v-if="loggedUser.id !== undefined"> Carrello di: {{loggedUser.email}} </h3>
    <ul>
      
        <li v-for="item in carrello.value.items" :key="item.value">
            <h3>Prodotto: {{( prodotto.value.find(p=>p.id==item?.productId) || {name: 'Prodotto non presente nel catalogo, svuotare il carrello'} ).name}}</h3>
            <h3>Prezzo: {{ item.price }} €</h3>
            <h3>Quantitá: {{ item.quantity }}</h3>
            <h3>Parziale: {{ item.total }} €</h3>
            <button class="btn2" @click="eliminaCarrello(item.productId)">Elimina il prodotto dal carrello</button></li>
            
    </ul>

    <h3>Totale: {{ carrello.value.subTotal }} €</h3>
    <button class="btn2" @click="svuotaCarrello()">Svuota il Carrello</button>
    <br/>
    <button class="btn2" :disabled="carrello.value.subTotal == 0"
    @click="aggiungiOrdine(); $router.push('/ordini')">Checkout</button>
=======
  <h3 v-if="loggedUser.id !== undefined"> Carrello di: {{ loggedUser.email }} </h3>
  <ul>

    <li v-for="item in carrello.value.items" :key="item.value">
      <h3>Prodotto: {{ item.productId.name }}</h3>
      <h3>Prezzo: {{ item.price }} €</h3>
      <h3>Quantitá: {{ item.quantity }}</h3>
      <h3>Parziale: {{ item.total }} €</h3>
      <button class="btn2" @click="eliminaCarrello(item.productId._id)">Elimina il prodotto dal carrello</button>
    </li>

  </ul>

  <h3>Totale: {{ carrello.value.subTotal }} €</h3>
  <button class="btn2" :disabled="carrello.value.subTotal == 0"
    @click="aggiungiOrdine(); $router.push('/ordini')">Checkout</button>
>>>>>>> 5d5398ae21df3ffed1825bb1087b4d29a3a6d477
</template>
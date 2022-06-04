<script setup>
import { onBeforeMount } from 'vue'
import { loggedUser } from '../states/users.js'
import { carrello, cercaCarrello, eliminaCarrello, svuotaCarrello} from '../states/carts.js'
import { prodotto, fetchProdotto} from '../states/products.js'
import { aggiungiOrdine } from '../states/orders.js'
onBeforeMount(() => {
  fetchProdotto()
  cercaCarrello()
})

//(prodotto.value.find(p => p.id == item.productId._id) || { name: 'unknown' }).name
</script>



<template>
 <h3 v-if="loggedUser.id !== undefined"> Carrello di: {{loggedUser.email}} </h3>
    <ul>
      
        <li v-for="item in carrello.value.items" :key="item.value">
            <h3 v-if="item.productId?.name !== undefined">Prodotto: {{item?.productId?.name}}</h3>
            <h3 v-if="item.productId?.name === undefined" style="color: red" >Prodotto eliminato dal catalogo, svuotare il carrello</h3>
            <h3 v-if="item.productId?.name !== undefined">Prezzo: {{ item.price }} €</h3>
            <h3 v-if="item.productId?.name !== undefined">Quantitá: {{ item.quantity }}</h3>
            <h3 v-if="item.productId?.name !== undefined">Parziale: {{ item.total }} €</h3>
            <button v-if="item.productId?.name !== undefined" class="btn2" @click="eliminaCarrello(item.productId._id)">Elimina il prodotto dal carrello</button>
            <button v-if="item.productId?.name === undefined" class="btn2" @click="svuotaCarrello(); $router.push('/catalogo')">Svuota il carrello</button></li>
            
    </ul>

    <h3>Totale: {{ carrello.value.subTotal }} €</h3>
    <button class="btn2" :disabled="carrello.value.subTotal == 0"
    @click="aggiungiOrdine(); $router.push('/ordini')">Checkout</button>
</template>
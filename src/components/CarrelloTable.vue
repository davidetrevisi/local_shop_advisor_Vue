<script setup>
import { } from 'vue'
import { carrello, cercaCarrello, carrelloSalvato, eliminaCarrello} from '../states/carts.js'
cercaCarrello()

</script>



<template>
    <h1>Carrello di: {{ carrelloSalvato.user }}</h1>

    <ul>
        <li v-for="item in carrelloSalvato.items" :key="item.value">
            <h3>Prodotto: {{ item.productId }}</h3>
            <h3>Quantitá: {{ item.quantity }}</h3>
            <button @click="eliminaCarrello(item.productId)">Elimina il prodotto dal carrello</button>
        </li>
    </ul>

    <h3>Totale: {{ carrelloSalvato.subTotal }}</h3>
</template>
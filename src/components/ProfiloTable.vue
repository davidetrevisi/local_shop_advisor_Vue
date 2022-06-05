<script setup>
import { ref, onMounted, watch } from 'vue'
import { loggedUser, cercaUtente, utenteCercato } from '../states/users.js'
const quantity = ref("")

cercaUtente()

</script>

<template>
    <h1>Profilo</h1>
    <br />
    <h3>Tipo account: {{ loggedUser.account }}</h3>
    <br />
    <h3>Nome: {{ utenteCercato.name }}</h3>
    <br />
    <h3>Cognome: {{ utenteCercato.surname }}</h3>
    <br />
    <h3>Email: {{ loggedUser.email }}</h3>

</template>
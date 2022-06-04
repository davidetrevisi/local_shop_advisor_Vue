<script setup>
import { ref, onMounted, watch } from 'vue'
import { loggedUser } from '../states/users.js'
const quantity = ref("")

</script>

<template>
    <h1>Profilo</h1>
    <br />
    <h3>Tipo account: {{ loggedUser.account }}</h3>
    <br />
    <h3>Email: {{ loggedUser.email }}</h3>

</template>
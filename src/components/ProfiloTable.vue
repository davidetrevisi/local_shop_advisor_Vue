<script setup>
import { ref, onMounted, watch } from 'vue'
import { loggedUser } from '../states/users.js'
const quantity = ref("")

</script>

<template>
    <h1>{{ loggedUser.account }}</h1>
    <br />
    <h3>Tipo account: {{ loggedUser.email }}</h3>
    <br />

</template>
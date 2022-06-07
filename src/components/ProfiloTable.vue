<script setup>
import { loggedUser } from '../states/users.js'

</script>

<template>
    <h1>Profilo</h1>
    <br />
    <h3>Tipo account: {{ loggedUser.account }}</h3>
    <br />
    <h3>Nome: {{ loggedUser.name }}</h3>
    <br />
    <h3>Cognome: {{ loggedUser.surname }}</h3>
    <br />
    <h3>Email: {{ loggedUser.email }}</h3>

</template>
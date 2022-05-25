<script setup>
import { ref, onMounted, watch } from "vue";
const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`;
const API_URL = HOST + `/api/v1`;

const email = ref("");
const password = ref("");

function login() {
  fetch(API_URL + "/authentications/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email: email.value, password: password.value }),
  })
    .then((res) => console.log(res.data)) // Transform the data into json
    .catch((error) => console.error(error)); // If there is any error you will catch them here
}

function logout() {
  fetch(API_URL + "/authentications/logout", {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  }).catch((error) => console.error(error)); // If there is any error you will catch them here
}
</script>

<template>
  <form>
    <button type="button" @click="logout">LogOut</button>

    <input v-model="email" />
    <input v-model="password" />

    <button type="button" @click="login">LogIn</button>
  </form>
</template>

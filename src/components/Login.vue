<script setup>
import { ref, onMounted, watch } from "vue";
import { loggedUser, setLoggedUser, clearLoggedUser } from "../states/users.js";

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`;
const API_URL = HOST + `/api/v1`;

const emit = defineEmits(["login"]);
const email = ref("");
const password = ref("");

function login() {
  fetch(API_URL + "/authentications/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email: email.value, password: password.value }),
  })
    //.then((res) => console.log(res.data))
    .then((res) => res.json())
    .then(function (data) {
      setLoggedUser(data);
      emit("login", loggedUser);
    })
    .catch((error) => console.error(error)); // If there is any error you will catch them here
}

function logout() {
  fetch(API_URL + "/authentications/logout", {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  })
    .then(clearLoggedUser())
    .catch((error) => console.error(error)); // If there is any error you will catch them here
}
</script>

<template>
  <form>
    <input v-model="email" placeholder="Email"/>
    <input v-model="password" placeholder="Password"/>
    <button type="button" @click="login">LogIn</button>
    <button type="button" @click="logout" v-if="loggedUser.id !== undefined">LogOut</button>
  </form>
</template>

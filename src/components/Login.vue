<script setup>
import { ref, onMounted, watch } from "vue";
import { loggedUser, login, logout } from "../states/users.js";

const emit = defineEmits(["login"]);
const email = ref("");
const password = ref("");

function loginButton() {
  login(email.value, password.value);
  emit("login", loggedUser);
}
</script>

<template>
  <form>
    <input v-model="email" placeholder="Email"/>
    <input v-model="password" placeholder="Password"/>
    <button type="button" @click="loginButton">LogIn</button>
    <button type="button" @click="logout" v-if="loggedUser.id !== undefined">LogOut</button>
  </form>
</template>

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
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" />
    <button class="btn" style="margin-left: 1rem ;" type="button"
      @click="loginButton(); $router.push('/')">LogIn</button>
  </form>
</template>

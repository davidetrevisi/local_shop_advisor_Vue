<script setup>
import { ref, computed } from "vue";
import { login, signup } from "../states/users.js";

const account = ref("cliente");
const email = ref("");
const password = ref("");
const name = ref("");
const surname = ref("");
const phone = ref("");
const birthdate = ref(dateToString(new Date()));
const payment = ref("");
const shipping_city = ref("");
const shipping_CAP = ref("");
const shipping_street = ref("");
const shipping_number = ref("");
const billing_city = ref("");
const billing_CAP = ref("");
const billing_street = ref("");
const billing_number = ref("");
const personal_city = ref("");
const personal_CAP = ref("");
const personal_street = ref("");
const personal_number = ref("");

const isVenditore = computed(() => account.value === "venditore");
const isRed = ref(true);

function toggleRed() {
  isRed.value = !isRed.value;
}

function signupButton() {
  signup(
    account.value,
    email.value,
    password.value,
    name.value,
    surname.value,
    phone.value,
    stringToDate(birthdate.value),
    payment.value,
    shipping_city.value,
    shipping_CAP.value,
    shipping_street.value,
    shipping_number.value,
    billing_city.value,
    billing_CAP.value,
    billing_street.value,
    billing_number.value,
    personal_city.value,
    personal_CAP.value,
    personal_street.value,
    personal_number.value,
  );

  setTimeout(() => login(email.value, password.value), 2000);
}

function isNumeric(value) {
  return Number.isInteger(value);
}

const canRegister = computed(
  () => isNumeric(phone.value) && stringToDate(birthdate.value) < new Date()
);

function stringToDate(str) {
  const [y, m, d] = str.split("-");
  return new Date(+y, m - 1, +d);
}

function dateToString(date) {
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate())
  );
}

function pad(n, s = String(n)) {
  return s.length < 2 ? `0${s}` : s;
}
</script>

<template>
  <center>
    <h1>Form registrazione</h1>
  </center>
  <br />
  <form>
    <select v-model="account">
      <option value="cliente">Cliente</option>
      <option value="venditore">Venditore</option>
    </select>
    <div>Dati personali</div>
    <input v-model="email" :class="{ red: isRed }" placeholder="Email" />
    <input v-model="password" :class="{ red: isRed }" placeholder="Password" />
    <input v-model="name" :class="{ red: isRed }" placeholder="Nome" />
    <input v-model="surname" :class="{ red: isRed }" placeholder="Cognome" />
    <input v-model.number="phone" :class="{ red: isRed }" placeholder="Numero di telefono" />
    <input type="date" v-model="birthdate" :class="{ red: isRed }" />
    <input v-model="payment" :hidden="isVenditore" :class="{ red: isRed }" placeholder="Metodo di pagamento" />
    <div :hidden="isVenditore">Indirizzo di spedizione</div>
    <input v-model="shipping_city" :hidden="isVenditore" :class="{ red: isRed }" placeholder="Città" />
    <input v-model="shipping_CAP" :hidden="isVenditore" :class="{ red: isRed }" placeholder="CAP" />
    <input v-model="shipping_street" :hidden="isVenditore" :class="{ red: isRed }" placeholder="Via / Strada" />
    <input v-model="shipping_number" :hidden="isVenditore" :class="{ red: isRed }" placeholder="Civico" />
    <div :hidden="isVenditore">Indirizzo di fatturazione</div>
    <input v-model="billing_city" :hidden="isVenditore" :class="{ red: isRed }" placeholder="Città" />
    <input v-model="billing_CAP" :hidden="isVenditore" :class="{ red: isRed }" placeholder="CAP" />
    <input v-model="billing_street" :hidden="isVenditore" :class="{ red: isRed }" placeholder="Via / Strada" />
    <input v-model="billing_number" :hidden="isVenditore" :class="{ red: isRed }" placeholder="Civico" />

    <div :hidden="!isVenditore">Indirizzo personale</div>
    <input v-model="personal_city" :hidden="!isVenditore" :class="{ red: isRed }" placeholder="Città" />
    <input v-model="personal_CAP" :hidden="!isVenditore" :class="{ red: isRed }" placeholder="CAP" />
    <input v-model="personal_street" :hidden="!isVenditore" :class="{ red: isRed }" placeholder="Via / Strada" />
    <input v-model="personal_number" :hidden="!isVenditore" :class="{ red: isRed }" placeholder="Civico" />

    <div />
    <button class="btn2" :disabled="!canRegister" type="button" @click="signupButton(); $router.push('/')">
      Registrati
    </button>
    <p>{{ canRegister ? "" : "Alcuni parametri sono errati." }}</p>
  </form>
</template>

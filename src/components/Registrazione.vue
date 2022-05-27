<script setup>
import { ref, computed } from "vue";
import { loggedUser } from "@/states/users.js";

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`;
const API_URL = HOST + `/api/v1`;

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

function isNumeric(value) {
  return Number.isInteger(value);
}

const canRegister = computed(
  () => isNumeric(phone.value) && stringToDate(birthdate.value) < new Date()
);

function signup() {
  if (account.value === "cliente") {
    fetch(API_URL + "/authentications/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        account: account.value,
        email: email.value,
        password: password.value,
        name: name.value,
        surname: surname.value,
        phone: phone.value,
        birthdate: stringToDate(birthdate.value),
        payment: payment.value,
        shipping_city: shipping_city.value,
        shipping_CAP: shipping_CAP.value,
        shipping_street: shipping_street.value,
        shipping_number: shipping_number.value,
        billing_city: billing_city.value,
        billing_CAP: billing_CAP.value,
        billing_street: billing_street.value,
        billing_number: billing_number.value,
      }),
    })
      .then((res) => console.log(res.data)) // Transform the data into json
      .catch((error) => console.error(error)); // If there is any error you will catch them here
  } else if (account.value === "venditore") {
    fetch(API_URL + "/authentications/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        account: account.value,
        email: email.value,
        password: password.value,
        name: name.value,
        surname: surname.value,
        phone: phone.value,
        birthdate: stringToDate(birthdate.value),
        personal_city: personal_city.value,
        personal_CAP: personal_CAP.value,
        personal_street: personal_street.value,
        personal_number: personal_number.value,
      }),
    })
      .then((res) => console.log(res.data)) // Transform the data into json
      .catch((error) => console.error(error)); // If there is any error you will catch them here
  }
}

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
    <input
      v-model.number="phone"
      :class="{ red: isRed }"
      placeholder="Numero di telefono"
    />
    <input type="date" v-model="birthdate" :class="{ red: isRed }" />
    <input
      v-model="payment"
      :hidden="isVenditore"
      :class="{ red: isRed }"
      placeholder="Metodo di pagamento"
    />
    <div :hidden="isVenditore">Indirizzo di spedizione</div>
    <input
      v-model="shipping_city"
      :hidden="isVenditore"
      :class="{ red: isRed }"
      placeholder="Città"
    />
    <input
      v-model="shipping_CAP"
      :hidden="isVenditore"
      :class="{ red: isRed }"
      placeholder="CAP"
    />
    <input
      v-model="shipping_street"
      :hidden="isVenditore"
      :class="{ red: isRed }"
      placeholder="Via / Strada"
    />
    <input
      v-model="shipping_number"
      :hidden="isVenditore"
      :class="{ red: isRed }"
      placeholder="Civico"
    />
    <div :hidden="isVenditore">Indirizzo di fatturazione</div>
    <input
      v-model="billing_city"
      :hidden="isVenditore"
      :class="{ red: isRed }"
      placeholder="Città"
    />
    <input
      v-model="billing_CAP"
      :hidden="isVenditore"
      :class="{ red: isRed }"
      placeholder="CAP"
    />
    <input
      v-model="billing_street"
      :hidden="isVenditore"
      :class="{ red: isRed }"
      placeholder="Via / Strada"
    />
    <input
      v-model="billing_number"
      :hidden="isVenditore"
      :class="{ red: isRed }"
      placeholder="Civico"
    />

    <div :hidden="!isVenditore">Indirizzo personale</div>
    <input
      v-model="personal_city"
      :hidden="!isVenditore"
      :class="{ red: isRed }"
      placeholder="Città"
    />
    <input
      v-model="personal_CAP"
      :hidden="!isVenditore"
      :class="{ red: isRed }"
      placeholder="CAP"
    />
    <input
      v-model="personal_street"
      :hidden="!isVenditore"
      :class="{ red: isRed }"
      placeholder="Via / Strada"
    />
    <input
      v-model="personal_number"
      :hidden="!isVenditore"
      :class="{ red: isRed }"
      placeholder="Civico"
    />

    <div />
    <button :disabled="!canRegister" type="button" @click="signup">
      Registrati
    </button>
    <p>{{ canRegister ? "" : "Alcuni parametri sono errati." }}</p>
  </form>
</template>

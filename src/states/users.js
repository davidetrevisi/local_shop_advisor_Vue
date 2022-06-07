import { reactive, ref, onMounted, watch } from "vue";

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`;
const API_URL = HOST + `/api/v2`;

const utenteCercato = reactive([])


const loggedUser = reactive({
  account: undefined,
  email: undefined,
  id: undefined,
  self: undefined,
  name: undefined,
  surname: undefined
});

function setLoggedUser(data) {
  loggedUser.account = data.account;
  loggedUser.email = data.email;
  loggedUser.id = data.id;
  loggedUser.self = data.self;
  loggedUser.name = data.name;
  loggedUser.surname = data.surname;
}

function clearLoggedUser() {
  loggedUser.account = undefined;
  loggedUser.email = undefined;
  loggedUser.id = undefined;
  loggedUser.self = undefined;
  loggedUser.name = undefined;
  loggedUser.surname = undefined;
}

async function login(email, password) {
  fetch(API_URL + "/authentications/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json", 'Access-Control-Allow-Origin': 'https://davidetrevisi.github.io', },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((res) => res.json())
    .then(function (data) {
      setLoggedUser(data);
      console.log(data.message)
      return;
    })
    .catch((error) => console.error(error)); // If there is any error you will catch them here
}

async function logout() {
  await fetch(API_URL + "/authentications/logout", {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  })
    .then(clearLoggedUser())
    .catch((error) => console.error(error)); // If there is any error you will catch them here
}

async function signup(
  account,
  email,
  password,
  name,
  surname,
  phone,
  birthdate,
  payment,
  shipping_city,
  shipping_CAP,
  shipping_street,
  shipping_number,
  billing_city,
  billing_CAP,
  billing_street,
  billing_number,
  personal_city,
  personal_CAP,
  personal_street,
  personal_number
) {
  if (account === "cliente") {
    await fetch(API_URL + "/authentications/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Access-Control-Allow-Origin': 'https://davidetrevisi.github.io',
      },
      body: JSON.stringify({
        account: account,
        email: email,
        password: password,
        name: name,
        surname: surname,
        phone: phone,
        birthdate: birthdate,
        payment: payment,
        shipping_city: shipping_city,
        shipping_CAP: shipping_CAP,
        shipping_street: shipping_street,
        shipping_number: shipping_number,
        billing_city: billing_city,
        billing_CAP: billing_CAP,
        billing_street: billing_street,
        billing_number: billing_number,
      }),
    })
      .then((res) => console.log(res.data)) // Transform the data into json
      .catch((error) => console.error(error)); // If there is any error you will catch them here
  } else if (account === "venditore") {
    await fetch(API_URL + "/authentications/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Access-Control-Allow-Origin': 'https://davidetrevisi.github.io',
      },
      body: JSON.stringify({
        account: account,
        email: email,
        password: password,
        name: name,
        surname: surname,
        phone: phone,
        birthdate: birthdate,
        personal_city: personal_city,
        personal_CAP: personal_CAP,
        personal_street: personal_street,
        personal_number: personal_number,
      }),
    })
      .then((res) => console.log(res.data)) // Transform the data into json
      .catch((error) => console.error(error)); // If there is any error you will catch them here
  }
}

export { loggedUser, setLoggedUser, clearLoggedUser, login, logout, signup };

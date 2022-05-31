// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api

import { reactive } from 'vue'
import { loggedUser } from './users'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v2`
const PRODUCTS_URL = API_URL + '/products'


const prodotto = reactive([])

const prodottoCercato = reactive([])
const prodottosingolo = reactive([])



async function fetchProdotto() {
    prodotto.value = await (await fetch(PRODUCTS_URL)).json()
}

async function createProdotto(nome, categoria, prezzo, descrizione) { //da rimettere async
    fetch(PRODUCTS_URL, {
        method: 'POST',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, category: categoria, price: prezzo, description: descrizione, userId: loggedUser.id }),
    })
    fetchProdotto()
};

async function deleteProdotto(prodotto) {
    await fetch(HOST + prodotto.self, {
        method: 'DELETE',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' }
    })
    catalogoProdotto()
};

async function cercaProdotto(nome) {
    prodottoCercato.value = await (await fetch(`${PRODUCTS_URL}/find/${nome}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()

};

async function catalogoProdotto() {
    prodottoCercato.value = await (await fetch(PRODUCTS_URL + '/catalog/' + loggedUser.id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()

};
async function catalogoProdottoNegozio(id) {
    prodottoCercato.value = await (await fetch(PRODUCTS_URL + '/shop/' + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()

};
async function dettagliProdotto(id) {
    prodottosingolo.value = await (await fetch(PRODUCTS_URL + '/' + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()
    console.log(id)
};

async function modificaProdotto(nome, categoria, prezzo, descrizione, ID) { //da rimettere async
    console.log(ID);
    fetch(HOST + ID, {
        method: 'PUT',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, category: categoria, price: prezzo, description: descrizione }),
    })
    console.log(ID);

};


export { prodotto, prodottoCercato, prodottosingolo, catalogoProdotto, fetchProdotto, createProdotto, deleteProdotto, cercaProdotto, modificaProdotto, dettagliProdotto, catalogoProdottoNegozio } 
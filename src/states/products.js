// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api

import { reactive } from 'vue'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`
const PRODUCTS_URL = API_URL + '/products'


const prodotto = reactive([])

const prodottoCercato = reactive([])
const prodottoCercatoId = reactive([])

const prodottoDaModificare = reactive([])



async function fetchProdotto() {
    prodotto.value = await (await fetch(PRODUCTS_URL)).json()
}

async function createProdotto(nome, categoria, prezzo, descrizione) { //da rimettere async
    fetch(PRODUCTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, category: categoria, price: prezzo, description: descrizione }),
    })
    fetchProdotto()
};

async function deleteProdotto(prodotto) {
    await fetch(HOST + prodotto.self, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    fetchProdotto()
};

async function cercaProdotto(nome) {
    prodottoCercato.value = await (await fetch(`${PRODUCTS_URL}/find/${nome}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()
};

async function salvaProdotto(prodotto) {
    prodottoDaModificare.self = prodotto.self
    prodottoDaModificare.id = prodotto.id
    prodottoDaModificare.name = prodotto.name
    prodottoDaModificare.description = prodotto.description
    prodottoDaModificare.price = prodotto.price
    prodottoDaModificare.category = prodotto.category
};


async function modificaProdotto(nome, categoria, prezzo, descrizione, ID) { //da rimettere async
    console.log(ID);
    fetch(HOST + ID, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, category: categoria, price: prezzo, description: descrizione }),
    })
    console.log(ID);

};


export { prodotto, prodottoCercato, prodottoDaModificare, fetchProdotto, createProdotto, deleteProdotto, cercaProdotto, salvaProdotto, modificaProdotto } 
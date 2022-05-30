import { reactive } from 'vue'
import { loggedUser } from '../states/users.js'
const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v2`
const SHOPS_URL = API_URL + '/shops'

const negozio = reactive([])
const listaNegozio = reactive([])
const negozioDaModificare = reactive([])

async function fetchNegozio() {
    negozio.value = await (await fetch(SHOPS_URL)).json()
}

async function createNegozio(nome, categoria, posizione, descrizione) { //da rimettere async
    fetch(SHOPS_URL, {
        method: 'POST',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, category: categoria, position: posizione, description: descrizione, userId: loggedUser.id }),
    })
};
async function listaNegozi() {
    listaNegozio.value = await (await fetch(SHOPS_URL + '/list/' + loggedUser.id, {
        method: 'GET',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' }
    })).json()

};
async function deleteNegozio(negozio) {
    console.log(negozio.self);
    await fetch(HOST + negozio.self, {
        method: 'DELETE',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' }
    })

    listaNegozi()
};

async function salvaNegozio(negozio) {
    negozioDaModificare.self = negozio.self
    negozioDaModificare.name = negozio.name
    negozioDaModificare.category = negozio.category
    negozioDaModificare.position = negozio.position
    negozioDaModificare.description = negozio.description
    negozioDaModificare.userId = negozio.userId

};

async function modificaNegozio(nome, categoria, posizione, descrizione, ID) { //da rimettere async
    console.log(ID);
    fetch(HOST + ID, {
        method: 'PUT',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, category: categoria, position: posizione, description: descrizione }),
    })
};


export { negozio, negozioDaModificare, fetchNegozio, createNegozio, deleteNegozio, salvaNegozio, modificaNegozio, listaNegozio, listaNegozi } 
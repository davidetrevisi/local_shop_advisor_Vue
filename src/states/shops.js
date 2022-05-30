import { reactive } from 'vue'
import { loggedUser } from '../states/users.js'
const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v2`
const SHOPS_URL = API_URL + '/shops'

const negozio = reactive([])
const listaNegozio = reactive([])
const negoziosingolo = reactive([])


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
async function dettagliNegozio(id) {
    negoziosingolo.value = await (await fetch(SHOPS_URL + '/' + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()
    console.log(id)
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


export { negozio, negoziosingolo, dettagliNegozio, createNegozio, deleteNegozio, modificaNegozio, listaNegozio, listaNegozi } 
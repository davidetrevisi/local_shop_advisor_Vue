import { reactive } from 'vue'
import { loggedUser } from '../states/users.js'
import { catalogoProdottoNegozio } from './products.js'
const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v2`
const SHOPS_URL = API_URL + '/shops'

const negozio = reactive([])
const listaNegozio = reactive([])
const negoziosingolo = reactive([])


async function createNegozio(nome, categoria, posizione, descrizione, tags, images) { //da rimettere async
    var formData = new FormData();
    formData.append("name", nome);
    formData.append("category", categoria);
    formData.append("position", posizione);
    formData.append("description", descrizione);
    for (const i of Object.keys(tags)) {
        formData.append("tags", tags[i]);
    }
    for (const i of Object.keys(images)) {
        formData.append("images", images[i]);
      }
    formData.append("userId", loggedUser.id);

    fetch(SHOPS_URL, {
        method: 'POST',
        credentials: "include",
        //headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ name: nome, category: categoria, price: prezzo, description: descrizione, userId: loggedUser.id, shopId: negozio }),
        body: formData,
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
        credentials: "include",
        headers: { 'Content-Type': 'application/json' }
    })).json()
    catalogoProdottoNegozio(negoziosingolo.value.id)
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
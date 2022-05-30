import { reactive } from 'vue'
import { loggedUser } from '../states/users.js'
import { svuotaCarrello } from './carts.js'
const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v2`
const ORDERS_URL = API_URL + '/orders'

const ordine = reactive([])
const ordinesingolo = reactive([])
const ordinev = reactive([])
var stato= "In preparazione";



async function aggiungiOrdine() {
    await fetch(ORDERS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerId: loggedUser.id, status: stato}),
    })
    svuotaCarrello();
}

async function listaOrdini() {
    ordine.value = await (await fetch(ORDERS_URL + '/catalog/' + loggedUser.id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()
};
async function dettagliOrdine(id) {
    ordinesingolo.value = await (await fetch(ORDERS_URL + '/' + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()
    console.log(id)
};

async function listaOrdiniVenditore() {
    ordinev.value = await (await fetch(ORDERS_URL + '/catalogv/' + loggedUser.id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()
};
async function modificaStato(stato, ID) {
    fetch(HOST + ID, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: stato }),
    })

};



export { ordine, ordinev, aggiungiOrdine, listaOrdini, listaOrdiniVenditore, modificaStato, dettagliOrdine, ordinesingolo} 
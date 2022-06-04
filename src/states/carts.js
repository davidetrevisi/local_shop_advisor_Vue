import { reactive } from 'vue'
import { loggedUser } from '../states/users.js'
const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v2`
const CARTS_URL = API_URL + '/carts'


const carrello = reactive([])



async function aggiungiCarrello(prodotto, quantita) {
    console.log(prodotto.id)
    await fetch(CARTS_URL, {
        method: 'POST',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: loggedUser.id, itemId: prodotto.id, quantity: quantita }),
    })
    cercaCarrello()
}
async function eliminaCarrello(id) {
    await fetch(CARTS_URL, {
        method: 'POST',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: loggedUser.id, itemId: id, quantity: 0 }),
    })
    cercaCarrello()
}
async function svuotaCarrello() {
    await fetch(CARTS_URL + '/' + loggedUser.id, {
        method: 'DELETE',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
    })
    cercaCarrello()
}

async function cercaCarrello() {
    carrello.value = await (await fetch(CARTS_URL + '/' + loggedUser.id, {
        method: 'GET',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' }
    })).json()
};

export { carrello, cercaCarrello, aggiungiCarrello, eliminaCarrello, svuotaCarrello } 
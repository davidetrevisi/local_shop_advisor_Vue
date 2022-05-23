import { reactive } from 'vue'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`
const CARTS_URL = API_URL + '/carts'
const userId = "5de7ffa74fff640a0491bc4f"
const quant = 5

const carrello = reactive([])
const carrelloSalvato = reactive([])

var nome
var prodotti
var totale


async function aggiungiCarrello(prodotto) {
    console.log(prodotto.id)
    await fetch(CARTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId, itemId: prodotto.id, quantity: quant }),
    })
    cercaCarrello()
}

async function cercaCarrello() {
    carrello.value = await (await fetch(CARTS_URL + '/' + userId, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })).json()
    salvaCarrello(carrello.value.user, carrello.value.items, carrello.value.subTotal)
};


function salvaCarrello(nome, prodotti, totale) {
    carrelloSalvato.user = nome
    carrelloSalvato.items = prodotti
    carrelloSalvato.subTotal = totale
}


export { carrello, carrelloSalvato, cercaCarrello, aggiungiCarrello, salvaCarrello } 
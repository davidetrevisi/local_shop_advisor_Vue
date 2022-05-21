import { reactive } from 'vue'

const HOST = import.meta.env.VITE_API_HOST || `http://localhost:8080`
const API_URL = HOST + `/api/v1`
const SHOPS_URL = API_URL + '/shops'

const negozio = reactive([])

const negozioDaModificare = reactive([])

async function fetchNegozio() {
    negozio.value = await (await fetch(SHOPS_URL)).json()
}

async function createNegozio(nome, categoria, posizione, descrizione) { //da rimettere async
    fetch(SHOPS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, category: categoria, position: posizione, description: descrizione }),
    })
};

async function deleteNegozio(negozio) {
    await fetch(HOST + negozio.self, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    fetchNegozio()
};

async function salvaNegozio(negozio) {
    negozioDaModificare.self = negozio.self
    negozioDaModificare.name = negozio.name
    negozioDaModificare.category = negozio.category
    negozioDaModificare.position = negozio.position
    negozioDaModificare.description = negozio.description

};

async function modificaNegozio(nome, categoria, posizione, descrizione, ID) { //da rimettere async
    fetch(HOST + ID, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, category: categoria, position: posizione, description: descrizione }),
    })
};


export { negozio, negozioDaModificare, fetchNegozio, createNegozio, deleteNegozio, salvaNegozio, modificaNegozio } 
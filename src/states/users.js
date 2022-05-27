import { reactive } from 'vue'

const loggedUser = reactive({
    account: undefined,
    email: undefined,
    id: undefined,
    self: undefined
})

function setLoggedUser (data) {
    loggedUser.account = data.account;
    loggedUser.email = data.email;
    loggedUser.id = data.id;
    loggedUser.self = data.self;
}

function clearLoggedUser () {
    loggedUser.account = undefined;
    loggedUser.email = undefined;
    loggedUser.id = undefined;
    loggedUser.self = undefined;
}

export { loggedUser, setLoggedUser, clearLoggedUser } 
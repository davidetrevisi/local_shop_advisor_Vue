<script setup>
import { ref, onMounted, watch } from 'vue'
import { createProdotto } from '../states/products.js'
import { createNegozio, listaNegozio, listaNegozi, dettagliNegozio, negoziosingolo } from '../states/shops.js'


const name = ref("")
const category = ref('')
const price = ref('')
const description = ref('')
const tags = ref(["tag"]);
var images
const warningMessage = ref('')

const name1 = ref('')
const category1 = ref('')
const position = ref('')
const description1 = ref('')
const tags1 = ref(["tag",])
var images1
const warningMessage1 = ref('')
const scelta = ref('')

onMounted(() => {
  listaNegozi() // fetch on init
})

function setimages(event) {
  images = event.target.files;
  console.log(event.target.files);
}

function setimages1(event) {
  images1 = event.target.files;
  console.log(event.target.files);
}

function createProdottoButton() {
  if (name.value == '' || category.value == '' || price.value == '' || description.value == '') {
    warningMessage.value = 'Please specify valid items!'
    return;
  }
  console.log(scelta.value)
  //dettagliNegozio(scelta.value)
  //console.log(negoziosingolo.id)
  warningMessage.value = ''
  createProdotto(name.value, category.value, price.value, description.value, tags.value, images, scelta.value).catch(err => console.error(err));
};


function createNegozioButton() {
  if (name1.value == '' || category1.value == '' || position.value == '' || description1.value == '') {
    warningMessage1.value = 'Please specify valid items!'
    return;
  }
  warningMessage1.value = ''
  createNegozio(name1.value, category1.value, position.value, description1.value, tags1.value, images1,).catch(err => console.error(err));
};

function addTag1(event) {
  var val = event.target.value.trim()
  tags1.value.push(val)
  event.target.value = ''
}

function addTag(event) {
  var val = event.target.value.trim()
  tags.value.push(val)
  event.target.value = ''
}

function removeTag(item) {
  const i = tags.value.indexOf(item)
  if (i > -1) {
    tags.value.splice(i, 1)
  }
}

function removeTag1(item) {
  const i = tags1.value.indexOf(item)
  if (i > -1) {
    tags1.value.splice(i, 1)
  }
}

</script>



<template>
  <form>
    <span>Inserisci un nuovo negozio</span>
    <br />
    <input v-model="name1" placeholder="nome" />
    <input v-model="category1" placeholder="categoria" />
    <input v-model="position" placeholder="posizione" />
    <input v-model="description1" placeholder="descrizione" />
    <div class="tag-input">
      <div v-for="(tag) in tags1" :key="tag" class="tag-input__tag">
        <span @click='removeTag1(tag)'>x</span>
        {{ tag }}
      </div>
      <input type='text' placeholder="tags" class="tag-input__text" @keydown.enter="addTag1" />
    </div>
    <input @change="setimages1" type="file" accept="image/jpg, image/png, image/jpeg" multiple />
    <button class="btn2" style="margin-left:0.5rem;" type="button" @click="createNegozioButton">inserisci</button>
    <br />
    <span style="color: red"> {{ warningMessage1 }} </span>
  </form>
  <br />
  <br />
  <form>
    <span>Inserisci un nuovo prodotto</span>
    <br />
    <input v-model="name" placeholder="nome" />
    <input v-model="category" placeholder="categoria" />
    <input v-model="price" placeholder="prezzo" />
    <input v-model="description" placeholder="descrizione" />
    <div class="tag-input">
      <div v-for="(tag) in tags" :key="tag" class="tag-input__tag">
        <span @click='removeTag(tag)'>x</span>
        {{ tag }}
      </div>
      <input type='text' placeholder="tags" class="tag-input__text" @keydown.enter='addTag' />
    </div>
    <input @change="setimages" type="file" accept="image/jpg, image/png, image/jpeg" multiple />
    <button class="btn2" style="margin-left:0.5rem;" type="button" @click="createProdottoButton">inserisci</button>
    <br />

    <div>Selected: {{ scelta }}</div>

    <select v-model="scelta">
      <option disabled value="">Seleziona un negozio</option>
      <option v-for="listaNegozio in listaNegozio.value" :key="listaNegozio.self" :value="listaNegozio.id">{{
          listaNegozio.name
      }}
      </option>
    </select>

    <br />
    <span style="color: red"> {{ warningMessage }} </span>
  </form>
</template>

<style scoped>
.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag-input__tag>span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>

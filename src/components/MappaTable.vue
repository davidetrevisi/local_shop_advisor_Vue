<script setup>
import { ref, reactive } from 'vue'
import { location } from '../states/location.js'
//Trento -> lat: 46°4'45"48 N  lng: 11°7'48"72 E


var lat = reactive([])
var lng = reactive([])

lat = location.lat
lng = location.lng
const markers = [1]


var center = reactive([lat = location.lat, lng = location.lng])



const position = ref("trento")

function seleziona() {
    if (position.value === "trento") {
        lat = 46.0793
        lng = 11.1302
    } else {
        lat = 2
        lng = 2
    }
    console.log({ lat, lng });
}


/* codice senza script setup
export default {
    name: 'App',
    data() {
        return {
            center: { lat: 46.0793, lng: 11.1302 },
            markers: [
                {
                    position: {
                        lat: 46.0793, lng: 11.1302
                    },
                }
                , // Along list of clusters
            ]
        }
    }
}
*/
</script>

<template>

    <select style="margin-left: 9rem; margin-bottom: 0.5em; margin-right: 0.5em; font-size: 16px" v-model="position">
        <option value="trento">Trento</option>
        <option value="roma">Roma</option>
    </select>

    <button class="btn2" type="button" @click="seleziona();">seleziona localitá</button>

    <GMapMap :center="{ lat, lng }" :zoom="12" map-type-id="terrain" style="margin: auto; width: 80%; height: 300px;">
        <GMapCluster>
            <GMapMarker v-for="(m, index) in markers" :key="index" :position="{ lat, lng }" :clickable="true"
                @click="center = { lat, lng }" />
        </GMapCluster>
    </GMapMap>
</template>

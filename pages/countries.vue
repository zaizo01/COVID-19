<template>
<div class="">
<h1 class="title">klk</h1>
<div v-for="album in albums" :key="album.id">
<h3>{{albums.name}}</h3>
</div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "",
    data(){
        return{
            albums: []
        }
    },     
    created(){
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response=>{
           this.albums = response.data;
        })
    }
}
</script>


<style scoped>
.columns{
    margin-top: 150px;
}
h1{
    text-align: center;
}
</style>
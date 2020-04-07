<template>
<div id="news">
<h1 class="title">COVID-19 News</h1>
<div class="column is-one-quarter">
<button v-on:click="fetch">Consumir</button>
<Cardnews v-for="noticia in noticias" v-bind:key="noticia.id" v-bind:noticia="noticia"/>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import Cardnews from '../Components/Cardnews'

export default {
   name: "news",
      components:{
       Cardnews
   },
   data: function(){
       return{
           noticias:{}
       };
   },
   created(){
       this.fetch()
   },
   methods:{
       fetch(){
           let result = axios.get("https://cryptic-ravine-96718.herokuapp.com/")
           .then((res) =>{
               this.noticias = res.data.result
               console.log(res.data)
           })
           .catch((err) =>{
               console.log('err')
           })

       }
   }
}
</script>


<style scoped>
.title{
    text-align: center;
    margin-top: 50px;
}
</style>
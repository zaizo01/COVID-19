<template>
<div class="container">
    <h1 class="title">Coronavirus News</h1>
        <div class="columns is-multiline is-mobile">
            <div class="column is-one-quarter" v-for="dato in datos.news" v-bind:key="dato.id">
                <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img v-bind:src="dato.img" alt="Placeholder image">
                            </figure>
                        </div>
                        <header class="card-header">
                            <p class="card-header-title">{{dato.title}}</p>
                        </header>
                        <div class="card-content">
                            <div class="content has-text-weight-medium is-size-6">                       
                                <a v-bind:href="dato.link" class="button is-link">Reed more</a>
                            </div>
                        </div>
                </div>
            </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "news",
    data(){
        return{
            datos:[]
        }
    },
    created(){
        axios.get('https://cryptic-ravine-96718.herokuapp.com/')
        .then(response=>{
            this.datos = response.data;
            console.log(response);
        })
    },
    methods: {
        linked(){
            let li = dato.link;
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
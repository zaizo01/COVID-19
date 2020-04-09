<template>
<div class="container">
    <h1 class="title">Coronavirus by Country</h1>
        <div class="columns is-multiline is-mobile">
            <div class="column is-one-quarter" v-for="dato in datos.Countries" v-bind:key="dato.name">
                <div class="card">
                        <header class="card-header">
                            <p class="card-header-title has-text-info">{{dato.Country}}</p>
                        </header>
                        <div class="card-content">
                            <div class="content has-text-weight-medium is-size-6">
                            <p>Cases: {{dato.TotalConfirmed}}</p>
                            <p>Deaths: {{dato.TotalDeaths}}</p>
                            <p>Recovered: {{dato.TotalRecovered}}</p>
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
    name: "countries",
    data(){
        return{
            datos: []
        }
    },
    created(){
            axios.get('https://api.covid19api.com/summary')
            .then(response=>{
                this.datos = response.data;
                console.log(response)
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
    margin-top: 30px;
}
</style>
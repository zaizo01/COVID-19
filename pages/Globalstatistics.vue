<template>
<div class="container">
    <h1 class="title">Global Coronavirus Information</h1>
        <div class="columns">
            <div class="column">           
                <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Infected</p>
                    <p class="title"  v-for="global in globals" :key="global.id">{{global.TotalConfirmed}}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Dead</p>
                    <p class="title"  v-for="global in globals" :key="global.id">{{global.TotalDeaths}}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">Recovered</p>
                    <p class="title"  v-for="global in globals" :key="global.id">{{global.TotalRecovered}}</p>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    </div>   
</template>

<script>
import axios from 'axios'
export default {
    name: "Globalstatistics",
    data(){
        return{
            globals:[]    
        }      
    },
    created(){
        axios.get('https://api.covid19api.com/summary')
        .then(globalsResponse=>{
            this.globals = globalsResponse.data;
        })
    }
}
</script>


<style scoped>
.columns{
    margin-top: 225px;
}

h1{
    text-align: center;
    margin-top: 30px;
}
</style>
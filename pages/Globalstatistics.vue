<template>
    <div class="column">
        <div v-for="global in globals" :key="global.id">
            <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Infected</p>
                <p class="title">{{global.TotalConfirmed}}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Dead</p>
                <p class="title">{{global.TotalDeaths}}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Recovered</p>
                <p class="title">{{global.TotalRecovered}}</p>
                </div>
            </div>
            </nav>
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
        axios.get('https://api.covid19api.com/summary' )
        .then(globalsResponse=>{
            this.globals = globalsResponse.data;
        })
    }
}
</script>


<style scoped>
.button{
    background-color: #3BB1E4;
    margin-top: 30px;
}
.columns{
    margin-top: 255px;
}
.bg{
    background-color: #F7F7FF;
}

.level{
    margin-top: 150px;
}

</style>
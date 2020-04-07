<template>
<div class="background">
    <div id="navbarMenuHeroC" class="navbar-menu">    
            <nav class="navbar-end">
                <nuxt-link to="/"><a class="navbar-item is-active"><strong>Home</strong></a></nuxt-link>    
                <nuxt-link to="/news"><a class="navbar-item">News</a></nuxt-link> 
                    <div class="navbar-item has-dropdown is-hoverable">
                        <nuxt-link to="/Globalstatistics"><a class="navbar-link">Statistics</a></nuxt-link>
                        <div class="navbar-dropdown is-boxed">
                             <nuxt-link to="/Globalstatistics"><a class="navbar-item is-active">Global</a></nuxt-link>
                             <nuxt-link to="/countries"><a class="navbar-item is-active">Countries</a></nuxt-link>
                        </div>
                    </div>
            </nav>               
    </div> 
        <section class="section">
                <div class="columns is-vcentered">
                    <div class="column is-half">
                        <h1 class="title is-1">COVID-19</h1>
                        <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi, iusto aperiam fuga cum animi in libero omnis laborum consectetur reiciendis expedita sint, ad voluptates laboriosam placeat dolorem cupiditate. Adipisci.</h2>
                        <nuxt-link to="/Globalstatistics">
                        <button class="button is-info is-rounded "><strong>Get Started</strong></button>  
                        </nuxt-link> 
                    </div>
                        <div class="column">
                            <img class="image" src="~/assets/grafic.svg" alt="">
                        </div>
                </div>
    </section>
</div>
</template>

<script>

export default {
   name: "index"
    }
</script>


<style scoped>
section{
    margin-top: 30px;
}
.background{
    background-color: #F7F7FF;
}
.button{
    background-color: #3BB1E4;
}
</style>
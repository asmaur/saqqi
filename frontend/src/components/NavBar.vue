<template>

    <div>

        <!--   <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #000 !important; height: 1.5rem; text-transform: lowercase; color: #fff !important; font-size: .8rem;">

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                <li class="nav-item">
                    <a class="nav-link" href="shop.html" style="color: #fff !important;">login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="shop.html" style="color: #fff !important;">Registrar</a>
                </li>
            </ul>
        </div>

    </nav>
    -->

        <nav class="navbar navbar-expand-lg fixed-top">
            <!--  style="margin-top: 1.5rem;"> -->
            <router-link class="navbar-brand" :to="{name:'home', prefix:GET_LANG}">SAQQI</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'shop', prefix: GET_LANG}">Shop</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" :to="{name:'category', prefix:GET_LANG, params:{slug:name.slug}}" v-for="name in names" :key="name.index">{{name.name}}</router-link>
                            <!--<a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a> -->
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'customized', prefix:GET_LANG}">Customized</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'cart', prefix:GET_LANG}">Cart [ 0 ]</router-link>
                    </li>

                    <vue-lang />
                
                </ul>

            </div>
        </nav>

        {{GET_NAMES}}

    </div>

</template>


<script>
    import VueLang from '@/components/VueLang.vue'
    import {
        mapGetters,
        mapMutations
    } from 'vuex'

    export default {
        name: "NavBar",
        computed: {
            
            ...mapGetters(['GET_LANG','GET_NAMES']),
            
            names: function(){
                return this.GET_NAMES;
            },

        },
        components: {
            VueLang,
        },
        data() {
            return {
                catus: [],
                categories: [],
                cat:{},
                //names:[],

            }
        },
        methods: {
            ...mapMutations(['SET_LANG', 'SET_NAMES']),
            NCcategory(){
                this.SET_NAMES();
            /*
            this.catus = JSON.parse(localStorage.getItem('categories'));
            
            this.categories = this.catus.filter(cat => { return cat.translations[this.$route.params.lang] })
            
                console.log(this.categories)
                
                for (var i in this.categories){
                    console.log(i)
                    this.cat.slug = this.categories[i]["slug"]
                    this.cat.code = this.categories[i]["code"]
                    this.cat.name = this.categories[i]["translations"][this.$route.params.lang]["name"]
                    
                    this.names.push(this.cat)
                    console.log(this.categories[i]["translations"][this.$route.params.lang]["name"])
                    this.cat = {}
                } */
            },
            
        },
        mounted(){
            //this.SET_CATS;
            
                        
        },
        created(){
            //this.SET_CATS;
            this.NCcategory()
        },
        beforeUpdate(){
            this.NCcategory()
        },
        
    }
</script>
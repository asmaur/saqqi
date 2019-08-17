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
            <router-link class="navbar-brand" :to="'/'+GET_LANG+'/'">SAQQI</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <router-link class="nav-link" :to="'/'+GET_LANG+'/shop'">{{$t('menu_shop')}}</router-link>
                    </li>                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{$t('menu_category')}}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="GET_LANG=='en'">
                            <router-link class="dropdown-item" :to="'/'+GET_LANG+'/category/'+name.slug" v-for="name in names" :key="name.index">{{name.name_en}}</router-link>

                        </div>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="GET_LANG=='fr'">
                            <router-link class="dropdown-item" :to="'/'+GET_LANG+'/category/'+name.slug" v-for="name in names" :key="name.index">{{name.name_fr}}</router-link>

                        </div>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="GET_LANG=='pt-br'">
                            <router-link class="dropdown-item" :to="'/'+GET_LANG+'/category/'+name.slug" v-for="name in names" :key="name.index">{{name.name_pt_br}}</router-link>

                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="'/'+GET_LANG+'/customized'">{{$t('menu_customized')}}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="'/'+GET_LANG+'/cart'">{{$t('menu_cart')}} [ {{GET_CART_TOTAL}} ]</router-link>
                    </li>

                    <vue-lang />

                </ul>

            </div>
        </nav>



    </div>

</template>


<script>
    import VueLang from '@/components/VueLang.vue'
    import ax from '../api'
    
    import {
        mapGetters,
        //mapMutations
    } from 'vuex'

    export default {
        name: "NavBar",
        computed: {

            ...mapGetters(['GET_LANG','GET_CART_TOTAL']),

            //names: function() {
              //  return this.GET_NAMES;
           // },


        },
        components: {
            VueLang,
        },
        data() {
            return {
                catus: [],
                categories: [],
                cat: {},
                names:{},

            }
        },
        methods: {
            //...mapMutations(['SET_LANG', 'SET_NAMES']),
            //NCcategory() {
               // this.SET_NAMES();
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
           // },
        get_cats(){
            ax.get("categories/",)
                .then(response => {
                    this.names = response.data;
            })
        },

        },
        mounted() {
            //this.SET_CATS;


        },
        created() {
            //this.SET_CATS;
            //this.NCcategory()
            this.get_cats();
        },
        beforeUpdate() {
            //this.NCcategory()
        },

    }
</script>
<template>

    <div>

        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4>Product | REF {{$route.params.id}}</h4>
                            <hr style="height: .1rem; background-color: #fff; margin-top: -.2rem;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shop">
            <div class="container">


                <div class="row">

                    <div class="col-sm-12 col-md-6 ">

                        <div class="owl-carousel owl-theme" style="border: 1px solid #4fc3f7;">
                            <div class="item" style="height: 200px;">
                                <img class="img-fluid" :src="prod.capa" alt="" style="height: 300px;">
                            </div>
                            <div class="item" v-for="ig in saqimg" :key="ig.id">
                                <img class="img-fluid" :src="ig.image_saqqi" alt="" style="height: 300px;">
                            </div>
                            
                        </div>


                    </div>

                    <div class="col-sm-12 col-md-6 ">

                        <add-prod :prod="prod" :categories="categories" />
                        

                    </div>

                </div>

            </div>

        </div>




    </div>

</template>


<script>
    import AddProd from '@/components/AddProd.vue'
    import $ from 'jquery'
    import ax from '../api'
    import {
        mapGetters,
        //mapMutations
    } from 'vuex'

    export default {
        name: "VueProduct",
        computed: {

            ...mapGetters(['GET_LANG',]),
        },
        components: {
            AddProd,
        },
            data(){
            return{
                categories: [],
                prod: {},
                saqimg: {},
                img_url: 'localhost:8000',
            }
        },
        created() {
                        
                 
            ax.get("products/"+this.$route.params.id+"/")
                .then(response => {
                    this.prod = response.data;
                    this.categories = response.data.categories;
            })
            ax.get("img/"+this.$route.params.id+"/")
                .then(response => {
                    this.saqimg = response.data;
                    
            })
       
                
        },
            beforeUpdate(){
                $(document).ready(function() {
                $('.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: false,
                    autoplay: true,
                    autoplayTimeout: 10000,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                })
            })
            },
    }
</script>
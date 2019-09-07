<template>
    

    <div>

        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4> {{$t('product')}} | REF {{$route.params.id}}</h4>
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

                       
                            
                            <vue-img :ims="saqimg" />
                            
                      


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
    import VueImg from '@/components/VueImg.vue'
    //import $ from 'jquery'
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
            VueImg,
        },
            data(){
            return{
                categories: [],
                prod: {},
                saqimg: {},
                img_url: 'https://api.saqqi.com/media/',
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
         /*   beforeUpdate(){
                $(document).ready(function() {
                $('.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: false,
                    autoplay: true,
                    autoplayTimeout: 3000,
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
            }, */
    }
</script>
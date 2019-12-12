<template>

    <div>

        <!--

        <div id="maininit">

            <div class="owl-carousel owl-theme">

                <div class="item">
                    <div class="saq-overlay">

                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 offset-md-3">
                                    <div class="content text-center">
                                        <h2 style="padding-bottom: .3rem; text-transform: capitalize;"> {{ $t('welcome_1') }}.</h2>

                                        <router-link :to="'/'+GET_LANG+'/shop'" class="btn btn-primary btn-lg btn-block">
                                            {{$t('shop_button')}}
                                        </router-link>
                                     

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <img class="img-fluid" src="../assets/img/11.jpg" alt="">

                </div>

                <div class="item">
                    <div class="saq-overlay">

                        <div class="container">
                            <div class="row">

                                <div class="col-md-6 offset-md-3">
                                    <div class="content text-center">
                                        <h2 style="padding-bottom: .3rem; text-transform: capitalize;"> {{ $t('welcome_2') }}.</h2>

                                        <router-link :to="'/'+GET_LANG+'/shop'" class="btn btn-primary btn-lg btn-block">
                                            {{$t('shop_button')}}
                                        </router-link>
                                      

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <img class="img-fluid" src="../assets/img/4.jpg" alt="">

                </div>

                <div class="item">
                    <div class="saq-overlay">

                        <div class="container">
                            <div class="row">

                                <div class="col-md-6 offset-md-3">
                                    <div class="content text-center">
                                        <h2 style="padding-bottom: .3rem; text-transform: capitalize;"> {{ $t('welcome_3') }}.</h2>

                                        

                                        <router-link :to="'/'+GET_LANG+'/shop'" class="btn btn-primary btn-lg btn-block">
                                            {{$t('shop_button')}}
                                        </router-link>
                                      

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <img class="img-fluid" src="../assets/img/6.jpg" alt="">

                </div>



            </div>

        </div>
        
        -->


        <div id="main-banner">

            <div class="overlay overlay-bg">

                <div class="container">
                    <div class="row fullscreen d-flex align-items-center justify-content-center">

                        <div class="banner-content col-lg-12 col-md-12">
                            <h6 class="text-uppercase"> {{$t('banner_h6')}} </h6>
                            <h1>
                               {{$t('banner_h1')}}
                            </h1>
                            <p class="text-white">
                              {{$t('banner_p')}}
                            </p>
                            <router-link :to="'/'+GET_LANG+'/contact'" class="primary-btn header-btn text-uppercase"> {{$t('banner_link')}} </router-link>
                        </div>

                    </div>
                </div>

            </div>

        </div>


        <!--
        <div id="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center">
                        <h4>{{$t('about_us')}}</h4>
                    </div>
                    <div class="col-md-8 offset-md-2 text-justify">

                        <p>
                            {{$t('about_p1')}}.
                            <br>                           

                        </p>
                        


                    </div>
                </div>                
                
                <div class="col-md-6 offset-md-3 text-center">
                        <h4>{{$t('como_func_title')}}</h4>
                    </div>
                    <div class="col-md-8 offset-md-2 text-justify">

                        <ul>
                            <li> {{$t('como_func_l1')}}. </li>
                            <li> {{$t('como_func_l2')}}. </li>
                            <li> {{$t('como_func_l3')}}. </li>
                            
                        </ul>
                        
                        <br>
                        
                        </div>               
                
                
            </div>

        </div>

        <news-letter /> -->


        <div id="how-work">


            <div class="container">

                <div class="row">
                    <div class="col-md-8 offset-md-2 text-center">
                        <h2 style="padding: 1rem; font-weight: 700;"> {{$t('work_h2')}}</h2>
                        <hr>
                    </div>
                </div>


                <div class="row">
                    <div class="col-lg-4">
                        <div class="single-cat d-flex flex-column">
                            <a href="#" class="hb-sm-margin mx-auto d-block">
                                <span class="hb hb-sm inv hb-facebook-inv">
                                    <span class="fas fa-random">
                                    </span>
                                </span>
                            </a>
                            <h4 class="mb-20" style="margin-top: 23px;"> {{$t('work_choice')}} </h4>
                            <p>
                                {{$t('work_choice_p')}}
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-cat">
                            <a href="#" class="hb-sm-margin mx-auto d-block">
                                <span class="hb hb-sm inv hb-facebook-inv">
                                    <span class="fas fa-cart-plus"></span>
                                </span></a>
                            <h4 class="mt-40 mb-20"> {{$t('work_shop')}} </h4>
                            <p v-html="$t('work_shop_p')">
                                
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-cat">
                            <a href="#" class="hb-sm-margin mx-auto d-block"><span class="hb hb-sm inv hb-facebook-inv"><span class="far fa-registered"></span></span></a>
                            <h4 class="mt-40 mb-20"> {{$t('work_quote')}} </h4>
                            <p v-html="$t('work_quote_p')">
                                
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-cat">
                            <a href="#" class="hb-sm-margin mx-auto d-block"><span class="hb hb-sm inv hb-facebook-inv"><span class="far fa-comment-alt"></span></span></a>
                            <h4 class="mt-40 mb-20"> {{$t('work_contact')}} </h4>
                            <p v-html="$t('work_contact_p')">
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>



        <div id="about-us">

            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-8 col-md-12 home-about-left">
                        <h2 style="padding: 1rem; font-weight: 700;"> {{$t('about_us')}} </h2>
                        <hr style="position: relative; text-align: left; margin-right: 35rem;">
                        <h1 v-html="$t('about_h1')">
                            

                        </h1>
                        <p class="sub" v-html="$t('about_sub')">  </p>
                        <p class="pb-20" v-html="$t('about_p')">
                            
                        </p>

                    </div>
                    <div class="col-lg-4 col-md-12 home-about-right relative">

                        <router-link :to="'/'+GET_LANG+'/contact'" class="btn-primary btn-block text-center p-2"> {{$t('about_link')}} </router-link>

                    </div>
                </div>
            </div>

        </div>



        <div id="services">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 pb-30 header-text text-center">
                        <h1 class="mb-10" style="padding: 1rem; font-weight: 700;"> {{$t('services_h1')}} </h1>
                        <!--   <p>
                        Who are in extremely love with eco friendly system.
                    </p> -->
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="single-service">
                            <div class="thumb">
                                <img src="@/assets/img/paper.jpg" alt="" class="fluid-img">
                            </div>
                            <h4 style="font-weight: 700;"> {{$t('services_1_h4')}} </h4>
                            <p>
                                {{$t('services_1_p')}}
                            </p>

                            <router-link :to="'/'+GET_LANG+'/quotation'" class="btn-block btn-primary text-center p-2"> {{$t('services_link')}} </router-link>

                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-service">
                            <div class="thumb">
                                <img src="@/assets/img/rebar-uk.jpg" alt="">
                            </div>
                            <h4 style="font-weight: 700;"> {{$t('services_2_h4')}} </h4>
                            <p>
                                {{$t('services_2_p')}}
                            </p>

                            <router-link :to="'/'+GET_LANG+'/quotation'" class="btn-block btn-primary text-center p-2"> {{$t('services_link')}} </router-link>

                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-service">
                            <div class="thumb">
                                <img src="@/assets/img/calca.png" alt="">
                            </div>
                            <h4 style="font-weight: 700;"> {{$t('services_3_h4')}} </h4>
                            <p>
                                {{$t('services_3_p')}}
                            </p>

                            <router-link :to="'/'+GET_LANG+'/quotation'" class="btn-block btn-primary text-center p-2"> {{$t('services_link')}} </router-link>

                        </div>
                    </div>


                    <div class="col-lg-4">
                        <div class="single-service">
                            <div class="thumb">
                                <img src="@/assets/img/agro_8.jpg" alt="">
                            </div>
                            <h4 style="font-weight: 700;"> {{$t('services_4_h4')}} </h4>
                            <p>
                                {{$t('services_4_p')}}
                            </p>

                            <router-link :to="'/'+GET_LANG+'/quotation'" class="btn-block btn-primary text-center p-2"> {{$t('services_link')}} </router-link>

                        </div>
                    </div>

                </div>
            </div>

        </div>



    </div>


</template>


<script>
    import $ from 'jquery'
    //import NewsLetter from '@/components/NewsLetter.vue'
    //import Item from '@/components/Item.vue'

    import ax from '../api'

    import {
        mapGetters,
        //mapMutations
    } from 'vuex'

    export default {
        name: "MainHome",
        computed: {

            ...mapGetters(['GET_LANG', ]),

        },
        components: {
            //NewsLetter,
            //Item,
        },
        data() {
            return {
                prods: {},
            }
        },
        methods: {
            //...mapMutations(['SET_PRODUCTS_FEATURED', ]),
            //prod_featured() {
            //  this.SET_PRODUCTS_FEATURED();
            //}
            get_prods() {
                ax.get("products/featured/", )
                    .then(response => {
                        this.prods = response.data;
                    })
            },
        },
        created() {
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
            });
            this.get_prods();

        },
    }
</script>
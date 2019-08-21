<template>

    <div>

        <div id="maininit">

            <div class="owl-carousel owl-theme">

                <div class="item">
                    <div class="saq-overlay">

                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 offset-md-3">
                                    <div class="content text-center">
                                        <h2 style="padding-bottom: .3rem; text-transform: capitalize;"> {{ $t('welcome_1') }}.</h2>
                                        
                                        <a href="" class="btn btn-primary btn-large">
                                            {{$t('shop_button')}}
                                        </a>
                                        <button class="btn btn-primary" style="margin-left: .2rem;" data-toggle="modal" data-target="#newsletter">
                                            {{$t('suscribe_button_slide')}}
                                        </button>

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

                                        <a href="" class="btn btn-primary btn-large">
                                            {{$t('shop_button')}}
                                        </a>
                                        <button class="btn btn-primary" style="margin-left: .2rem;" data-toggle="modal" data-target="#newsletter">
                                            {{$t('suscribe_button_slide')}}
                                        </button>

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
                                       
                                       <!-- <h2 style="padding-bottom: .3rem; text-transform: capitalize;"> Buy with us, help protect our planet.</h2> -->

                                        <a href="" class="btn btn-primary btn-large">
                                            {{$t('shop_button')}}
                                        </a>
                                        <button class="btn btn-primary" style="margin-left: .2rem;" data-toggle="modal" data-target="#newsletter">
                                            {{$t('suscribe_button_slide')}}
                                        </button>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <img class="img-fluid" src="../assets/img/6.png" alt="">

                </div>



            </div>

        </div>

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

                          <!--  <strong> {{$t('about_vision')}}  </strong>
                            <br>
                            {{$t('about_vision_p')}}. -->

                            <br>
                        </p>
                      <!--  <strong> {{$t('about_mission')}} </strong>
                        <br>
                        <ul>
                            <li> {{$t('about_mission_l1')}}. </li>
                            <li> {{$t('about_mission_l2')}}. </li>
                            <li> {{$t('about_mission_l3')}}. </li>
                        </ul> -->


                    </div>
                </div>
            </div>

        </div>

        <news-letter />



        <div class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2 text-center">

                        <hr class="divisor-top">

                        <h2>{{$t('title_featured')}}</h2>

                        <hr class="divisor-bottom">

                    </div>
                </div>

                <div class="row">

                    <Item v-for="prod in prods" :key="prod.id" :prod="prod" />

                </div>



            </div>

        </div>

        <news-letter />


    </div>


</template>


<script>
    import $ from 'jquery'
    import NewsLetter from '@/components/NewsLetter.vue'
    import Item from '@/components/Item.vue'
    
    import ax from '../api'

    export default {
        name: "MainHome",
        computed: {
            //...mapGetters(['GET_PRODUCTS_FEATURED', ]),

            // prods: function() {
            //    return this.GET_PRODUCTS_FEATURED;
            // }

        },
        components: {
            NewsLetter,
            Item,
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
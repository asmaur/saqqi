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
                                        <h2 style="padding-bottom: .3rem; text-transform: capitalize;"> {{ $t('welcome_one') }}</h2>

                                        <a href="" class="btn btn-primary btn-large">
                                            Shop Now
                                        </a>
                                        <button class="btn btn-primary" style="margin-left: .2rem;" data-toggle="modal" data-target="#newsletter">
                                            Subscribe to our newsletter
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
                                        <h2 style="padding-bottom: .3rem; text-transform: capitalize;"> Strong, Resistent, versatil for your customers needs.</h2>

                                        <a href="" class="btn btn-primary btn-large">
                                            Shop Now
                                        </a>
                                        <button class="btn btn-primary" style="margin-left: .2rem;" data-toggle="modal" data-target="#newsletter">
                                            Subscribe to our newsletter
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
                                        <h2 style="padding-bottom: .3rem; text-transform: capitalize;"> Buy with us, help protect our planet.</h2>

                                        <a href="" class="btn btn-primary btn-large">
                                            Shop Now
                                        </a>
                                        <button class="btn btn-primary" style="margin-left: .2rem;" data-toggle="modal" data-target="#newsletter">
                                            Subscribe to our newsletter
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
                        <h4>About us</h4>
                    </div>
                    <div class="col-md-8 offset-md-2 text-justify">

                        <p>
                            De Like Packaging Solutions is a leading, innovative & eco-friendly packaging bag manufacturer in Malaysia. De Like Packaging Solutions provides a comprehensive eco-friendly range of packaging bag products such as Design & Customisable Paper Bag, Non Woven Bag and many more eco-friendly bags.
                            <br>

                            <strong> Vision </strong>
                            <br>
                            To position De Like Packaging Solutions in the Eco-friendly Gifts and Premium industry with a significant reliability in products & services.

                            <br>
                        </p>
                        <strong> Mission </strong>
                        <br>
                        <ul>
                            <li>To constantly provide quality eco-friendly packaging bag with prompt & reliable service</li>
                            <li>To constantly provide innovative and trendy packaging bag ideas to meet with current market demand </li>
                            <li> To constantly research and develop environmental friendly product marketing plans in parallel with market trend changes </li>
                        </ul>


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

                        <h2>Featured</h2>

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
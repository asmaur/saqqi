<template>

    <div>

        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4>Product | REF0001</h4>
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
                                <img class="img-fluid" src="../assets/img/031-Sacola.jpg" alt="" style="height: 300px;">
                            </div>
                            <div class="item">
                                <img class="img-fluid" src="../assets/img/031-Sacola.jpg" alt="" style="height: 300px;">
                            </div>
                            <div class="item">
                                <img class="img-fluid" src="../assets/img/031-Sacola.jpg" alt="" style="height: 300px;">
                            </div>
                        </div>


                    </div>

                    <div class="col-sm-12 col-md-6 ">

                        <add-prod />

                    </div>

                </div>

            </div>

        </div>




    </div>

</template>


<script>
    import AddProd from '@/components/AddProd.vue'
    import $ from 'jquery'

    export default {
        name: "VueProduct",
        components: {
            AddProd,
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
            })
        },
    }
</script>
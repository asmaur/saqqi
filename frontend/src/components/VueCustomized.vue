<template>


    <div>



        <div class="shop" id="customized">
            <div class="container-fluid p-0">
                <div class="row">

                    <div class="col-md-6 offset-md-3">

                        <div class="card">
                            <div class="card-body">
                                <div class="alert alert-info text-center">
                                    <h4>Branded for your costumers</h4>
                                    <p>Make your bags unique.</p>
                                </div>

                            </div>

                            <div class="card-body text-center">
                                <div class="alert alert-info text-center">
                                    <h4>Contact Us</h4>

                                </div>
                                <a href="" style="color: #000; text-decoration: none;">
                                    <i class="fab fa-telegram fa-3x"></i>
                                </a>
                                <a href="" style="color: #000; text-decoration: none;">
                                    <i class="fab fa-whatsapp-square fa-3x"></i>
                                </a>

                            </div>


                        </div>


                    </div>

                </div>

                <div class="row" id="lightgallery">

                    <a :href="img1" class="col-sm-12 col-md-4 customized-img p-0">
                        <img :src="img1" class="img-fluid" alt="">
                    </a>
                    <a :href="img2" class="col-sm-12 col-md-4 customized-img p-0">
                        <img :src="img2" class="img-fluid" alt="">
                    </a>
                    <a :href="img3" class="col-sm-12 col-md-4 customized-img p-0">
                        <img :src="img3" class="img-fluid" alt="">
                    </a>
                    <a :href="img4" class="col-sm-12 col-md-4 customized-img p-0">
                        <img :src="img4" class="img-fluid" alt="">
                    </a>
                    <a :href="img5" class="col-sm-12 col-md-4 customized-img p-0">
                        <img :src="img5" class="img-fluid" alt="">
                    </a>
                    <a :href="img6" class="col-sm-12 col-md-4 customized-img p-0">
                        <img :src="img6" class="img-fluid" alt="">
                    </a>


                </div>

            </div>

        </div>

        <news-letter />



    </div>


</template>


<script>
    
    import NewsLetter from '@/components/NewsLetter.vue'
    import img1 from '@/assets/img/custom1.jpg'
    import img2 from '@/assets/img/custom2.jpg'
    import img3 from '@/assets/img/custom3.jpg'
    import img4 from '@/assets/img/custom6.jpg'
    import img5 from '@/assets/img/custom5.jpg'
    import img6 from '@/assets/img/custom7.jpg'
    import $ from 'jquery'

    export default {
        name: "VueCustomized",
        components: {
            
            NewsLetter,
        },
        data() {
            return {
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
            }
        },
        created() {
            $(document).ready(function() {
                $("#lightgallery").lightGallery();
            });
        },
    }
</script>
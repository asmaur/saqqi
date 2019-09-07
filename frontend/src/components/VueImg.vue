<template>

    <div class="owl-carousel owl-theme" style="border: 1px solid #4fc3f7;">

        <div class="item" v-for="im in ims" :im="im" :key="im.id">
            <img class="img-fluid" :src="im.image_saqqi" alt="" style="height: 300px;">
        </div>

    </div>


</template>


<script>
    
    import $ from 'jquery'
    
    export default {
        name: "VueImg",
        props: {
            ims: {},
        },

        beforeUpdate() {
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
        },
    }
</script>
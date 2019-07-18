<template>

    <div>


        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4>Cart | REF 1278216652836</h4>
                            <hr style="height: .1rem; background-color: #fff; margin-top: -.2rem;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shop" style="padding: 0rem; padding-bottom: 1rem;">
            <div class="container-fluid">
                <div class="row">
                    <a href="" class="col-6 text-center continue">
                        <span> continue shopping </span>
                    </a>

                    <a href="" class="col-6 text-center checkout">
                        <span style="margin-top: 1vh;"> Checkout </span>
                    </a>

                </div>

                <div class="row">

                    <cart-item />

                </div>

                <div class="row">
                    <a href="" class="col-6 text-center continue">
                        <span style="margin-top: 1vh;"> continue shopping </span>
                    </a>

                    <a href="" class="col-6 text-center checkout">
                        <span style="margin-top: 1vh;"> Checkout </span>
                    </a>

                </div>



            </div>

        </div>



    </div>

</template>


<script>
    import CartItem from '@/components/CartItem.vue'

    export default {
        name: "VueCart",
        components: {
            CartItem,
        },
    }
</script>
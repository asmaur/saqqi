<template>

    <div>


        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4>Cart |</h4>
                            <hr style="height: .1rem; background-color: #fff; margin-top: -.2rem;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shop" style="padding: 0rem; padding-bottom: 1rem;">
            <div class="container-fluid">
                <div class="row">
                    <router-link :to="'/'+GET_LANG+'/shop'" class="col-6 text-center continue">
                        <span> continue shopping </span>
                    </router-link>

                    <router-link :to="'/'+GET_LANG+'/checkout'" class="col-6 text-center checkout">
                        <span style="margin-top: 1vh;"> Checkout </span>
                    </router-link>

                </div>

                <div class="row" v-if="items" style="min-height:100vh;">

                    <cart-item v-for="item in items" :key="item.idenx" :item="item" />

                </div>

                <div class="row">
                    <router-link :to="'/'+GET_LANG+'/shop'" class="col-6 text-center continue">
                        <span style="margin-top: 1vh;"> continue shopping </span>
                    </router-link>

                    <router-link :to="'/'+GET_LANG+'/checkout'" class="col-6 text-center checkout">
                        <span style="margin-top: 1vh;"> Checkout </span>
                    </router-link>


                </div>



            </div>

        </div>



    </div>

</template>


<script>
    import CartItem from '@/components/CartItem.vue'

    import {
        mapGetters,
        //mapMutations
    } from 'vuex'

    export default {
        name: "VueCart",
        components: {
            CartItem,
        },
        computed: {
            ...mapGetters(['GET_LANG', 'GET_CART']),

            items: function() {
                return this.GET_CART;
            },
        },
    }
</script>
<template>

    <div class="col-sm-12 col-md-4 p-1 shop-item">

        <router-link :to="'/'+GET_LANG+'/product/'+prod.slug+'/'+prod.code">
            <img :src="prod.capa" alt="" class="img-fluid">
        </router-link>

        <div class="item-info text-center">
            <router-link :to="'/'+GET_LANG+'/product/'+prod.slug+'/'+prod.code">
             <!--   <span v-if="GET_LANG=='en'">{{prod.name_en}} </span>
                <span v-if="GET_LANG=='fr'">{{prod.name_fr}} </span>
                <span v-if="GET_LANG=='pt-br'">{{prod.name_pt_br}} </span> -->
                <span> | REF {{prod.code}}.</span> <br>
                <span> Dim: {{prod.width}}x{{prod.heigth}}x{{prod.lateral}} cm </span> <br>
                <!-- <span>Comprimento: {{prod.length}} cm</span> <br>
                <span>Largura: {{prod.width}} cm</span> <br>
                <span>Altura: {{prod.heigth}} cm</span> <br> -->
            </router-link>
        </div>

        <hr>

        <div class="item-actions">

            <div class="item-price">

                <span class="price">
                    ${{prod.price}}/uni
                </span>

            </div>

            <div class="item-min">
                <span>
                    {{$t('minimum_order')}}: {{prod.mini_quantity}} uni
                </span>
            </div>

            <!-- <div class="item-add-cart">
                <button class="btn btn-outline-danger" @click="add_to_cart(prod.code, prod.mini_quantity)">
                    <i class="fas fa-cart-plus fa-2x"></i>
                </button>
            </div> -->
            

        </div>

    </div>

</template>


<script>
    import {
        mapGetters,
        //mapMutations,
        mapActions,
    } from 'vuex'

    export default {
        name: "Item",
        props: {
            prod: Object,
        },
        computed: {

            ...mapGetters(['GET_LANG', ]),

        },
        data() {
            return {
                img_url: 'localhost:8000',
            }
        },

        methods: {
            ...mapActions(['addToCart', ]),
            add_to_cart(code, quantity) {
                //console.log(code, quantity);
                this.addToCart({
                    productCode: code,
                    quantity: quantity
                });
                this.$noty.success(this.$t('product_added'))//"Product added to cart!");
            },
        },

    }
</script>
<template>

    <div class="col-sm-12 col-md-4 cart-item" v-if="item">

        <div class="card">
            <!-- <img class="card-img-top" src="../assets/img/031-Sacola.jpg" alt="Card image cap"> -->
            <div class="card-body">

                <p class="card-title" v-if="GET_LANG=='en'">{{item.product.name_en}}</p>
                <p class="card-title" v-if="GET_LANG=='fr'">{{item.product.name_fr}}</p>
                <p class="card-title" v-if="GET_LANG=='pt-br'">{{item.product.name_pt_br}}</p>

                <p class="card-title">

                    <span>Dim: {{item.product.length}}x{{item.product.width}}x{{item.product.heigth}} cm </span>
                </p>
                <p class="card-title"> <strong>Order: {{item.quantity}} uni.</strong> </p>
                <p class="card-title"> <strong>Subtotal: USD {{item.subtotal}}</strong> </p>

                <!-- <ul class="list-group list-group-flush">

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary fechar" type="button" style="color: #fff;">
                                <i class="far fa-minus-square"></i>
                            </button>
                        </div>
                        
                        
                        <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                        

                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary entrar" type="button" style="color: #fff;">
                                <i class="far fa-plus-square"></i>
                            </button>
                        </div>
                        
                        
                    </div>


                </ul> -->
            </div>
            <div class="card-footer">
                <button class="btn btn-primary fechar" @click="remove_from_cart(item.product.code)">
                    <i class="far fa-trash-alt"></i>
                </button>

                <router-link class="btn btn-primary entrar" :to="'/'+GET_LANG+'/product/'+item.product.slug+'/'+item.product.code">
                    <i class="fas fa-external-link-alt"></i>
                </router-link>



            </div>
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
        name: "CartItem",
        props: {
            item: Object,
        },
        computed: {
            ...mapGetters(['GET_LANG', ]),
        },
        methods: {
            ...mapActions(['deleteFromCart', ]),
            remove_from_cart(code) {
                this.deleteFromCart(code);
            },
            formatPrice(value) {
                let val = (value/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        },
    }
</script>

<style scoped="true">
    .card-footer {
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
</style>
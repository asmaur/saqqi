<template>


    <div class="card">

       <!-- <div class="card-body" v-if="GET_LANG=='en'">
            <p>Category: <span v-for="cat in categories" :key="cat.id"> {{cat.name_en}} </span>, </p>
            <p>
                {{prod.description_en}}
            </p>
            <hr>
        </div>

        <div class="card-body" v-if="GET_LANG=='fr'">
            <p>Category: <span v-for="cat in categories" :key="cat.id"> {{cat.name_fr}} </span>, </p>
            <p>
                {{prod.description_fr}}
            </p>
            <hr>
        </div>

        <div class="card-body" v-if="GET_LANG=='pt-br'">
            <p>Category: <span v-for="cat in categories" :key="cat.id"> {{cat.name_pt_br}} </span>, </p>
            <p>
                {{prod.description_pt_br}}
            </p>
            <hr>
        </div> -->

        <div class="card-body">
            <p class="card-title" style="margin-top:-.5rem" v-if="GET_LANG=='en'">{{prod.name_en}}</p>
            <p class="card-title" style="margin-top:-.5rem" v-if="GET_LANG=='fr'">{{prod.name_fr}}</p>
            <p class="card-title" style="margin-top:-.5rem" v-if="GET_LANG=='pt-br'">{{prod.name_pt_br}}</p>

            <span> | REF {{prod.code}}. | <strong> USD {{ prod.price}} </strong> </span>
            <!--<span> Dim: {{prod.length}}x{{prod.width}}x{{prod.heigth}} cm </span> --> <br>
            
            <span>{{$t('width')}}: {{prod.width}} cm</span> <br>
            <span>{{$t('heigth')}}: {{prod.heigth}} cm</span> <br>
            <span>{{$t('lateral')}}: {{prod.lateral}} cm</span> <br>

            <p class="card-title"> <strong>{{$t('min_order')}}: {{prod.mini_quantity}} uni.</strong> </p>

            <ul class="list-group list-group-flush">

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary fechar" type="button" style="color: #fff;" @click="minusProd()">
                            <i class="far fa-minus-square"></i>
                        </button>
                    </div>
                    <input type="number" :min="prod.mini_quantity" class="form-control" v-model="qty" :placeholder="prod.mini_quantity" aria-label="" aria-describedby="basic-addon1">

                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary entrar" type="button" style="color: #fff;" @click="moreProd()">
                            <i class="far fa-plus-square"></i>
                        </button>
                    </div>
                </div>


            </ul>
        </div>
        <div class="card-footer">
           
            <button class="btn btn-primary btn-block fechar" @click="add_to_cart(prod.code, qty)">
                {{$t('add_to_cart')}}
            </button>

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
        name: "AddProd",
        props: {
            categories: {},
            prod: {},
        },
        computed: {

            ...mapGetters(['GET_LANG', ]),
            quanty: function() {
                return this.prod.mini_quantity;
            },

        },
        data() {
            return {
                qty: null,
            }
        },

        methods: {
            minusProd() {
                if (this.qty == null || this.qty < 0) {
                    this.qty = this.prod.mini_quantity;
                    this.$noty.warning(this.$t('minimum_value')) //"valor minimo atingido!");
                    return;
                } else if (this.qty == this.prod.mini_quantity) {
                    this.$noty.warning(this.$t('minimum_value')) //"valor minimo atingido!");
                    return;
                } else {
                    this.qty -= 1000;
                }
            },
            moreProd() {

                if (this.qty <= this.prod.mini_quantity) {
                    this.qty = this.prod.mini_quantity + 1000;
                } else {
                    this.qty += 1000;
                }


            },

            ...mapActions(['addToCart', ]),
            add_to_cart(code, quantity) {
                if (quantity == null) {
                    //console.log(code, this.prod.mini_quantity);
                    this.addToCart({
                        productCode: code,
                        quantity: this.prod.mini_quantity
                    });
                    this.$noty.success(this.$t('product_added'))//"Product added to cart!");

                } else {
                    //console.log(code, quantity);
                    this.addToCart({
                        productCode: code,
                        quantity: quantity
                    });
                    this.$noty.success(this.$t('product_added'))//"Product added to cart!");
                }
            },


        },




    }
</script>
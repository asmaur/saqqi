<template>

    <div>

        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4>{{$t('menu_shop')}}</h4>
                            <hr style="height: .1rem; background-color: #fff; margin-top: -.2rem;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2 text-center">

                        <hr class="divisor-top">

                        <h2>{{$t('title_our_products')}}</h2>

                        <hr class="divisor-bottom">

                    </div>
                </div>

                <div class="row">

                    <Item v-for="prod in prods" :prod="prod" :key="prod.id"/>

                </div>



            </div>

        </div>



    </div>

</template>


<script>
    import Item from '@/components/Item.vue'
    import ax from '../api'

    export default {
        name: "VueShop",
        computed:{
            
        },
        components: {
            Item
        },
        data(){
            return{
                prods: {},
            }
        },
        methods:{
                        
            get_prods(){
                ax.get("products/",)
                .then(response =>{
                    this.prods = response.data;
                })
            },
        },
        created(){
            this.get_prods()
        },
    }
</script>
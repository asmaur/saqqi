<template>

    <div>


        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4>{{$t('menu_category')}}</h4>
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

                <div class="row" v-if="prods">


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
        name: "VueCategory",
        components: {
            Item,
        },
        data(){
            return{
                prods: {},
                
            }
        },
        methods:{
            get_prods(){
                ax.get("products/categories/"+this.$route.params.slug+'/')
                .then(response => {
                    this.prods = response.data;
                })
            },
        },
        created(){
            this.get_prods();
        },
    }
</script>
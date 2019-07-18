<template>

    <div>


        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4>Category | Grocery</h4>
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

                        <h2>Our Products</h2>

                        <hr class="divisor-bottom">

                    </div>
                </div>

                <div class="row">


                    <Item />


                </div>



            </div>

        </div>




    </div>

</template>


<script>
    import Item from '@/components/Item.vue'

    export default {
        name: "VueCategory",
        components: {
            Item,
        }
    }
</script>
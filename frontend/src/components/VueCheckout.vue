<template>

    <div>


        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4>Checkout</h4>
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

                        <h2> Thanks for your confidence </h2>

                        <hr class="divisor-bottom">

                    </div>
                </div>

                <div class="row">

                    <div class="col-md-8">

                        <out-data />


                    </div>

                    <div class="col-md-4">

                        <out-summary />

                    </div>


                </div>



            </div>

        </div>




    </div>

</template>


<script>
    import OutSummary from '@/components/OutSummary.vue'
    import OutData from '@/components/OutData.vue'

    export default {
        name: "VueCheckout",
        components: {
            OutSummary,
            OutData,
        }
    }
</script>
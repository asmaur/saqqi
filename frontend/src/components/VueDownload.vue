<template>

    <div class="shop" id="download">
        <div class="container">
            <div class="row">

                <div class="col-md-6 offset-md-3">

                    <div class="card">
                        <div class="card-body" v-if="prof">
                            <div class="alert alert-info text-center">
                                <h4>Download your Proforma</h4>
                                <p>We've sent a copy to your email.</p>
                            </div>
                            <a :href="prof.proforma" class="btn btn-dark btn-block" target="_blank">
                                Download now.
                            </a>

                        </div>
                        
                        
                        <div class="card-body" v-else>
                            <div class="alert alert-danger text-center">
                                <h4>Invalid Proforma</h4>
                                <p>Something Went wrong while creating your proforma. Try again later.</p>
                            </div>
                          <!--  <a href="" class="btn btn-dark btn-block">
                                Download now.
                            </a> -->

                        </div>
                        
                        
                    </div>


                </div>

            </div>

        </div>

    </div>

</template>


<script>
    
    import ax from '../api'
    
    export default {
        name: "VueDownload",
        data(){
            return{
                prof: {},
            }
        },
        methods:{
            getProforma(){
                ax.get("cart/"+this.$route.params.code+"/")
                    .then(response => {
                        this.prof = response.data;
                } )
            }
        },
        
        created(){
            this.getProforma();
        }
    }
</script>
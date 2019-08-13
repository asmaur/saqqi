<template>

    <div class="shop" id="download">
        <div class="container">
            <div class="row">

                <div class="col-md-6 offset-md-3">

                    <div class="card">
                        <div class="card-body" v-if="prof">
                            <div class="alert alert-info text-center">
                                <h4>{{$t('download_your')}}</h4>
                                <p>{{$t('download_1')}}.</p>
                            </div>
                            <a :href="prof.proforma" class="btn btn-dark btn-block" target="_blank">
                                {{$t('download_button')}}.
                            </a>

                        </div>
                        
                        
                        <div class="card-body" v-else>
                            <div class="alert alert-danger text-center">
                                <h4>{{$t('download_invalid')}}</h4>
                                <p>{{$t('download_invalid_p')}}.</p>
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
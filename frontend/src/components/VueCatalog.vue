<template>

    <div>



        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4> {{$t('catalog_free')}} </h4>
                            <hr style="height: .1rem; background-color: #fff; margin-top: -.2rem;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="quote">

            <div class="container-fluid">

                <div class="row">



                    <div class="list-group" >
                      
                       <div class="row">
                       
                        <li class="list-group-item active col-md-12 text-center" aria-disabled="true">
                            <h4>  {{$t('our_catalog')}} </h4>
                        </li>
                        
                        <li class="list-group-item d-flex justify-content-between col-md-12" v-for="catalog in catalogs" :keys="catalog.id">
                            <h5 class="mr-auto p-0"> {{catalog.name}} </h5>
                            <a :href="catalog.file" target="_blank" class="btn btn-primary" style="padding: .5rem !important;">Download</a>
                        </li>
                        
                       <!-- <li class="list-group-item d-flex justify-content-between col-md-12">
                            <h5 class="mr-auto p-0">Pulp & Paper</h5>
                            <a href="" target="_blank" class="btn btn-primary p-0" style="padding: 0rem !important;">Download</a>
                        </li> -->
                        
    </div>
                        
    </div>

                    </div>






                </div>

            </div>

        </div>


   


</template>


<script>
    
    import ax from '../api.js'
    
    export default {
        name: "VueCatalog",
        data(){
            return{
                catalogs: {}
            }
        },
        methods:{
            getCatalog(){
                ax.get("supplier/get_catalog/")
                 .then( response => {
                    this.catalogs = response.data
                })
            },
        },
        created(){
            this.getCatalog();
        },
    }
</script>
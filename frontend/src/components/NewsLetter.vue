<template>

    <div>
        
        
         <div class="single-footer-widget">
                        <h6> {{$t('newsletter')}} </h6>
                        <p> {{$t('newsletter_p')}} </p>
                        
                                                        
                        <div class="" id="mc_embed_signup">
                            <form target="_blank" class="form-inline" @submit.prevent="subscribe()">
                               
                               <input type="email" class="form-control" placeholder="email" id="email" v-model="email" name="mail" aria-label="email" aria-describedby="button-addon2" required>
                              <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="submit" id="button-addon2"> <i class="fas fa-paper-plane" aria-hidden="true"></i> </button>
                              </div>
                               
                               
                            <!--    <input class="form-control" name="email" placeholder="Enter Email"  required="" type="email">
                                <button class="click-btn btn btn-default"><i class="fas fa-paper-plane" aria-hidden="true"></i></button>         
                                <div class="info"></div> -->
                                
                            </form>
                        </div>
                    </div>
        
      
        <!--  

        <div class="newsletter">       
        
        
         <div class="container">
                <div class="row">
                    <div class="col-md-6">

                        <div class="h4">
                            <i class="fas fa-envelope-square"></i>
                            {{$t('suscribe_modal_text')}}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-primary btn-block" data-toggle="modal" data-target="#newsletter">{{$t('suscribe_text')}}</button>
                    </div>
                </div>
            </div>

        </div>
        


        <div class="modal fade" id="newsletter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <form @submit.prevent="subscribe()">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{$t('suscribe_text')}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="form-group">
                                <label for="email" class="col-form-label">Email:</label>
                                <input type="email" name="email" class="form-control" id="email" v-model="email" placeholder="email" required>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary mr-auto fechar" data-dismiss="modal">{{$t('modal_close')}}</button>
                            <button type="submit" class="btn btn-primary entrar">{{$t('modal_send')}}</button>
                        </div>

                    </div>
                </form>
            </div> 
        </div> 
        
        -->


    </div>

</template>


<script>
    import ax from '../api'
    export default {
        name: "NewsLetter",
        data(){
            return{
                email: null,
            }
        },
        methods:{
            subscribe(){
                ax.post("s/add_subscriber/", {"email": this.email})
                  .then(()=>{
                        this.$noty.info(this.$t('subscribe_email')) //"Email added")  
                  })
                .catch(()=>{
                    this.$noty.warning(this.$t('subscribe_went_wrong')) //"Something went wrong, thy agan later")
                })
            }
        }
    }
</script>
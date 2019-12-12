<template>
   
   
   <div id="footer">
        
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h6> {{$t('about_us')}} </h6>
                        <p v-html="$t('about_footer_p')">
                            
                        </p>
                        <p class="footer-text">

                            Copyright © {{ano}} | All rights reserved | <br>
                            design by <a href="https://wanubit.com" target="_blank" style="text-decoration: underline; color: red;">wanubit</a>

                        </p>
                    </div>
                </div>
                <div class="col-lg-5  col-md-6 col-sm-6">
                   
                    <news-letter />
                    
                    
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
                    <div class="single-footer-widget">
                        <h6> {{$t('follow')}} </h6>
                        <p> {{$t('follow_p')}} </p>
                        <div class="footer-social d-flex align-items-center">
                            <a href="https://facebook.com/saqqicomercial"><i class="fab fa-facebook"></i></a>                            
                            <a href="https://linkedin.com/company/saqqi"><i class="fab fa-linkedin"></i></a>
                            <a href="https://wa.me/5551991424429"><i class="fab fa-whatsapp"></i></a>
                            <a href="https://t.me/saqqicomercial"><i class="fab fa-telegram-plane"></i></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
   
   

   <!-- <div id="footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 offset-md-4 text-center p-3">
                    <a href="mailto:contact@saqqi.com">contact@saqqi.com</a>
                    <br>
                    <a href="https://t.me/saqqitrade" style="margin-right: .4rem;" target="_blank">
                        <i class="fab fa-telegram fa-2x"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5551991424429&text=Hi" target="_blank">
                        <i class="fab fa-whatsapp fa-2x"></i>
                    </a>
                    
                </div>
            </div>


            <div class="row">
                <div class="col-12 col-md-8 text-left p-3">
                    <p>saqqi &copy; {{ano}} | All right reserved. <br>
                    CNPJ: 35.503.491/0001-78
                      </p>
                </div>
                <div class="col-12 col-md-4 text-right p-3">

                    <a href="https://wanubit.com" target="_blank">
                    <span> Design by </span>
                        <img src="../assets/img/wanu.png" class="fluid-img" style="height: 20px; width: 20px; margin-left: 1rem;"> Wanubit
                    </a>

                </div>
            </div>



        </div>

    </div> -->


</template>


<script>
    
    import NewsLetter from '@/components/NewsLetter.vue'
    
    export default {
        name: "Footer",
        components: {
            NewsLetter,
        },
        computed: {
            ano: function() {
                var dt = new Date()
                return dt.getFullYear()
            }
        },
    }
</script>
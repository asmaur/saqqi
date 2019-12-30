<template>

    <div>

        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4> {{$t('work_contact')}} </h4>
                            <hr style="height: .1rem; background-color: #fff; margin-top: -.2rem;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="contact">

            <div class="container-fluid">

                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                        <p class="" style="margin-top: 2rem; font-size: 1.2rem;" v-html="$t('contact_p')">

                        </p>
                        <hr style="width: 40%">
                        <address class="contact-address" style="margin-top: 1rem;">
                            <h4> <strong>SAQQI COMERCIAL EXPORTADORA LTDA</strong> </h4>
                            <p> {{$t('contact_registry')}}: 35.503.491/0001-78</p>
                            <p> {{$t('contact_address')}}: R. Marechal Floriano Peixoto, 370 <br>CEP: 90020-060 <br>Porto Alegre - RS Brazil </p>
                            <hr style="width: 40%">
                            <p>Email : <a href="mailto:contact@saqqi.com">contact@saqqi.com</a></p>
                            <p> {{$t('contact_phone')}} :+55 51 991 424 429</p>
                            <hr style="width: 40%">
                        </address>
                        <div class="social">
                            <ul class="list-inline">
                                <li>
                                    <a href="https://facebook.com/saqqicomercial/" target="_blank"><i class="fab fa-facebook-square fa-3x"></i></a>
                                </li>
                                <!--   <li>
                                <a href="" target="_blank"><i class="fab fa-instagram fa-3x"></i></a>
                            </li> -->
                                <li>
                                    <a href="https://linkedin.com/company/saqqi" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
                                </li>
                                <li>
                                    <a href="https://t.me/saqqicomercial" target="_blank"><i class="fab fa-telegram-plane fa-3x"></i></a>
                                </li>
                                <li>
                                    <a href="https://wa.me/5551991424429" target="_blank"><i class="fab fa-whatsapp-square fa-3x"></i></a>
                                </li>

                            </ul>
                            <hr style="width: 40%; margin-bottom: 2rem;">
                        </div>

                        <div class="social">

                            <button data-toggle="modal" data-target="#supplierModal" class="btn btn-primary btn-large" style="margin-bottom: 2rem; padding: 1rem;">Seja Nosso Fornecedor</button>

                        </div>
                        <hr style="width: 40%; margin-bottom: 2rem;">

                    </div>


                </div>

                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.150119918114!2d-51.22924084967673!3d-30.03255078179774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197905fbc47fbd%3A0xe49e2bac9a4b6217!2sR.%20Mal.%20Floriano%20Peixoto%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090020-060!5e0!3m2!1spt-BR!2sbr!4v1575346253238!5m2!1spt-BR!2sbr" width="100%" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>


                    </div>

                </div>
            </div>

        </div>
        
        
        <vue-supplier />
        

    </div>




</template>


<script>
    import VueSupplier from '@/components/VueSupplier.vue'

    export default {
        name: "VueContact",
        components: {
            VueSupplier,
        },
    }
</script>
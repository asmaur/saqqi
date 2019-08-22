<template>

    <div>

        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4>{{$t('checkout')}}</h4>
                            <hr style="height: .1rem; background-color: #fff; margin-top: -.2rem;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shop">


            <div class="container">


                <form @submit.prevent="sendRequest()">

                    <div class="row">
                        <div class="col-md-8">
                            <div class="card">

                                <div class="card-header text-center">
                                    <h4>{{$t('informations')}}</h4>
                                </div>

                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="first_name">{{$t('first_name')}}</label>
                                            <input type="text" class="form-control" id="first_name" v-model="first_name" name="first_name" v-validate="{ required: true, alpha:true }" :placeholder="$t('first_name_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('first_name') }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="last_name">{{$t('last_name')}}</label>
                                            <input type="text" class="form-control" id="last_name" name="last_name" v-model="last_name" v-validate="{ required: true, alpha:true }" :placeholder="$t('last_name_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('last_name') }}</span>
                                        </div>

                                        <div class="form-group col-md-12">
                                            <label for="company">{{$t('company_name')}}</label>
                                            <input type="text" class="form-control" id="company" name="company" v-model="company" v-validate="{ required: true, alpha:true }" :placeholder="$t('company_name_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('company') }}</span>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" id="email" name="email" v-model="email" ref="email" v-validate="{ required: true, email: true }" placeholder="Email" required>
                                            <span class="alert-danger">{{ errors.first('email') }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="confirm_email">{{$t('confirm_email')}}</label>
                                            <input type="email" class="form-control" id="confirm_email" name="confirm_email" v-model="confirm_email" v-validate="'required|confirmed:email'" data-vv-as="email" :placeholder="$t('confirm_email_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('confirm_email') }}</span>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="phone">{{$t('phone')}}</label>
                                            <input type="phone" class="form-control" id="phone" name="phone" v-model="phone" ref="phone" v-validate="{ required: true, numeric:true }" :placeholder="$t('phone_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('phone') }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="confirm_phone">{{$t('confirm_phone')}}</label>
                                            <input type="phone" class="form-control" id="confirm_phone" name="confirm_phone" v-model="confirm_phone" v-validate="{required:true, confirmed:phone, numeric:true}" data-vv-as="phone" :placeholder="$t('confirm_phone_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('confirm_phone') }}</span>
                                        </div>

                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="state">{{$t('country')}}</label>
                                            <input type="text" class="form-control" id="state" name="state" v-model="state" v-validate="{ required: true }" :placeholder="$t('country_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('state') }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="city">{{$t('city')}}</label>
                                            <input type="text" class="form-control" id="city" name="city" v-model="city" v-validate="{ required: true }" :placeholder="$t('city_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('city') }}</span>
                                        </div>

                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="state">{{$t('ship_to')}}:</label>
                                            <input type="text" class="form-control" id="port_name" name="port_name" v-model="port_name" v-validate="{ required: true }" :placeholder="$t('ship_to_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('port_name') }}</span>
                                        </div>
                                        <div class="form-group col-md-5">
                                            <label for="state">{{$t('port_city')}}:</label>
                                            <input type="text" class="form-control" id="port_city" name="port_city" v-model="port_city" v-validate="{ required: true }" :placeholder="$t('port_city_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('port_city') }}</span>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="state">{{$t('port_code')}}:</label>
                                            <input type="text" class="form-control" id="port_code" name="port_code" v-model="port_code" v-validate="{ required: true }" :placeholder="$t('port_code_placeholder')" required>
                                            <span class="alert-danger">{{ errors.first('port_code') }}</span>
                                        </div>
                                    </div>

                                    <p> <strong> **{{$t('advise')}}. </strong> </p>


                                </div>
                            </div>
                        </div>

                        <div class="col md-4">


                            <div class="card">
                                <div class="card-header text-center">
                                    <h3> <strong>{{$t('summary')}}</strong> </h3>
                                </div>
                                <div class="card-body">

                                    <p>Code: <strong>{{chechoutref}}</strong></p>
                                    
                                    <p>Total: <strong>USD {{formatPrice(cartTotalAmount)}}</strong></p>
                                </div>

                                <div class="card-footer">
                                    <button class="btn btn-primary btn-block fechar" type="submit">
                                        {{$t('send_request_button')}}
                                    </button>
                                </div>


                            </div>


                        </div>

                    </div>


                </form>

            </div>
        </div>
    </div>




</template>


<script>
    //import OutSummary from '@/components/OutSummary.vue'
    //import OutData from '@/components/OutData.vue'

    import {
        mapGetters,
        //mapMutations,
        //mapActions,
    } from 'vuex'
    import ax from '../api'

    export default {
        name: "VueCheckout",
        computed: {
            chechoutref: function() {
                return "REF" + (new Date).toISOString().replace(/\D/g, '') + "SAQ";
            },
            ...mapGetters(['cartTotalAmount', 'GET_LANG']),
        },
        data() {
            return {
                first_name: null,
                last_name: null,
                company: null,
                email: null,
                confirm_email: null,
                phone: null,
                confirm_phone: null,
                state: null,
                city: null,
                port_name: null,
                port_city: null,
                port_code: null,
                total: null,
                datus: {},


            }
        },
        methods: {
            //...mapGetters(['reInitCart']),
            formatPrice(value) {
                //let val = (value / 1).toFixed(2).replace('.', ',')
                //return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                return new Intl.NumberFormat('de-DE', {minimumFractionDigits: 2}).format(value)
            },
            sendRequest() {

                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                                                
                        //this.datus.items = JSON.parse(localStorage.getItem('cart'));
                        let items = JSON.parse(localStorage.getItem('cart'));
                        //console.log(this.datus)
                        if(items.length !=0){
                            let loader = this.$loading.show({isFullPage: true});
                            this.$noty.warning(this.$t('process_request'), {timeout: 2000,})
                            this.datus.total = this.formatPrice(this.cartTotalAmount);
                            this.datus.reference = this.chechoutref;
                            this.datus.items = items;
                            //console.log(items);
                            ax.post("cart/pdf/", {'datus': JSON.stringify(this.datus)},)
                            .then(response => {
                                //console.log(response.data)
                                this.$store.commit('reInitCart');
                                localStorage.setItem('cart', JSON.stringify([]));
                                                                
                                this.$noty.info(this.$t('request_wait'), {timeout: 3000,})
                                setTimeout(() => {
                                    loader.hide()
                                    localStorage.setItem('cart', JSON.stringify([]));
                                    this.$router.push('download/'+response.data.code)

                                    }, 5000);

                            })
                            .catch(() => {
                                this.$noty.error(this.$t('request_wrong'))
                                localStorage.setItem('cart', JSON.stringify([]));
                                this.$router.push('/')
                            }) 
                        
                        }else{
                            this.$noty.warning(this.$t('empty_cart'));
                        } 
                        
                        
                    }else{
                        this.$noty.error(this.$t('wrong_data_in_form'))
                    } 
                });

                
            },
                                                   
                                                   
        },
        watch: {
            first_name: function(ero1) {
                if (ero1 != "") {
                    this.datus.first_name = ero1;
                } else {
                    delete this.datus.first_name;
                }
            },
            last_name: function(ero2) {
                if (ero2 != "") {
                    this.datus.last_name = ero2;
                } else {
                    delete this.datus.last_name;
                }
            },
            company: function(ero3) {
                if (ero3 != "") {
                    this.datus.company = ero3;
                } else {
                    delete this.datus.company;
                }
            },
            email: function(ero4) {
                if (ero4 != "") {
                    this.datus.email = ero4;
                } else {
                    delete this.datus.email;
                }
            },
            confirm_email: function(ero5) {
                if (ero5 != "") {
                    this.datus.confirm_email = ero5;
                } else {
                    delete this.datus.confirm_email;
                }
            },
            phone: function(ero6) {
                if (ero6 != "") {
                    this.datus.phone = ero6;
                } else {
                    delete this.datus.phone;
                }
            },
            confirm_phone: function(ero7) {
                if (ero7 != "") {
                    this.datus.confirm_phone = ero7;
                } else {
                    delete this.datus.confirm_phone;
                }
            },
            state: function(ero8) {
                if (ero8 != "") {
                    this.datus.state = ero8;
                } else {
                    delete this.datus.state;
                }
            },
            city: function(ero9) {
                if (ero9 != "") {
                    this.datus.city = ero9;
                } else {
                    delete this.datus.city;
                }
            },
            port_name: function(ero10) {
                if (ero10 != "") {
                    this.datus.port_name = ero10;
                } else {
                    delete this.datus.port_name;
                }
            },
            port_city: function(ero11) {
                if (ero11 != "") {
                    this.datus.port_city = ero11;
                } else {
                    delete this.datus.port_city;
                }
            },
            port_code: function(ero12) {
                if (ero12 != "") {
                    this.datus.port_code = ero12;
                } else {
                    delete this.datus.port_code;
                }
            },
        },
    }
</script>
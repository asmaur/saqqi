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


                <form @submit.prevent="sendRequest()">

                    <div class="row">
                        <div class="col-md-8">
                            <div class="card">

                                <div class="card-header text-center">
                                    <h4>Informations</h4>
                                </div>

                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="first_name">First Name</label>
                                            <input type="text" class="form-control" id="first_name" v-model="first_name" name="first_name" v-validate="{ required: true, alpha:true }" placeholder="Your first name" required>
                                            <span class="alert-danger">{{ errors.first('first_name') }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="last_name">Last Name</label>
                                            <input type="text" class="form-control" id="last_name" name="last_name" v-model="last_name" v-validate="{ required: true, alpha:true }" placeholder="Your last name" required>
                                            <span class="alert-danger">{{ errors.first('last_name') }}</span>
                                        </div>

                                        <div class="form-group col-md-12">
                                            <label for="company">Company name</label>
                                            <input type="text" class="form-control" id="company" name="company" v-model="company" v-validate="{ required: true, alpha:true }" placeholder="Company Name" required>
                                            <span class="alert-danger">{{ errors.first('company') }}</span>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" id="email" name="email" v-model="email" ref="email" v-validate="{ required: true, email: true }" placeholder="Email" required>
                                            <span class="alert-danger">{{ errors.first('email') }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="confirm_email">Confirm email</label>
                                            <input type="email" class="form-control" id="confirm_email" name="confirm_email" v-model="confirm_email" v-validate="'required|confirmed:email'" data-vv-as="email" placeholder="Confirm Email" required>
                                            <span class="alert-danger">{{ errors.first('confirm_email') }}</span>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="phone">Phone</label>
                                            <input type="phone" class="form-control" id="phone" name="phone" v-model="phone" ref="phone" v-validate="{ required: true, numeric:true }" placeholder="Internaltional format" required>
                                            <span class="alert-danger">{{ errors.first('phone') }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="confirm_phone">Confirm phone</label>
                                            <input type="phone" class="form-control" id="confirm_phone" name="confirm_phone" v-model="confirm_phone" v-validate="{required:true, confirmed:phone, numeric:true}" data-vv-as="phone" placeholder="Confirm phone" required>
                                            <span class="alert-danger">{{ errors.first('confirm_phone') }}</span>
                                        </div>

                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="state">State</label>
                                            <input type="text" class="form-control" id="state" name="state" v-model="state" v-validate="{ required: true }" placeholder="country name" required>
                                            <span class="alert-danger">{{ errors.first('state') }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="city">City</label>
                                            <input type="text" class="form-control" id="city" name="city" v-model="city" v-validate="{ required: true }" placeholder="city name" required>
                                            <span class="alert-danger">{{ errors.first('city') }}</span>
                                        </div>

                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="state">Shipment to:</label>
                                            <input type="text" class="form-control" id="port_name" name="port_name" v-model="port_name" v-validate="{ required: true }" placeholder="port name" required>
                                            <span class="alert-danger">{{ errors.first('port_name') }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="state">Port city:</label>
                                            <input type="text" class="form-control" id="port_city" name="port_city" v-model="port_city" v-validate="{ required: true }" placeholder="port city" required>
                                            <span class="alert-danger">{{ errors.first('port_city') }}</span>
                                        </div>
                                    </div>

                                    <p> <strong> **Contact may be made by WhatsApp or Email. </strong> </p>


                                </div>
                            </div>
                        </div>

                        <div class="col md-4">


                            <div class="card">
                                <div class="card-header text-center">
                                    <h3> <strong>Summary</strong> </h3>
                                </div>
                                <div class="card-body">

                                    <p>Code: <strong>{{chechoutref}}</strong></p>
                                    
                                    <p>Total: <strong>USD {{formatPrice(cartTotalAmount)}}</strong></p>
                                </div>

                                <div class="card-footer">
                                    <button class="btn btn-primary btn-block fechar" type="submit">
                                        SEND REQUEST
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
            ...mapGetters(['cartTotalAmount', ]),
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
                total: null,
                datus: {},


            }
        },
        methods: {
            formatPrice(value) {
                let val = (value / 1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
            sendRequest() {

                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        this.datus.total = this.cartTotalAmount;
                        this.datus.reference = this.chechoutref;
                        this.datus.items = JSON.parse(localStorage.getItem('cart'));
                        console.log(this.datus)
                        ax.post("cart/pdf/", {'datus': JSON.stringify(this.datus)},)
                        .then(() => {
                            console.log("OK")
                        })
                        
                        
                        
                    } else {
                        this.$noty.error("Check your datas..!")
                    }
                });

                //console.log(this.datus);
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
        },
    }
</script>
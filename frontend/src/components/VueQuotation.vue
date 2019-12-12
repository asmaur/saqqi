<template>


    <div>



        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="content text-center">
                            <h4> {{$t('quote_free')}} </h4>
                            <hr style="height: .1rem; background-color: #fff; margin-top: -.2rem;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="quote">

            <div class="container-fluid">

                <div class="row">

                    <div class="col-lg-12 col-md-12">

                        <h4 class="pb-20 text-center" style="color: #000;"> {{$t('quote_request')}} </h4>

                        <form class="form-wrap" @submit.prevent="sendRequest()">


                            <div class="form-group">
                                <label for="market"> {{$t('quote_sector')}} </label>
                                <select id="market" class="form-control" required v-model="sector">

                                    <option value="Paper & Pulp" selected> {{$t('quote_op_1')}} </option>
                                    <option value="Agri Business"> {{$t('quote_op_2')}} </option>
                                    <option value="Steel, Aluminium & Minerals"> {{$t('quote_op_3')}} </option>
                                    <option value="Footwear & Accessories"> {{$t('quote_op_4')}} </option>

                                </select>

                            </div>

                            <input type="text" class="form-control" :placeholder="$t('quote_fullname')" required v-model="fullname">

                            <input type="phone" class="form-control" :placeholder="$t('quote_number')" required v-model="phone" name="phone" v-validate="'numeric|required'">
                            <span v-show="errors.has('phone')" class="alert-danger">{{ errors.first('phone') }}</span>

                            <input type="email" class="form-control" :placeholder="$t('quote_email')" required v-model="email" name="email" v-validate="'email|required'">

                            <div class="form-group custom-file">
                                <label class="custom-file-label" for="validatedCustomFile"> {{$t('quote_file')}} </label>
                                <input type="file" class="custom-file-input" id="loifile" ref="loifile" v-validate="'ext:pdf|required'" data-vv-as="loifile" name="loifile" @change="handleFileChange" required>

                                <span v-if="loifile">{{loifile.name}}</span>
                                <br>
                                <span class="alert-danger" v-for="error in errors.collect('loifile')" :key="error.index">{{ error }}</span>

                            </div>

                            <textarea name="message" id="" cols="100" rows="10" :placeholder="$t('quote_message')" class="form-control" style="margin-top: 1rem;" required v-model="message"></textarea>

                            <button type="submit" class="btn-primary btn-block" style="padding: .4rem;">{{$t('quote_send')}} </button>
                            
                        </form>
                    </div>

                </div>




            </div>
        </div>




    </div>


</template>


<script>
    
    import ax from "../api";
    
    export default {
        name: "VueQuotation",
        data() {
            return {
                sector: null,
                phone: null,
                email: null,
                fullname: null,
                message: "",
                loifile: "",
                datus: {},

            }
        },
        methods: {
            
           
            handleFileChange() {

                this.loifile = this.$refs.loifile.files[0]; //e.target.files[0]

            },

            sendRequest() {

                this.$validator.validateAll().then((valid) => {


                    if (valid) {
                        
                        console.log(this.datus)
                        
                        var formData = new FormData()
                        formData.append('file', this.loifile)
                        formData.append('datus', JSON.stringify(this.datus))

                        this.$noty.success(this.$t('request_processing'), {
                            timeout: 8000,
                        })                       

                        ax.post("quote/add_quotation/", formData)
                            .then(() => {
                                this.$noty.success(this.$t('request_processed'));
                               /* setTimeout(() => {
                                    location.reload();
                                }, 2000); */
                            })
                            .catch(() => {
                                this.$noty.error(this.$t('request_wrong'))
                            })

                    } else {
                        this.$noty.error(this.$t('wrong_data_in_form'))

                    }
                })



            },
            
        },
        watch: {
                sector: function(ero1) {
                    if (ero1 != "") {
                        this.datus.sector = ero1;
                    } else {
                        delete this.datus.sector;
                    }
                },
                phone: function(ero2) {
                    if (ero2 != "") {
                        this.datus.phone = ero2;
                    } else {
                        delete this.datus.phone;
                    }
                },
                email: function(ero3) {
                    if (ero3 != "") {
                        this.datus.email = ero3;
                    } else {
                        delete this.datus.email;
                    }
                },
                message: function(ero4) {
                    if (ero4 != "") {
                        this.datus.message = ero4;
                    } else {
                        delete this.datus.message;
                    }
                },
                fullname: function(ero5) {
                    if (ero5 != "") {
                        this.datus.fullname = ero5;
                    } else {
                        delete this.datus.fullname;
                    }
                },


            },
    }
</script>
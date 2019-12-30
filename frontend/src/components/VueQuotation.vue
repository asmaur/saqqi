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
                                    <option value="Construction Materials"> {{$t('quote_op_5')}} </option>
                                    <option value="Café Verde"> {{$t('quote_op_6')}} </option>
                                    <option value="Milho"> {{$t('quote_op_7')}} </option>
                                    <option value="Soja"> {{$t('quote_op_8')}} </option>
                                    <option value="Grãos e cereais(exceto milho)"> {{$t('quote_op_9')}} </option>
                                    <option value="Celulose"> {{$t('quote_op_10')}} </option>
                                    <option value="Aves"> {{$t('quote_op_11')}} </option>
                                    <option value="Nozes & Castanhas"> {{$t('quote_op_12')}} </option>
                                    <option value="Carnes"> {{$t('quote_op_13')}} </option>
                                    <option value="Óleos Comestíveis"> {{$t('quote_op_14')}} </option>
                                    <option value="Carne Suína"> {{$t('quote_op_15')}} </option>
                                    <option value="Amendoim"> {{$t('quote_op_16')}} </option>
                                    <option value="Peixes & Frutos do Mar"> {{$t('quote_op_17')}} </option>
                                    <option value="Frutas e Produtos Relacionados"> {{$t('quote_op_18')}} </option>
                                    <option value="Polpa de Fruta"> {{$t('quote_op_19')}} </option>
                                    <option value="Arroz"> {{$t('quote_op_20')}} </option>
                                    <option value="Congelados"> {{$t('quote_op_21')}} </option>
                                    <option value="Farinhas"> {{$t('quote_op_22')}} </option>
                                    <option value="Café"> {{$t('quote_op_23')}} </option>
                                    <option value="Café Gourmet"> {{$t('quote_op_24')}} </option>
                                    <option value="Leite"> {{$t('quote_op_25')}} </option>
                                    <option value="Água(Mineral, Alcalina, Purificada, etc.)"> {{$t('quote_op_26')}} </option>
                                    <option value="Bolsas & Bolsas de Mão"> {{$t('quote_op_27')}} </option>
                                    <option value="Mochilas & Bagagens"> {{$t('quote_op_28')}} </option>
                                    <option value="Calçados Femininos"> {{$t('quote_op_29')}} </option>
                                    <option value="Sandálias"> {{$t('quote_op_30')}} </option>
                                    <option value="Calçados de Couro"> {{$t('quote_op_31')}} </option>
                                    <option value="Chinelos"> {{$t('quote_op_32')}} </option>
                                    <option value="Calçados Masculinos"> {{$t('quote_op_33')}} </option>
                                    <option value="Calçados Atléticos"> {{$t('quote_op_34')}} </option>
                                    <option value="Calçados para Bebês e Crianças"> {{$t('quote_op_35')}} </option>
                                    <option value="Botas"> {{$t('quote_op_36')}} </option> "Botas",
                                    <option value="Matéria - Prima para Calçados"> {{$t('quote_op_37')}} </option>
                                    <option value="Arames,Fios & Cabos"> {{$t('quote_op_38')}} </option>
                                    <option value="Materiais e Suprimentos de Construção"> {{$t('quote_op_39')}} </option>
                                    <option value="Parafusos e Porcas"> {{$t('quote_op_40')}} </option>
                                    <option value="Perfil de Alumínio"> {{$t('quote_op_41')}} </option>
                                    <option value="Sucata de Metais"> {{$t('quote_op_42')}} </option>
                                    <option value="Metais não ferrosos(Alumínio, Cobre, Etc.)"> {{$t('quote_op_43')}} </option>
                                    <option value="Aço & Ferro"> {{$t('quote_op_44')}} </option>
                                    <option value="Ligas Ferrosas & Não ferrosas"> {{$t('quote_op_45')}} </option>
                                    <option value="Produtos de Mármore, Granito, Pedra & Ardósia"> {{$t('quote_op_46')}} </option>
                                    <option value="Papel Sulfite A4"> {{$t('quote_op_47')}} </option>
                                    <option value="Papel, Papelão & Derivados"> {{$t('quote_op_48')}} </option>
                                    <option value="Produtos de Papelaria"> {{$t('quote_op_49')}} </option>

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

                        //console.log(this.datus)

                        var formData = new FormData()
                        formData.append('file', this.loifile)
                        formData.append('datus', JSON.stringify(this.datus))

                        this.$noty.success(this.$t('request_processing'), {
                            timeout: 8000,
                        })

                        ax.post("quote/add_quotation/", formData)
                            .then(() => {
                                this.$noty.success(this.$t('request_processed'));
                                setTimeout(() => {
                                    location.reload();
                                }, 5000);
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
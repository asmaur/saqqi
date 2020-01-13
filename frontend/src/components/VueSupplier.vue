<template>

    <div>

        <div class="modal fade" id="supplierModal" tabindex="-1" role="dialog" aria-labelledby="supplierModal" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Cadastre-se (Brazilian only)</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="sendSupplier()">
                        <div class="modal-body">

                            <div class="form-row">

                                <div class="form-group col-md-6">
                                    <label for="recipient-name" class="col-form-label">Nome da empresa:</label>
                                    <input type="text" class="form-control" id="sempresa" placeholder="Nome fantasia da empresa" v-model="empresa" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="recipient-name" class="col-form-label">CNPJ da empresa:</label>
                                    <input type="tel" class="form-control" id="scnpj" placeholder="CNPJ  da empresa" v-mask="['###.###.###-##', '##.###.###/####-##']" v-model="cnpj" required>

                                </div>

                                <div class="form-group col-md-6">
                                    <label for="recipient-name" class="col-form-label">Nome do responsável:</label>
                                    <input type="text" class="form-control" id="fullname" placeholder="Nome completo do responsável para contato" v-model="fullname" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="recipient-name" class="col-form-label">Email:</label>
                                    <input type="email" class="form-control" id="mail" placeholder="Email para contato" v-model="email" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="recipient-name" class="col-form-label">Telefone:</label>
                                    <input type="tel" class="form-control" id="telefone" placeholder="Telefone da empresa para contato" v-model="telefone" v-mask="['(##) ####-####', '(##) #####-####']" required>


                                </div>
                                <div class="form-group col-md-6">
                                    <label for="recipient-name" class="col-form-label">Estado:</label>
                                    <input type="text" class="form-control" id="sestado" placeholder="Sede da empresa" v-model="estado" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="recipient-name" class="col-form-label">Cidade:</label>
                                    <input type="text" class="form-control" id="scidade" placeholder="Sede da empresa" v-model="cidade" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="recipient-name" class="col-form-label">Produto:</label>
                                    <input type="text" class="form-control" id="sproduto" placeholder="Produto principal" v-model="produto" required>
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="message-text" class="col-form-label">Mensagem:</label>
                                    <textarea class="form-control" id="message-text" v-model="message" rows="8" cols="" required></textarea>
                                </div>

                                <p> <strong> **Certifique-se de ter um CNPJ regular, ativo e sem pendencias perante a receita federal do Brasil. </strong> </p>



                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary mr-auto" data-dismiss="modal"> FECHAR </button>
                                <button type="submit" class="btn btn-primary"> ENVIAR </button>
                            </div>


                        </div>
                    </form>


                </div>

            </div>
        </div>
    </div>


</template>


<script>
    import ax from '../api.js'
    import $ from 'jquery'
    export default {
        name: "VueSupplier",
        data() {
            return {
                empresa: null,
                cnpj: null,
                email: null,
                telefone: null,
                estado: null,
                cidade: null,
                produto: null,
                message: null,
                fullname: null,
                datus: {},

            }
        },
        methods: {
            sendSupplier() {

                this.datus.empresa = this.empresa
                this.datus.cnpj = this.cnpj
                this.datus.email = this.email
                this.datus.telefone = this.telefone
                this.datus.estado = this.estado
                this.datus.cidade = this.cidade
                this.datus.produto = this.produto
                this.datus.message = this.message
                this.datus.fullname = this.fullname

                //let loader = this.$loading.show({
                 //   isFullPage: true
               // });
                this.$noty.warning(this.$t('process_request'), {
                    timeout: 2000,
                })

                ax.post("supplier/add_supplier/", {
                    'datus': JSON.stringify(this.datus)
                }, )
                .then(() => {

                    this.$noty.info(this.$t('request_wait'), {
                        timeout: 2000,
                    })
                    setTimeout(() => {
                        //loader.hide()
                        $("#supplierModal").trigger("reset")
                        $('#supplierModal').modal('hide')

                    }, 3000);

                })
                .catch(() => {
                    this.$noty.error(this.$t('request_wrong'))
                    
                                this.$router.push('/')
                })
            }
        },
    }
</script>
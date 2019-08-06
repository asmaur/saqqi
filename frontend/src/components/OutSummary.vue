<template>

    <div class="card">
        <div class="card-header text-center">
            <h3> <strong>Summary</strong> </h3>
        </div>
        <div class="card-body">

            <p>Code: <strong>{{chechoutref}}</strong></p>
            <p>Total: <strong>$ {{cartTotalAmount}}</strong></p>
        </div>

        <div class="card-footer">
            <button class="btn btn-primary btn-block fechar">
                SEND REQUEST
            </button>
        </div>


    </div>

</template>


<script>
    
    import {
        mapGetters,
        //mapMutations,
        mapActions,
    } from 'vuex'
    
    export default {
        name: "OutSummary",
        computed:{
            chechoutref: function(){
                return "REF" + (new Date).toISOString().replace(/\D/g, '')+"SAQ";
            },
            ...mapGetters(['cartTotalAmount', ]),
        },
        data() {
            return{
                
            }
        },
        methods:{
            
        },
        
    }
</script>
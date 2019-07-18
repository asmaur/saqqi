<template>


    <div class="card">

        <div class="card-body">
            <p>
                This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. 
            </p>
            <hr>
        </div>

        <div class="card-body">
            <p class="card-title" style="margin-top:-2.5rem">Kraft Paper bag
            <br>
            Dim: 12x34x56 cm</p>
            <p class="card-title"> <strong>Min Order: 3000 uni.</strong> </p>

            <ul class="list-group list-group-flush">

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary fechar" type="button" style="color: #fff;">
                            <i class="far fa-minus-square"></i>
                        </button>
                    </div>
                    <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">

                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary entrar" type="button" style="color: #fff;">
                            <i class="far fa-plus-square"></i>
                        </button>
                    </div>
                </div>


            </ul>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary btn-block fechar">
                ADD TO CART
            </button>

        </div>
    </div>


</template>


<script>
    export default {
        name: "AddProd",
    }
</script>
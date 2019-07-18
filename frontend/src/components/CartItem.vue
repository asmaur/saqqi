<template>

    <div class="col-sm-12 col-md-3 cart-item">

        <div class="card">
            <img class="card-img-top" src="../assets/img/031-Sacola.jpg" alt="Card image cap">
            <div class="card-body">
                <p class="card-title">Kraft Paper bag</p>
                <p class="card-title">Dim: 12x34x56 cm</p>
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
                <button class="btn btn-primary fechar">
                    <i class="far fa-trash-alt"></i>
                </button>

            </div>
        </div>

    </div>

</template>


<script>
    export default {
        name: "CartItem",
    }
</script>
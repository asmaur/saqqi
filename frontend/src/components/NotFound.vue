<template>

    <div class="shop" id="notfound">
        <div class="container">
            <div class="row">

                <div class="col-md-6 offset-md-3">

                    <div class="card">
                        <div class="card-body">
                            <div class="alert alert-danger text-center">
                                <h4>{{$t('not_found_1')}}</h4>
                                <p>{{$t('not_found_p')}}</p>
                            </div>
                            <router-link to="/" class="btn btn-dark btn-block">
                                {{$t('not_found_back')}}
                            </router-link>

                        </div>
                    </div>


                </div>

            </div>

        </div>

    </div>

</template>


<script>
    export default {
        name: "NotFound",
    }
</script>
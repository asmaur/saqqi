<template>

    <div>

        <div class="newsletter">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">

                        <div class="h4">
                            <i class="fas fa-envelope-square"></i>
                            Subscribe to our newsletter
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-primary btn-block" data-toggle="modal" data-target="#newsletter">Subscribe Now</button>
                    </div>
                </div>
            </div>

        </div>


        <div class="modal fade" id="newsletter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <form>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Subscribe Now</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="form-group">
                                <label for="email" class="col-form-label">Email:</label>
                                <input type="email" name="email" class="form-control" id="email" required>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary mr-auto fechar" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary entrar">Send</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>



    </div>

</template>


<script>
    export default {
        name: "NewsLetter",
    }
</script>
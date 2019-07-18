<template>


    <div class="card">

        <div class="card-header text-center">
            <h4>Infos</h4>
        </div>

        <div class="card-body">


            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="first_name">First Name</label>
                        <input type="text" class="form-control" id="first_name" name="first_name" placeholder="" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="last_name">Last Name</label>
                        <input type="text" class="form-control" id="last_name" name="last_name" placeholder="">
                    </div>

                    <div class="form-group col-md-12">
                        <label for="company">Company name</label>
                        <input type="text" class="form-control" id="company" name="company" placeholder="" required>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="confirm_email">Confirm email</label>
                        <input type="email" class="form-control" id="confirm_email" name="confirm_email" placeholder="Email">
                    </div>

                    <div class="form-group col-md-6">
                        <label for="telephone">Phone</label>
                        <input type="telephone" class="form-control" id="telephone" name="telephone" placeholder="phone">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="confirm_telephone">Confirm phone</label>
                        <input type="telephone" class="form-control" id="confirm_telephone" name="confirm_telephone" placeholder="phone">
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="state">State</label>
                        <input type="text" class="form-control" id="state" name="state" placeholder="country name">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="city">City</label>
                        <input type="text" class="form-control" id="city" name="city">
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="state">Shipment to:</label>
                        <input type="text" class="form-control" id="state" name="state" placeholder="port name">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="state">Port city:</label>
                        <input type="text" class="form-control" id="state" name="state" placeholder="port city">
                    </div>
                </div>

                <p> <strong> **Contact may be made by WhatsApp or Email. </strong> </p>


            </form>



        </div>


    </div>








</template>


<script>
    export default {
        name: "OutData",
    }
</script>
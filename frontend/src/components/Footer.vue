<template>

    <div id="footer">
        <div class="container">
            <div class="row">
                 <div class="col-md-4 text-center">
                    <a href="mailto:contact@saqqi.com">contact@saqqi.com</a>
                </div>
                <div class="col-md-4 text-center">
                    
                    <a href="" style="margin-right: .4rem;">
                        <i class="fab fa-telegram fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-whatsapp fa-2x"></i>
                    </a>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 offset-md-4 text-center">
                    <p>saqqi &copy; {{ano}} | All right reserved.</p>
                </div>
            </div>
        </div>

    </div>


</template>


<script>
    export default {
        name: "Footer",
        computed: {
            ano: function() {
                var dt = new Date()
                return dt.getFullYear()
            }
        },
    }
</script>
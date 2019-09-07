<template>

    <div id="footer">
        <div class="container">
            <div class="row">
                 <div class="col-md-4 text-center">
                    <a href="mailto:contact@saqqi.com">contact@saqqi.com</a>
                </div>
                <div class="col-md-4 text-center">
                    
                    <a href="https://t.me/saqqitrade" style="margin-right: .4rem;" target="_blank">
                        <i class="fab fa-telegram fa-3x"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5551991424429&text=Hi" target="_blank">
                        <i class="fab fa-whatsapp fa-3x"></i>
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
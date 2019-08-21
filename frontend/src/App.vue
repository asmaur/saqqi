<template>
    <div id="app">

        <nav-bar />

        <router-view :key="$route.fullPath" />

        <Footer />

    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    import NavBar from '@/components/NavBar.vue'
    import ax from './api'

    export default {
        name: 'App',
        components: {
            NavBar,
            Footer,
        },

        methods: {
            set_lang() {
                if (localStorage.getItem('lang')) {
                    return;
                } else {
                    //console.log(this.$route.params.lang);
                    localStorage.setItem('lang', JSON.stringify(this.$route.params.lang));
                }
            },
            set_products() {
                const prods = JSON.parse(localStorage.getItem('products'));
                //let products = {};

                ax.get('products/')
                    .then(response => {
                        let products = response.data;
                        if (prods != products) {

                            localStorage.setItem('products', JSON.stringify(products));
                            //console.log(products)
                        }
                    })


            },
            set_cart() {
                if (localStorage.getItem('cart')) {
                    return;
                } else {
                    localStorage.setItem('cart', JSON.stringify([]));
                }
            },
            
        },
        created() {
            this.$store.dispatch("fetchProducts");
            
            
            this.set_lang();
        },
        beforeMount() {
            
            this.set_products();
            this.set_cart();
            
            setInterval(() => {
              this.set_lang();
            }, 1000)
            
        },
    }
</script>
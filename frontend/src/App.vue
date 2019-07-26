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
            getCategories() {

                if (localStorage.getItem('categories')) {
                    return;
                    //categories = JSON.parse(localStorage.getItem('categories'))
                } else {
                    ax.get('cat/')
                        .then(response => {
                            localStorage.setItem('categories', JSON.stringify(response.data));
                        })
                }

            },
        },
        beforeMount() {
           this.getCategories();
        }
    }
</script>
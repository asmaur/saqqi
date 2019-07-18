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
    
    export default{
        name: 'App',
        components:{
            NavBar,
            Footer,
        }
    }

</script>
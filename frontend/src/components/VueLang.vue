<template>
    
    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{GET_LANG}}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <button class="dropdown-item" @click="setlang('en')">en</button>
                        <div class="dropdown-divider"></div>
                        <button class="dropdown-item" @click="setlang('fr')">fr</button>
                        <div class="dropdown-divider"></div>
                        <button class="dropdown-item" @click="setlang('pt-br')">pt-br</button>
                    </div>
                </li>
    
    
</template>


<script>
    
     import { mapGetters, mapMutations } from 'vuex'
    
    export default{
        name: "VueLang",
        
        computed:{
            currentLang: function(){
                return this.$route.params.lang
            },
            ...mapGetters(['GET_LANG'])
        },
        
        methods:{
            ...mapMutations(['SET_LANG']),
            setlang: function(locale) {
                this.SET_LANG( {lang: locale})//this.$route.params.lang})
                this.$router.push('/'+locale)
            },
        },
        beforeMount(){
            this.setlang(this.$route.params.lang);
        },
        updated(){
            this.setlang(this.$route.params.lang);
        }
            
    }

</script>
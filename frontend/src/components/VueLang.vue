<template>


    <li class="nav-item">

        <select class="form-control" id="lang" v-model="lang" @change="changeLanguage">
            <option v-for="lg in langues" :key="lg" :selected="GET_LANG" :value="lg">{{lg}}</option>

        </select>
        


    </li>


    <!--
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
    -->

</template>


<script>
    import {
        mapGetters,
        mapMutations
    } from 'vuex'

    export default {
        name: "VueLang",

        computed: {

            ...mapGetters(['GET_LANG']),
            
            
        },
        data() {
            return {
                langues: ['en', 'fr', 'pt-br'],
                lang: JSON.parse(localStorage.getItem('lang')),
            }
        },

        methods: {
            ...mapMutations(['SET_LANG']),
            setlang: function(locale) {

                this.SET_LANG({
                    lang: locale
                }) //this.$route.params.lang})
                this.$router.push('/' + locale)
            },

            changeLanguage() {
                const lang = this.lang//e.target.value
                this.SET_LANG({
                    lang: this.lang
                })
                this.$noty.info(this.$t('reload_page'))
               /*const to = this.$router.resolve({
                    params: {
                        lang
                    }
                }) */
                this.$router.push('/'+lang)//to.location)
               /* return Trans.changeLanguage(lang).then(() => {
                    this.$router.push(to.location)
                })*/
            },
            isCurrent(){
            this.lang = JSON.parse(localStorage.getItem('lang'));
        },
            


        },
        updated() {
            this.setlang(this.$route.params.lang)
            this.lang=JSON.parse(localStorage.getItem('lang'));
        },
            

    }
</script>
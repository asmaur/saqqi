import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'


//css third party
import 'bootstrap/dist/css/bootstrap.min.css'
import 'lightgallery/dist/css/lightgallery.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './assets/css/hexagons.min.css'



//js third party
import 'jquery'
window.$ = require('jquery')
window.JQuery = require('jquery')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'lightgallery/dist/js/lightgallery.min.js'
import 'owl.carousel/dist/owl.carousel.min.js'




//css custom
import './assets/css/style.css'
import './assets/css/index.css'
import './assets/css/shop.css'
import './assets/css/stilis.css'



import 'vuejs-noty/dist/vuejs-noty.css'

import VueNoty from 'vuejs-noty'

Vue.use(VueNoty, {
    timeout: 5000,
    progressBar: true,
    layout: 'topRight',
    theme: 'relax',
})

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate)


import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
    id: 'UA-dhd11'
})

import {i18n} from './i18n'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
    minimum: 0.1,
    easing: 'ease',
    speed: 5000, 
    showSpinner: true, 
    trickle: false, 
    trickleRate: 0.02, 
    trickleSpeed: 800
});
Vue.use(NProgress)


import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.use(Loading, {
    color: 'red',
    loader: 'spinner',
    backgroundColor: '#ffffff',
    opacity: 1,
    zIndex: 999,
}, {})




Vue.config.productionTip = true

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
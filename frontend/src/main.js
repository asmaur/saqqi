import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//css third party
import 'bootstrap/dist/css/bootstrap.min.css'
import 'lightgallery/dist/css/lightgallery.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'



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



import 'vuejs-noty/dist/vuejs-noty.css'

import VueNoty from 'vuejs-noty'

Vue.use(VueNoty, {
    timeout: 5000, 
    progressBar: true, 
    layout: 'topRight', 
    theme: 'relax',
})

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-dhd11'
})

import i18n from './i18n'



Vue.config.productionTip = false

new Vue({
  router,
  store,
    i18n,
  render: h => h(App)
}).$mount('#app')

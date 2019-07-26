import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import i18n from './i18n'

import NProgress from 'nprogress'



Vue.use(Router)

//let BASE_URL = "http://0.0.0.0:8080/"

 let router = new Router({
     
  routes: [
      {
    path: "/",
    redirect: `/${i18n.locale}/`
  },
    {
      path: '/:lang/',
        component:{render: h => h('router-view') },
        
      
        children: [
                    {
                      path: '',
                      name: 'home',
                      component: Home,
                    },
                    {
                      path: 'about',
                      name: 'about',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                    },
                      {
                      path: 'shop',
                      name: 'shop',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ './views/Shop.vue')
                    },
                      {
                      path: 'category/:slug/',
                      name: 'category',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ './views/Category.vue')
                    },
                      {
                      path: 'product',
                      name: 'product',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ './views/Product.vue')
                    },
                      {
                      path: 'cart',
                      name: 'cart',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue')
                    },
                      {
                      path: 'checkout',
                      name: 'checkout',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ './views/Checkout.vue')
                    },
                      {
                      path: 'download',
                      name: 'download',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ './views/Download.vue')
                    },
                      {
                      path: 'customized',
                      name: 'customized',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ './views/Customized.vue')
                    },
                      {
                      path: 'notfound',
                      name: 'notfound',
                      // route level code-splitting
                      // this generates a separate chunk (about.[hash].js) for this route
                      // which is lazy-loaded when the route is visited.
                      component: () => import(/* webpackChunkName: "about" */ './views/Found404.vue')
                    },
            ],
    },
],
})

/*
let router = new Router({
  routes: [{
    path: '/:lang'
  }]
}); */

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = i18n.locale;//'en';
      
  }

  // set the current language for vuex-i18n. note that translation data
  // for the language might need to be loaded first
  i18n.locale=to.params.lang;
        
  next();
    
  
}); 


router.beforeResolve((to, from, next) => {
  if (to.path) {
      
    NProgress.start()
  }
  next()
});
router.afterEach(() => {
  NProgress.done(true)
});

export default router;

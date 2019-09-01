import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import {i18n} from './i18n'

import NProgress from 'nprogress'
import VueAnalytics from 'vue-analytics'



Vue.use(Router)



 let router = new Router({
     mode: 'history',
    //base: __dirname,
  routes: [
      {
    path: "/",
    redirect: `/${i18n.locale}/`
  },
    {
      path: '/:lang/',
        component:{render: h => h('router-view') },
        beforeEnter(to, from, next){
            let lang = to.params.lang
            
            if(!['en', 'fr', 'pt-br'].includes(lang)) return next('en')
            
            if(i18n.locale===lang) return next()
            
            import(`./locales/${lang}.json`).then( (msgs) => {
                i18n.setLocaleMessage(lang, msgs.default || msgs)
                i18n.locale = lang
                return next()
            })
            next()
        },
        
      
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
                      path: 'product/:slug/:id',
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
                      path: 'download/:code',
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
                      path: '*',
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
 /*
router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = 'en';
      
  }
  i18n.locale=to.params.lang;
        
  next();
    
  
}); 
*/

 
 router.beforeEach((to, from, next) => {
  if (!to.params.hasOwnProperty('lang')) {
    next({
      ...to,
      params: {
        ...to.params,
        language: from.params.lang || Vue.prototype.$lang
      }
    })
  } else {
    next()
  }
})
 
 
 
router.beforeResolve((to, from, next) => {
  if (to.path) {
      
    NProgress.start()
  }
  next()
});
router.afterEach(() => {
  NProgress.done(true)
});

Vue.use(VueAnalytics, {
    // this one of course needs to me a real domain ID
    id: 'UA-146161028-1',
    //id: 'teste', 
   // use the `router` instance here
    router
});

export default router;

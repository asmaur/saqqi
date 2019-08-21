import Vue from 'vue'
import Vuex from 'vuex'
//import {i18n} from '../i18n'
//import ax from '../api'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Items: [],
        Item: {},
        cart: [],
        products: [],

        lang: null,
    },
    mutations: {
        SET_LANG(state, payload) {
            const lang = JSON.parse(localStorage.getItem('lang'));
            //console.log(payload)
            if (payload.lang == null) {
                
                state.lang = JSON.parse(localStorage.getItem('lang'));
                
                /*import(`../locales/${state.lang}.json`).then( (msgs) => {
                i18n.setLocaleMessage(state.lang, msgs.default || msgs)}); */
                                                      
                
            } else if (payload.lang != lang) {
                state.lang = payload.lang
                localStorage.setItem('lang', JSON.stringify(state.lang))
                   /* import(`../locales/${state.lang}.json`).then( (msgs) => {
                i18n.setLocaleMessage(state.lang, msgs.default || msgs)});*/
            }

        },
        setUpProducts: (state, productsPayload) => {
            //sets the state's  products property to the products array recieved as payload
            state.products = productsPayload;
        },

        PRODUCT_ALL(state) {
            const products = JSON.parse(localStorage.getItem('products'));
            state.products_all = products;
        },
        addToCart: (state, playload) => {
            //find the product in the products list, productCode, quantity
            const productCode = playload.productCode;
            const quantity = playload.quantity;
            let product = state.products.find((product) => product.code === productCode);
            //find the product in the cart list
            let item = state.cart.find((item) => item.product.code === productCode);
            //console.log(item)
            //console.log(quantity)

            if (item) {
                //product already present in the cart. so increase the quantity
                item.quantity = new Intl.NumberFormat('de-DE').format(quantity);//String(quantity).replace(/(.)(?=(\d{3})+$)/g,'$1.');
            } else {
                
                //let val = ((product.price * quantity) / 1).toFixed(2).replace('.', ',')
                
                //console.log(val)
                state.cart.push({
                    // product newly added to cart
                    product,
                    quantity: new Intl.NumberFormat('de-DE').format(quantity), //String(quantity).replace(/(.)(?=(\d{3})+$)/g,'$1.'),
                    subtotal: new Intl.NumberFormat('de-DE', {minimumFractionDigits: 2}).format(product.price * quantity) //val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."), //product.price * quantity, 
                });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))

        },
        removeFromCart: (state, productCode) => {
            //find the product in the products list
            //let product = state.products.find((product) => product.code === productCode);
            //find the product in the cart list
            let cartProduct = state.cart.find((product) => product.code === productCode);

            cartProduct.quantity -= 1000;
            //Add back the quantity in products list by 1
            //product.quantity++;
        },
        addFromCart: (state, productCode) => {
            //find the product in the products list
            //let product = state.products.find((product) => product.code === productCode);
            //find the product in the cart list
            let cartProduct = state.cart.find((product) => product.code === productCode);

            cartProduct.quantity += 1000;
            //Add back the quantity in products list by 1
            //product.quantity++;
        },
        deleteFromCart: (state, productCode) => {
            //find the product in the products list
            //let item = state.products.find((item) => item.product.code === productCode);
            //find the product index in the cart list
            let cartProductIndex = state.cart.findIndex((item) => item.product.code === productCode);
            
            // remove the product from the cart
            state.cart.splice(cartProductIndex, 1);
            
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },


    },

    getters: {
        GET_LANG(state) {
            state.lang = JSON.parse(localStorage.getItem('lang'));
            return state.lang //|| JSON.parse(localStorage.getItem('lang'));
        },

        GET_PRODUCTS_ALL(state) {
            return state.products_all || JSON.parse(localStorage.getItem('products_all'));
        },
        GET_CART_TOTAL(state) {
            //console.log(state.cart.length);
            if (state.cart.length == 0) {
                state.cart = JSON.parse(localStorage.getItem('cart'));
                //console.log(state.cart);
                //return state.cart.length;
            }
            //const cart = state.cart || JSON.parse(localStorage.getItem('cart'));
            //console.log(state.cart.length);
            return state.cart.length;
        },

        GET_CART(state) {
            return state.cart || JSON.parse(localStorage.getItem('cart'));
            //return cart;
        },
        
            cartTotalAmount: (state) => {
            return state.cart.reduce((total, item) => {
                return total + (item.product.price * Number(String(item.quantity).replace(/\./g,'')));
            }, 0);
        },
        

    },

    actions: {
        fetchProducts: ({
            commit
        }) => {
            const products = JSON.parse(localStorage.getItem('products'));
            //passing the products recieved from response as a payload to the mutation
            commit("setUpProducts", products);


        },

        addToCart: ({
            commit
        }, productCode, quantity) => {
            setTimeout(() => {
                commit("addToCart", productCode, quantity);
                //commit("showToast", "added to cart");
            }, 1000);
        },
        /*removeFromCart: ({ commit }, productId) => {
            myApi.products("remove", productId).then((productId) => {
                commit("removeFromCart", productId);
                commit("showToast", "removed from cart");
            });
        },*/
        deleteFromCart: ({ commit }, productCode) => {
           setTimeout(() => {
                commit("deleteFromCart", productCode);
                //commit("showToast", "deleted from cart");
            }, 1000);

        }

    }
})
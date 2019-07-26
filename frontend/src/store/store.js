import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '../i18n'

//import ax from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Items: [],
        Item: {},
        Cart: {},
        products: [],
        categories: [],
        catus: {},
        names: [],
        lang: null,
    },
    mutations: {
        SET_LANG(state, payload) {
            //console.log(payload)
            state.lang = payload.lang;
        },
        InitializeStore(state) {
            state.categories = JSON.parse(localStorage.getItem('categories'));

        },
        SET_NAMES(state) {

            const lang = state.lang || i18n.locale
            state.catus = JSON.parse(localStorage.getItem('categories'));
            let cat = {}
            const names = []
            const categories = state.catus.filter(cat => {
                return cat.translations[lang]
            })

            for (var i in categories) {
                console.log(i)
                cat.slug = categories[i]["slug"]
                cat.code = categories[i]["code"]
                cat.name = categories[i]["translations"][lang]["name"]

                names.push(cat)

                cat = {}
            }
            state.names = names
        },


    },
    getters: {
        GET_LANG(state) {
            return state.lang;
        },
        GET_NAMES(state) {
            return state.names;
        }
    },
    actions: {

    }
})
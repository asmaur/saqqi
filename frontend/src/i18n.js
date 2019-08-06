import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import en from '@/locales/en.json'

Vue.use(Vuei18n)

export const i18n = new Vuei18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en }
})
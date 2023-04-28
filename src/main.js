import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import locales from './locales'

const i18n = new createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: locales
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
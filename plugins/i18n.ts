import { createI18n } from 'vue-i18n'
import en from '~/locales/en'
import fr from '~/locales/fr'

function getLang() {
    if (navigator.languages != undefined) return navigator.languages[0];
    else return navigator.language;
}
  
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: process.client ? getLang() : 'en',
    messages: {
      en,
      fr
    }
  })

  vueApp.use(i18n)
})
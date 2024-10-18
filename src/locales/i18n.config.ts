import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { languages } from './languages'

i18n.use(initReactI18next).init({
  resources: languages,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  parseMissingKeyHandler: () => ''
})

export default i18n

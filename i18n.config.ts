import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './src/locales/en.local.ts';
import { es } from './src/locales/es.local.ts';

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Si no encuentra traducción, usa inglés
    interpolation: {
      escapeValue: false // React ya escapa los valores por defecto
    },
    parseMissingKeyHandler: () => '', // Devuelve vacío en lugar de la clave si no encuentra la traducción
  });

export default i18n;

import { en } from '@/locales/en.local'
import { es } from '@/locales/es.local'

export interface LanguageOption {
  translation: Record<string, string | object>
  code: string
  name: string
}

export const languages = {
  en: {
    translation: en,
    code: 'en',
    name: 'English',
  },
  es: {
    translation: es,
    code: 'es',
    name: 'Español',
  },
}

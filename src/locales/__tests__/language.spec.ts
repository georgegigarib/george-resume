import { describe, test, expect } from 'vitest'
import { languages } from '@/locales/languages'
import { en } from '@/locales/en.local'
import { es } from '@/locales/es.local'

describe('languages', () => {
  const languageTestCases = [
    { lang: 'en', name: 'English', translation: en },
    { lang: 'es', name: 'Español', translation: es }
  ]

  test.each(languageTestCases)(
    'should have correct configuration for language %s',
    ({ lang, name, translation }) => {
      const language = languages[lang as keyof typeof languages]

      expect(language).toBeDefined()
      expect(language.code).toBe(lang)
      expect(language.name).toBe(name)
      expect(typeof language.translation).toBe('object')
      expect(language.translation).toEqual(translation)
    }
  )
})

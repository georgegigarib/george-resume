import { describe, it, expect, vi } from 'vitest';
import i18n from '@/locales/i18n.config';
import { languages } from '@/locales/languages';

vi.mock('react-i18next', () => ({
  initReactI18next: {
    type: '3rdParty',
    init: vi.fn(),
  },
}));

describe('i18n configuration', () => {
  it('should initialize i18n with the correct configuration', () => {
    expect(i18n.isInitialized).toBeTruthy();
    expect(i18n.options.resources).toEqual(languages);
    expect(i18n.language).toBe('en');
    expect(i18n.options.fallbackLng).toEqual(['en']);
  });

  it('should have parseMissingKeyHandler that returns an empty string', () => {
    const missingKeyHandler = i18n.options.parseMissingKeyHandler;
    expect(missingKeyHandler && missingKeyHandler('missing_key')).toBe('');
  });
});

import { setActiveHash } from '@/store/hash/activeHashSlice'
import { setDarkTheme } from '@/store/theme/themeStatus'
import { Sections } from '@/app/layout/NavbarTypes'
import { describe, beforeEach, it, expect } from 'vitest'
import store from '@/store/index'
import { ActiveHashState } from '@/store/hash/activeHashSlice'
import { ThemeState } from '@/store/theme/themeStatus'

describe('index store', () => {
  let initialHashState: ActiveHashState
  let initialThemeState: ThemeState

  beforeEach(() => {
    initialHashState = store.getState().hash
    initialThemeState = store.getState().darkTheme
  })

  it('should have activeHash reducer in the store', () => {
    expect(initialHashState).toBeDefined()
    expect(initialHashState.activeHash).toBeDefined()
    expect(initialHashState.activeHash).toEqual(Sections.Me)
  })

  it('should handle setActiveHash', () => {
    const newHash = Sections.Music

    store.dispatch(setActiveHash(newHash))

    expect(store.getState().hash.activeHash).toEqual(newHash)
  })

  it('should maintain the state after an invalid action type', () => {
    const previousState = store.getState().hash

    store.dispatch({ type: 'INVALID_ACTION' })

    expect(store.getState().hash).toEqual(previousState)
  })

  it('should have darkTheme reducer in the store', () => {
    expect(initialThemeState).toBeDefined()
    expect(initialThemeState.isDarkThemeEnabled).toBeDefined()
    expect(initialThemeState.isDarkThemeEnabled).toEqual(false)
  })

  it('should handle setDarkTheme', () => {
    store.dispatch(setDarkTheme(true))

    expect(store.getState().darkTheme.isDarkThemeEnabled).toEqual(true)
  })

  it('should maintain the darkTheme state after an invalid action type', () => {
    const previousState = store.getState().darkTheme

    store.dispatch({ type: 'INVALID_ACTION' })

    expect(store.getState().darkTheme).toEqual(previousState)
  })
})

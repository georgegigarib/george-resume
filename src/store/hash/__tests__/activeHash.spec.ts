import { describe, it, expect } from 'vitest'
import activeHashReducer, { setActiveHash, selectActiveHash } from '@/store/hash/activeHashSlice'
import { Sections } from '@/app/layout/types/NavBarTypes'
import { StoreState } from '@/store'

describe('activeHashSlice', () => {
  it('should return the initial state', () => {
    const initialState = { activeHash: Sections.Me }
    const action = { type: 'unknown' }
    expect(activeHashReducer(undefined, action)).toEqual(initialState)
  })

  it('should handle setActiveHash', () => {
    const previousState = { activeHash: Sections.Me }
    const newHash = '#newSection'
    const action = setActiveHash(newHash)

    const newState = activeHashReducer(previousState, action)

    expect(newState.activeHash).toBe(newHash)
  })

  it('should select activeHash from the state', () => {
    const state: Partial<StoreState> = {
      hash: {
        activeHash: '#aboutMe',
      },
    }

    const selectedHash = selectActiveHash(state as StoreState)

    expect(selectedHash).toBe('#aboutMe')
  })
})

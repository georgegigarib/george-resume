import { describe, it, expect } from 'vitest'
import modalReducer, { setProjectModalState, setTemplateModalState, ModalState } from '../modalStatus'

describe('modalStatus slice', () => {
  it('should handle initial state', () => {
    const initialState: ModalState = {
      isProjectModalOpen: false,
      isTemplatesModalOpen: false,
    }
    const state = modalReducer(undefined, { type: 'unknown' })
    expect(state).toEqual(initialState)
  })

  it('should handle setProjectModalState', () => {
    const initialState: ModalState = {
      isProjectModalOpen: false,
      isTemplatesModalOpen: false,
    }
    const action = setProjectModalState(true)
    const state = modalReducer(initialState, action)
    expect(state.isProjectModalOpen).toBe(true)
    expect(state.isTemplatesModalOpen).toBe(false)

    const actionFalse = setProjectModalState(false)
    const stateFalse = modalReducer(state, actionFalse)
    expect(stateFalse.isProjectModalOpen).toBe(false)
    expect(stateFalse.isTemplatesModalOpen).toBe(false)
  })

  it('should handle setTemplateModalState', () => {
    const initialState: ModalState = {
      isProjectModalOpen: false,
      isTemplatesModalOpen: false,
    }
    const action = setTemplateModalState(true)
    const state = modalReducer(initialState, action)
    expect(state.isTemplatesModalOpen).toBe(true)
    expect(state.isProjectModalOpen).toBe(false)

    const actionFalse = setTemplateModalState(false)
    const stateFalse = modalReducer(state, actionFalse)
    expect(stateFalse.isTemplatesModalOpen).toBe(false)
    expect(stateFalse.isProjectModalOpen).toBe(false)
  })
})

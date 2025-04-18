import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
  isProjectModalOpen: boolean
  isTemplatesModalOpen: boolean
  isContactModalOpen: boolean
}

const initialState: ModalState = {
  isProjectModalOpen: false,
  isTemplatesModalOpen: false,
  isContactModalOpen: false,
}

const modalSlice = createSlice({
  name: 'modalStatus',
  initialState,
  reducers: {
    setProjectModalState(state, action: PayloadAction<boolean>) {
      state.isProjectModalOpen = action.payload
    },
    setTemplateModalState(state, action: PayloadAction<boolean>) {
      state.isTemplatesModalOpen = action.payload
    },
    setContactModalState(state, action: PayloadAction<boolean>) {
      state.isContactModalOpen = action.payload
    },
  },
})

export const { setProjectModalState, setTemplateModalState, setContactModalState } = modalSlice.actions

export default modalSlice.reducer

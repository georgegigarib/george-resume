import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
  isProjectModalOpen: boolean
  isTemplatesModalOpen: boolean
}

const initialState: ModalState = {
  isProjectModalOpen: false,
  isTemplatesModalOpen: false,
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
  },
})

export const { setProjectModalState, setTemplateModalState } = modalSlice.actions

export default modalSlice.reducer

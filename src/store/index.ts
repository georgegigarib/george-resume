import { configureStore } from '@reduxjs/toolkit'
import activeHashReducer, { ActiveHashState } from '@/store/hash/activeHashSlice'
import themeSliceReducer, { ThemeState } from '@/store/theme/themeStatus.ts'
import ModalSliceReducer, { ModalState } from './modal/modalStatus'

export interface StoreState {
  hash: ActiveHashState
  darkTheme: ThemeState
  modalStatus: ModalState
}

const store = configureStore({
  reducer: {
    hash: activeHashReducer,
    darkTheme: themeSliceReducer,
    modalStatus: ModalSliceReducer,
  },
})

export type AppDispatch = typeof store.dispatch

export default store

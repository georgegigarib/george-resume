import { configureStore } from '@reduxjs/toolkit'
import activeHashReducer, { ActiveHashState } from '@/store/hash/activeHashSlice'
import themeSliceReducer, { ThemeState } from '@/store/theme/themeStatus.ts'

export interface StoreState {
  hash: ActiveHashState
  darkTheme: ThemeState
}

const store = configureStore({
  reducer: {
    hash: activeHashReducer,
    darkTheme: themeSliceReducer,
  },
})

export type AppDispatch = typeof store.dispatch

export default store

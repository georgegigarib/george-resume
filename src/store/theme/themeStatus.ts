import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setTheme } from '@/utils/setTheme.ts'

export interface ThemeState {
  isDarkThemeEnabled: boolean
}

const initialState: ThemeState = {
  isDarkThemeEnabled: localStorage.getItem('darkMode') === 'true',
}

const themeSlice = createSlice({
  name: 'themeStatus',
  initialState,
  reducers: {
    setDarkTheme(state, action: PayloadAction<boolean>) {
      state.isDarkThemeEnabled = action.payload
      localStorage.setItem('darkMode', action.payload.toString())
      setTheme(action.payload)
    },
  },
})

export const { setDarkTheme } = themeSlice.actions

export default themeSlice.reducer

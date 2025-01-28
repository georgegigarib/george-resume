import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Sections } from '@/app/layout/navbarTypes'

export interface ActiveHashState {
  activeHash: string
}

export interface HashAction {
  type: string
  payload: string
}

const initialState: ActiveHashState = { activeHash: Sections.Me }

const activeHashSlice = createSlice({
  name: 'activeHash',
  initialState,
  reducers: {
    setActiveHash: (state, action: PayloadAction<string>) => {
      state.activeHash = action.payload
    },
  },
})

export const selectActiveHash = (state: { hash: ActiveHashState }) => state.hash.activeHash

export const { setActiveHash } = activeHashSlice.actions

export default activeHashSlice.reducer

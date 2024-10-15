import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  activeHash: '',
};

const hashSlice = createSlice({
  name: 'hash',
  initialState,
  reducers: {
    setActiveHash: (state, action) => {
      state.activeHash = action.payload;
    },
  },
});

export const { setActiveHash } = hashSlice.actions;

const store = configureStore({
  reducer: {
    hash: hashSlice.reducer,
  },
});

export default store;

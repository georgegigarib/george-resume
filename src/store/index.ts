import { configureStore } from '@reduxjs/toolkit';
import activeHashReducer, { ActiveHashState } from '@/store/hash/activeHashSlice';

export interface RootState {
  hash: ActiveHashState;
}

const store = configureStore({
  reducer: {
    hash: activeHashReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;

import { setActiveHash } from '@/store/hash/activeHashSlice';
import { Sections } from '@/app/layout/navbarTypes';
import { describe, beforeEach, it, expect } from 'vitest';
import store from '@/store/index';
import { ActiveHashState } from '@/store/hash/activeHashSlice'; 

describe('index store', () => {
  let initialState: ActiveHashState;

  beforeEach(() => {
    initialState = store.getState().hash;
  });

  it('should have activeHash reducer in the store', () => {
    expect(initialState).toBeDefined();
    expect(initialState.activeHash).toBeDefined();
    expect(initialState.activeHash).toEqual(Sections.Me);
  });

  it('should handle setActiveHash', () => {
    const newHash = Sections.Music;

    store.dispatch(setActiveHash(newHash));

    expect(store.getState().hash.activeHash).toEqual(newHash);
  });

  it('should maintain the state after an invalid action type', () => {
    const previousState = store.getState().hash;

    store.dispatch({ type: 'INVALID_ACTION' });

    expect(store.getState().hash).toEqual(previousState);
  });
});

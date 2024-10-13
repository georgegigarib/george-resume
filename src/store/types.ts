export interface RootState {
    hash: {
      activeHash: string;
    };
  }
  
  export interface HashAction {
    type: string;
    payload: string;
  }
  
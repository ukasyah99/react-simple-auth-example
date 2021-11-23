import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from 'src/types';

interface SetAuthAction {
  payload: AuthState;
}

const initialState: AuthState = {
  loading: true,
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: SetAuthAction) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAuth } = slice.actions;

export default slice.reducer;

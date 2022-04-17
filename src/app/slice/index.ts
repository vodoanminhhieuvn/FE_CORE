import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { Token } from 'types/Auth';
import { sessionSaga } from './saga';
import { SessionState } from './types';

export const initialState: SessionState = {
  loading: true,
  accessToken: {} as Token,
  isAuthenticated: false,
  redirectPath: '/dashboard',
};

const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    checkRefreshToken(state) {
      state.loading = true;
    },
    updateAccessToken(state, action: PayloadAction<Token>) {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    updateRedirectPath(state, action: PayloadAction<string>) {
      state.redirectPath = action.payload;
    },
  },
});

export const { actions: sessionActions, reducer } = slice;

export const useSessionSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: sessionSaga });
  return { actions: slice.actions };
};

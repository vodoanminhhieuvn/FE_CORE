import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { access } from 'fs';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { AuthResponseItem, Token } from 'types/Auth';
import { authFormSaga } from './saga';
import { AuthErrorType, AuthFormState } from './types';

export const initialState: AuthFormState = {
  username: '',
  email: '',
  password: '',
  rePassword: '',
  token: {} as Token,
  refreshToken: {} as Token,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    changeUserName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    changeRePassword(state, action: PayloadAction<string>) {
      state.rePassword = action.payload;
    },
    loadToken(state) {
      state.loading = true;
      state.error = null;
      state.token = {} as Token;
      state.refreshToken = {} as Token;
    },
    tokenLoaded(state, action: PayloadAction<AuthResponseItem>) {
      state.loading = false;
      state.token = action.payload.tokens.access;
      state.refreshToken = action.payload.tokens.refresh;
      console.log(state.token);
    },
    authError(state, action: PayloadAction<AuthErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: authFormActions, reducer } = slice;

export const useAuthFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authFormSaga });
  return { actions: slice.actions };
};

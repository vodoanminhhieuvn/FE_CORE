import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { authFormSaga } from './saga';
import { AuthErrorType, AuthFormState } from './types';

export const initialState: AuthFormState = {
  username: '',
  email: '',
  password: '',
  rePassword: '',
  token: '',
  refreshToken: '',
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
      state.token = '';
      state.refreshToken = '';
    },
    tokenLoaded(state, action: PayloadAction<AuthResponseItem>) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.loading = false;
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
};

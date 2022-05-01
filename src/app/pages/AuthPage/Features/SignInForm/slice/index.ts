import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';
import { SignInState } from './types';

export const initialState: SignInState = {
  email: '',
  password: '',
  loading: false,
};

const slice = createSlice({
  name: 'signInForm',
  initialState,
  reducers: {
    onEmailChange(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    onPasswordChange(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    clearSignInForm(state) {
      state.email = state.password = '';
    },
    signIn(state) {
      state.loading = true;
    },
  },
});

export const { actions: signInActions, reducer } = slice;

export const useSignInFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });

  return { actions: slice.actions };
};

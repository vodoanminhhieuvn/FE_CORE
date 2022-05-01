import { createSlice } from '@reduxjs/toolkit';
import { SignUpState } from './types';

export const initialState: SignUpState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  loading: false,
};

const slice = createSlice({
  name: ' signUpForm',
  initialState,
  reducers: {},
});

export const { actions: SignUpFormActions, reducer } = slice;

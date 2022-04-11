import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.authForm || initialState;

export const selectUsername = createSelector(
  [selectDomain],
  authFormState => authFormState.username,
);

export const selectEmail = createSelector(
  [selectDomain],
  authFormState => authFormState.email,
);

export const selectPassword = createSelector(
  [selectDomain],
  authFormState => authFormState.password,
);

export const selectRePassword = createSelector(
  [selectDomain],
  authFormState => authFormState.rePassword,
);

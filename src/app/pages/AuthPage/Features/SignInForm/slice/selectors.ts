import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSignInDomain = (state: RootState) => state.signIn || initialState;

export const selectSignInEmail = createSelector(
  selectSignInDomain,
  signInState => signInState.email,
);

export const selectSignInPassword = createSelector(
  selectSignInDomain,
  signInState => signInState.password,
);

export const selectSignInLoading = createSelector(
  selectSignInDomain,
  signInState => signInState.loading,
);

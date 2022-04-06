import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types/RootState';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.session || initialState;

export const selectLoading = createSelector(
  selectDomain,
  sessionState => sessionState.loading,
);

export const selectAccessToken = createSelector(
  selectDomain,
  sessionState => sessionState.accessToken,
);

export const selectIsAuthenticated = createSelector(
  selectDomain,
  sessionState => sessionState.isAuthenticated,
);

export const selectRedirectPath = createSelector(
  selectDomain,
  sessionState => sessionState.redirectPath,
);

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.chat || initialState;

export const selectMessages = createSelector(
  [selectDomain],
  chatState => chatState.messages,
);

export const selectUserMessage = createSelector(
  [selectDomain],
  chatState => chatState.userMessage,
);

export const selectLoading = createSelector(
  [selectDomain],
  chatState => chatState.chatLoading,
);

import { useInjectReducer } from 'utils/redux-injectors';
import { ChatState } from './types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { chatFeedSaga } from './saga';
import { useInjectSaga } from 'redux-injectors';
import { MessageResponseItem } from 'types/Chat';

export const initialState: ChatState = {
  messages: [],
  loading: false,
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    loadMessages(state) {
      state.loading = true;
    },
    messagesLoaded(state, action: PayloadAction<MessageResponseItem[]>) {
      state.messages = action.payload;
    },
  },
});

export const { actions: chatFeedActions, reducer } = slice;

export const useChatSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: chatFeedSaga });
  return { actions: slice.actions };
};

import { useInjectReducer } from 'utils/redux-injectors';
import { ChatState } from './types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { chatFeedSaga } from './saga';
import { useInjectSaga } from 'redux-injectors';
import { MessageResponseItem } from 'types/Chat';

export const initialState: ChatState = {
  messages: [],
  userMessage: '',
  chatLoading: false,
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeUserMessage(state, action: PayloadAction<string>) {
      state.userMessage = action.payload;
    },
    loadMessages(state) {
      state.chatLoading = true;
    },
    messagesLoaded(state, action: PayloadAction<MessageResponseItem[]>) {
      state.messages.push(...action.payload);
    },
    submitUserMessage(state) {
      state.chatLoading = true;
    },
    chatbotRespondSuccessfully(state) {
      state.chatLoading = false;
    },
  },
});

export const { actions: chatFeedActions, reducer } = slice;

export const useChatSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: chatFeedSaga });
  return { actions: slice.actions };
};

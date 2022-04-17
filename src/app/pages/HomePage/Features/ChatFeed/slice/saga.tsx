import { select, takeEvery } from 'redux-saga/effects';
import { MessageResponseItem } from 'types/Chat';
import { chatFeedActions } from '.';
import { selectMessages } from './selectors';

export function* getChatMessage() {
  const messages: MessageResponseItem = yield select(selectMessages);
  console.log(messages);
}

export function* chatFeedSaga() {
  yield* [takeEvery(chatFeedActions.loadMessages.type, getChatMessage)];
}

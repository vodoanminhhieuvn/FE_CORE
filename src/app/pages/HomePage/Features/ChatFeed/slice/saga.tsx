import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { MessageResponseItem } from 'types/Chat';
import { request, RequestMethod, requestOption } from 'utils/request';
import { chatFeedActions } from '.';
import { selectMessages, selectUserMessage } from './selectors';

export function* getChatMessage() {
  const messages: MessageResponseItem = yield select(selectMessages);
  console.log(messages);
}

export function* getChatbotResponse() {
  const userMessage: string = yield select(selectUserMessage);
  yield put(
    chatFeedActions.messagesLoaded([
      {
        recipient_id: 'chatbot',
        text: userMessage,
      },
    ]),
  );

  const requestUrl = 'http://localhost:5005/webhooks/rest/webhook';

  try {
    const chatbotResponse: MessageResponseItem[] = yield call(
      request,
      requestUrl,
      requestOption(RequestMethod.POST, {
        sender: 'user',
        message: userMessage,
      }),
    );

    yield* [
      put(chatFeedActions.messagesLoaded(chatbotResponse)),
      put(chatFeedActions.chatbotRespondSuccessfully()),
      put(chatFeedActions.changeUserMessage('')),
    ];
  } catch (error) {
    // TODO Handle error here
  }
}

export function* chatFeedSaga() {
  yield* [
    takeEvery(chatFeedActions.loadMessages.type, getChatMessage),
    takeLatest(chatFeedActions.submitUserMessage, getChatbotResponse),
  ];
}

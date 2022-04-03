import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import {
  selectUsername,
  selectEmail,
  selectPassword,
  selectRePassword,
} from './selectors';
import { authFormActions as actions } from '.';
import { AuthErrorType } from './types';

export function* getUserToken() {
  yield delay(500);

  const email: string = yield select(selectEmail);
  const password: string = yield select(selectPassword);

  if (email.length === 0) {
    yield put(actions.authError(AuthErrorType.MISSING_EMAIL));
  }

  if (password.length === 0) {
    yield put(actions.authError(AuthErrorType.MISSING_PASSWORD));
  }

  // const requestURL = 'String';

  try {
    console.log(email);
    console.log(password);
  } catch {}
}

export function* registerUser() {}

export function* authFormSaga() {
  yield [takeLatest(actions.loadToken.type, getUserToken)];
}

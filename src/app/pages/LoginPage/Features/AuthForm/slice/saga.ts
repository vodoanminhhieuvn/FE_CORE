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
import { AuthResponseItem } from 'types/Auth';

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

  const requestURL = 'http://localhost:9000/v1/auth/login';

  try {
    const authInfos: AuthResponseItem = yield call(request, requestURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    yield put(actions.tokenLoaded(authInfos));
  } catch (err: any) {
    yield put(actions.authError(AuthErrorType.WRONG_EMAIL_OR_PASSWORD));
  }
}

export function* registerUser() {}

export function* authFormSaga() {
  yield* [takeLatest(actions.loadToken.type, getUserToken)];
}

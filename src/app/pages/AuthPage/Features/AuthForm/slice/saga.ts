import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request, RequestMethod, requestOption } from 'utils/request';
import {
  selectUsername,
  selectEmail,
  selectPassword,
  selectRePassword,
} from './selectors';
import { authFormActions as actions } from '.';
import { sessionActions } from '../../../../../slice';
import { AuthErrorType } from './types';
import { AuthResponseItem } from 'types/Auth';
import { LocalStorageType } from 'enum/LocalStorageType';

export function* getUserToken() {
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
    const authInfos: AuthResponseItem = yield call(
      request,
      requestURL,
      requestOption(RequestMethod.POST, { email: email, password: password }),
    );

    localStorage.setItem(
      LocalStorageType.REFRESH_TOKEN,
      JSON.stringify(authInfos.tokens.refresh),
    );

    yield put(sessionActions.updateAccessToken(authInfos.tokens.access));
    yield put(actions.tokenLoaded(authInfos));
  } catch (err: any) {
    yield put(actions.authError(AuthErrorType.WRONG_EMAIL_OR_PASSWORD));
  }
}

export function* registerUser() {}

export function* authFormSaga() {
  yield* [takeLatest(actions.loadToken.type, getUserToken)];
}

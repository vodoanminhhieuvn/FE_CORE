import { LocalStorageType } from 'enum/LocalStorageType';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Tokens } from 'types/Auth';
import { checkAuthorization } from 'utils/checkStore';
import { request, RequestMethod, requestOption } from 'utils/request';
import { sessionActions } from '.';

export function* checkRefreshToken() {
  const { isValid, refreshToken } = checkAuthorization();

  if (!isValid) {
    yield put(sessionActions.setLoading(false));
    return;
  }

  const requestURL = 'http://localhost:9000/v1/auth/refresh-tokens';

  try {
    const tokens: Tokens = yield call(
      request,
      requestURL,
      requestOption(RequestMethod.POST, {
        refreshToken: refreshToken.token,
      }),
    );

    localStorage.setItem(
      LocalStorageType.REFRESH_TOKEN,
      JSON.stringify(tokens.refresh),
    );

    yield put(sessionActions.updateAccessToken(tokens.access));
    yield put(sessionActions.setLoading(false));
  } catch (err: any) {
    yield put(sessionActions.setLoading(false));
  }
}

export function* sessionSaga() {
  yield* [takeLatest(sessionActions.checkRefreshToken.type, checkRefreshToken)];
}

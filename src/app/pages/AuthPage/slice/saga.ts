import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request, RequestMethod, requestOption } from 'utils/request';
import { authFormActions as actions } from '.';
import { sessionActions } from '../../../slice';
import { AuthErrorType } from './types';
import { AuthResponseItem } from 'types/Auth';
import { LocalStorageType } from 'enum/LocalStorageType';

export function* getUserToken() {}

export function* registerUser() {}

export function* authFormSaga() {
  yield* [takeLatest(actions.loadToken.type, getUserToken)];
}

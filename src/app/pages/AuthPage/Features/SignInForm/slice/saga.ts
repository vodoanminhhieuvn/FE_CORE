import { select } from 'redux-saga/effects';
import { selectSignInEmail, selectSignInPassword } from './selectors';

export function* signIn() {
  const email: string = yield select(selectSignInEmail);
  const password: string = yield select(selectSignInPassword);

  if (!!email) {
    return;
  }
  if (!!password) {
    return;
  }

  // try {

  // } catch (err: any) {

  // }
}

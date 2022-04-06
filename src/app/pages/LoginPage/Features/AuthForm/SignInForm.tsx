import {
  selectAccessToken,
  selectIsAuthenticated,
  selectRedirectPath,
} from 'app/slice/selectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  FormCenter,
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormFieldButton,
} from '../../components/FormComponent';
import { useAuthFormSlice } from './slice';
import { selectEmail, selectPassword } from './slice/selectors';

export default function SignInForm() {
  const { actions } = useAuthFormSlice();
  const navigate = useNavigate();

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  // const accessToken = useSelector(selectAccessToken);
  const redirectPath = useSelector(selectRedirectPath);

  const dispatch = useDispatch();

  const useEffectOnAuthenticated = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, [isAuthenticated]);
  };

  useEffectOnAuthenticated(() => {
    if (isAuthenticated) {
      navigate(redirectPath);
    }
  });

  const onChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeEmail(evt.currentTarget.value));
  };

  const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changePassword(evt.currentTarget.value));
  };

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    if (evt !== undefined && evt.preventDefault) {
      dispatch(actions.loadToken());
      evt.preventDefault();
    }
  };

  return (
    <FormCenter>
      <form className="formfields" onSubmit={onSubmitForm}>
        <FormField>
          <FormFieldLabel htmlFor="email">E-Mail Address</FormFieldLabel>
          <FormFieldInput
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
        </FormField>
        <FormField>
          <FormFieldLabel htmlFor="password">Password</FormFieldLabel>
          <FormFieldInput
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </FormField>

        <FormField>
          <FormFieldButton type="submit">Sign In</FormFieldButton>{' '}
          <Link to={'sign-up'}>Create an account</Link>
        </FormField>
      </form>
    </FormCenter>
  );
}

import {
  selectAccessToken,
  selectIsAuthenticated,
  selectRedirectPath,
} from 'app/slice/selectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthFormSlice } from './slice';
import { selectEmail, selectPassword } from './slice/selectors';

import { Form, Card, FormCheck } from '@themesberg/react-bootstrap';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import AuthFormCenterText from '../../components/AuthFormCenterText';
import { AuthForm, AuthFormGroup } from '../../components/AuthForm';
import PrimaryTextButton from 'app/components/PrimaryTextButton';

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
    <>
      <AuthFormCenterText text="Sign in to our platform"></AuthFormCenterText>
      <AuthForm onSubmit={onSubmitForm}>
        <AuthFormGroup
          formLabel="Your Email"
          icon={faEnvelope}
          inputType="email"
          placeholder="example@company.com"
          onChange={onChangeEmail}
        />

        <AuthFormGroup
          formLabel="Your Password"
          icon={faUnlockAlt}
          inputType="password"
          placeholder="Password"
          onChange={onChangePassword}
        />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <Form.Check type="checkbox">
            <FormCheck.Input id="defaultCheck5" className="me-2" />
            <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">
              Remember me
            </FormCheck.Label>
          </Form.Check>
          <Card.Link className="small text-end">Lost password?</Card.Link>
        </div>

        <PrimaryTextButton type="submit" text="Sign in" />
      </AuthForm>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <span className="fw-normal">
          Not registered?
          <Card.Link as={Link} to="/sign-up" className="fw-bold">
            {` Create account `}
          </Card.Link>
        </span>
      </div>
    </>
  );
}

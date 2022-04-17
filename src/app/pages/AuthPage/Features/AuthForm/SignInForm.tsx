import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuthFormSlice } from './slice';

import { Form, Card, FormCheck } from '@themesberg/react-bootstrap';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import AuthFormCenterText from '../../components/AuthFormCenterText';
import { AuthForm, AuthFormGroup } from '../../components/AuthForm';
import PrimaryTextButton from 'app/components/PrimaryTextButton';

export default function SignInForm() {
  const { actions } = useAuthFormSlice();

  const dispatch = useDispatch();

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
          <Card.Link as={Link} to={'/auth/sign-up'} className="fw-bold">
            {` Create account `}
          </Card.Link>
        </span>
      </div>
    </>
  );
}

import React from 'react';
import MainPage from 'app/components/MainPage';
import styles from '../authFeatures.module.scss';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { Form, FormCheck, Card } from '@themesberg/react-bootstrap';
import { AuthForm, AuthFormGroup } from '../../components/AuthForm';
import PrimaryTextButton from 'app/components/ButtonPack/PrimaryTextButton/PrimaryTextButton';
import { useDispatch } from 'react-redux';
import { useSignInFormSlice } from './slice';

export default function SignInForm() {
  const { actions } = useSignInFormSlice();

  const dispatch = useDispatch();

  const onChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.onEmailChange(evt.currentTarget.value));
  };

  const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.onPasswordChange(evt.currentTarget.value));
  };

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    if (evt !== undefined && evt.preventDefault) {
      dispatch(actions.signIn());
      evt.preventDefault();
    }
  };

  return (
    <>
      <MainPage
        displayBrand={true}
        heading1="Learn together"
        heading2="Smart together"
      />

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
    </>
  );
}

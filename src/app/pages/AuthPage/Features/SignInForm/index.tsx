import React from 'react';
import { useDispatch } from 'react-redux';
import { useSignInFormSlice } from './slice';
import InputField from 'app/components/Form/InputField';
import InputPasswordField from 'app/components/Form/InputPasswordField';
import SubmitButton from 'app/components/ButtonPack/SubmitButton';
import styles from './signInForm.module.scss';
import SingleCheck from 'app/components/Form/SingleCheck';

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
      <span className={styles.title}>Sign in to your account</span>

      <form onSubmit={onSubmitForm}>
        <InputField
          onChange={onChangeEmail}
          leadingLabel="Email"
          inputType="email"
        />
        <InputPasswordField
          onChange={onChangePassword}
          forgotPasswordUrl="/forgot-password"
        />
        <SingleCheck />
        <SubmitButton />
      </form>
    </>
  );
}

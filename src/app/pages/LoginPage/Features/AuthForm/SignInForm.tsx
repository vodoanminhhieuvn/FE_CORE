import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();

  const onChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeEmail(evt.currentTarget.value));
  };

  const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changePassword(evt.currentTarget.value));
  };

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    console.log('Input here', email, password);
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

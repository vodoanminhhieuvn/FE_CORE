import React from 'react';
import {
  FormCenter,
  FormField,
  FormFieldButton,
  FormFieldInput,
  FormFieldLabel,
} from './components/FormComponent';
import { Link } from 'react-router-dom';

export default function SignInForm() {
  return (
    <FormCenter>
      <form className="formfields">
        <FormField>
          <FormFieldLabel htmlFor="email">E-Mail Address</FormFieldLabel>
          <FormFieldInput
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </FormField>
        <FormField>
          <FormFieldLabel htmlFor="password">Password</FormFieldLabel>
          <FormFieldInput
            type="password"
            placeholder="Enter your password"
            name="password"
          />
        </FormField>

        <FormField>
          <FormFieldButton>Sign In</FormFieldButton>{' '}
          <Link to={'sign-up'}>Create an account</Link>
        </FormField>
      </form>
    </FormCenter>
  );
}

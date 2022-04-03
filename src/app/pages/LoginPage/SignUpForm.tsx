import React from 'react';
import { Link } from 'react-router-dom';
import {
  FormCenter,
  FormField,
  FormFieldButton,
  FormFieldInput,
  FormFieldLabel,
} from './components/FormComponent';

export default function SignUpForm() {
  return (
    <FormCenter>
      <form className="formFields">
        <FormField>
          <FormFieldLabel>Full Name</FormFieldLabel>
          <FormFieldInput
            type="text"
            placeholder="Enter your full name"
            name="name"
          />
        </FormField>
        <FormField>
          <FormFieldLabel>Password</FormFieldLabel>
          <FormFieldInput
            type="password"
            placeholder="Enter your password"
            name="password"
          />
        </FormField>
        <FormField>
          <FormFieldLabel>E-mail Address</FormFieldLabel>
          <FormFieldInput
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </FormField>

        <FormField>
          <FormFieldButton>Sig Up</FormFieldButton>
          <Link to={'/sign-in'}>I'm already a member</Link>
        </FormField>
      </form>
    </FormCenter>
  );
}

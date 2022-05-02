import React from 'react';
import InputField from '../InputField';
import InputPasswordField from '../InputPasswordField';
import styles from './authForm.module.scss';

export default function AuthForm() {
  return (
    <form>
      <InputField leadingLabel="email" inputType="email" />
      <InputPasswordField forgotPasswordUrl="/password" />
    </form>
  );
}

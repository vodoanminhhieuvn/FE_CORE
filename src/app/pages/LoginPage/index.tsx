import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { LoginPageWrapper } from './components/LoginPageWrapper';
import { LoginPageLeftSide } from './components/LoginPageLeftSide';
import {
  LoginPageForm,
  PageSwitcher,
  PageSwitcherItem,
} from './components/LoginPageForm';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="Login page" content="LoginPage" />
      </Helmet>

      <LoginPageWrapper>
        <LoginPageLeftSide />
        <LoginPageForm>
          <PageSwitcher>
            <PageSwitcherItem to="sign-in">Sign In</PageSwitcherItem>
            <PageSwitcherItem to="sign-up">Sign Up</PageSwitcherItem>
          </PageSwitcher>

          <Outlet />
        </LoginPageForm>
      </LoginPageWrapper>
    </>
  );
}

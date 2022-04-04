/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { LoginPage } from './pages/LoginPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { SignUpForm, SignInForm } from './pages/LoginPage/Features/AuthForm';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
        <Route
          path={process.env.PUBLIC_URL + '/auth/*'}
          element={<LoginPage />}
        >
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="*" element={<Navigate to="sign-in" replace />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

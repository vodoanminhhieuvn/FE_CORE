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

import { LoginPage } from './pages/AuthPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { SignUpForm, SignInForm } from './pages/AuthPage/Features/AuthForm';
import { useSessionSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuthenticated,
  selectLoading,
  selectRedirectPath,
} from './slice/selectors';
import ProtectedRoute, {
  ProtectedRouteProps,
} from './components/Router/ProtectedRoutes';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage/Loadable';
import Preloader from './components/Preloader';
import ChatFeedPage from './pages/HomePage/Features/ChatFeed';

export function App() {
  const { i18n } = useTranslation();
  const { actions: sessionActions } = useSessionSlice();
  const dispatch = useDispatch();

  // const isAuthenticated = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectLoading);
  // const redirectPath = useSelector(selectRedirectPath);

  // const setRedirectPath = (path: string) => {
  //   // updateSessionContext({...sessionContext, redirectPath: path});
  //   dispatch(sessionActions.updateRedirectPath(path));
  // };

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  // const protectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  //   isAuthenticated: isAuthenticated,
  //   authenticationPath: '/auth',
  //   redirectPath: redirectPath,
  //   setRedirectPath: setRedirectPath,
  // };

  useEffectOnMount(() => {
    console.log(loading);
    dispatch(sessionActions.checkRefreshToken());
  });

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Preloader show={loading} />

      <Routes>
        <Route
          path={process.env.PUBLIC_URL + '/dashboard'}
          element={<HomePage />}
        >
          <Route path="chat-feed" element={<ChatFeedPage />} />
        </Route>
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
    </BrowserRouter>
  );
}

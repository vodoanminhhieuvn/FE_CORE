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

import { LoginPage } from './pages/LoginPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { SignUpForm, SignInForm } from './pages/LoginPage/Features/AuthForm';
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

export function App() {
  const { i18n } = useTranslation();
  const { actions: sessionActions } = useSessionSlice();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectLoading);
  const redirectPath = useSelector(selectRedirectPath);

  const setRedirectPath = (path: string) => {
    // updateSessionContext({...sessionContext, redirectPath: path});
    dispatch(sessionActions.updateRedirectPath(path));
  };

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  const protectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: isAuthenticated,
    authenticationPath: '/auth',
    redirectPath: redirectPath,
    setRedirectPath: setRedirectPath,
  };

  useEffectOnMount(() => {
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

      {loading ? (
        <br />
      ) : (
        <Routes>
          <Route
            path={process.env.PUBLIC_URL + '/'}
            element={
              <Navigate to="/auth/sign-in" replace />
              // <ProtectedRoute
              //   {...protectedRouteProps}
              //   outlet={<NotFoundPage />}
              // />
            }
          />
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
      )}
    </BrowserRouter>
  );
}

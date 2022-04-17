import React, { useEffect } from 'react';
import { Container } from '@themesberg/react-bootstrap';
import { useNavigate } from 'react-router-dom';

import BgImage from '../../../assets/img/illustrations/signin.svg';
import { AuthWrapper } from './components/AuthWrapper';
import { Outlet } from 'react-router-dom';
import { selectIsAuthenticated, selectRedirectPath } from 'app/slice/selectors';
import { useSelector } from 'react-redux';

export function AuthPage() {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  // const accessToken = useSelector(selectAccessToken);
  const redirectPath = useSelector(selectRedirectPath);

  const useEffectOnAuthenticated = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, [isAuthenticated]);
  };

  useEffectOnAuthenticated(() => {
    console.log('Hello Auth Form');
    if (isAuthenticated) {
      navigate(redirectPath);
    }
  });

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <AuthWrapper bgImage={BgImage}>
            <Outlet />
          </AuthWrapper>
        </Container>
      </section>
    </main>
  );
}

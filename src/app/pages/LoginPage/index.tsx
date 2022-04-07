import React from 'react';
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from '@themesberg/react-bootstrap';
import { Link, Routes } from 'react-router-dom';
import {
  faFacebookF,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BgImage from '../../../assets/img/illustrations/signin.svg';
import { AuthWrapper } from './components/AuthWrapper';
import { Outlet } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';

// import { LoginPageWrapper } from './components/LoginPageWrapper';
// import { LoginPageLeftSide } from './components/LoginPageLeftSide';
// import {
//   LoginPageForm,
//   PageSwitcher,
//   PageSwitcherItem,
// } from './components/LoginPageForm';

export function AuthPage() {
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

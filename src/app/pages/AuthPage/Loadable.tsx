/**
 * Asynchronously loads the component for HomePage
 */

import Preloader from 'app/components/Preloader';
import * as React from 'react';
import { lazyLoad } from 'utils/loadable';

export const LoginPage = lazyLoad(
  () => import('./index'),
  module => module.AuthPage,
  {
    fallback: <Preloader show={true} />,
  },
);

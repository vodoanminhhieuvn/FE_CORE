/**
 * Asynchronously loads the component for HomePage
 */

import Preloader from 'app/components/Preloader';
import * as React from 'react';
import { lazyLoad } from 'utils/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  {
    fallback: <Preloader show={true} />,
  },
);

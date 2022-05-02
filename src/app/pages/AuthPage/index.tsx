import { AnimatedBackground } from 'app/components/AnimatedPack/AnimatedBackground';
import AuthFooter from 'app/components/Footer/AuthFooter';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChildComponent } from 'types/React';
import styles from './index.module.scss';

export function AuthLayout() {
  return (
    <div className={styles.auth_background}>
      <div className={styles.box_root}>
        <AnimatedBackground />
        <AuthFormContainer>
          <Outlet />
        </AuthFormContainer>
      </div>
    </div>
  );
}

function AuthFormContainer(props: { children: ChildComponent }) {
  return (
    <div className={styles.auth_form_container}>
      <div className={styles.header_container}>
        <h1>
          <a href="http://blog.stackfindover.com/" rel="dofollow">
            TompaBot
          </a>
        </h1>
      </div>
      {/* ------------------- */}
      <div className="formbg_outer">
        <div className={styles.form_background}>
          <div className={styles.form_inner}>
            <Outlet />
          </div>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
}

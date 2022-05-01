import { AnimatedBackground } from 'app/components/AnimatedPack/AnimatedBackground';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

export function AuthLayout() {
  return (
    <div className={styles.auth_background}>
      <div className={styles.box_root}>
        <AnimatedBackground />
        <Outlet />
      </div>
    </div>
    // <main className={styles.authContent}>
    //   <div className={styles.sideContent}>
    //     <Outlet />
    //   </div>
    // </main>
  );
}

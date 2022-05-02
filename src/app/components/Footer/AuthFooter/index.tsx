import React from 'react';
import styles from './authFooter.module.scss';

export default function AuthFooter() {
  return (
    <div className={styles.footer_link}>
      <span>
        Don't have an account? <a href="">Sign up</a>
      </span>
      <div className={styles.link_listing}>
        <span>
          <a href="#">© Stackfindover</a>
        </span>
        <span>
          <a href="#">Contact</a>
        </span>
        <span>
          <a href="#">Privacy & terms</a>
        </span>
      </div>
    </div>
  );
}

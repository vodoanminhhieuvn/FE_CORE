import React from 'react';
import styles from './singleCheck.module.scss';

export default function SingleCheck() {
  return (
    <div className={styles.check_field}>
      <input type="checkbox" name="checkbox" />
      <label>Stay signed in for a week</label>
    </div>
  );
}

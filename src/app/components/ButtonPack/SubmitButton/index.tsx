import React from 'react';
import styles from './submitButton.module.scss';

export default function SubmitButton() {
  return (
    <div className={styles.field}>
      <input type="submit" name="submit" value="Continue" />
    </div>
  );
}

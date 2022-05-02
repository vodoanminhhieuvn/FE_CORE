import React from 'react';
import { OnChangeEvent } from 'types/Event';
import styles from './inputPasswordField.module.scss';

export default function InputPasswordField(props: {
  forgotPasswordUrl: string;
  onChange?: (evt: OnChangeEvent) => void;
}) {
  return (
    <div className={styles.field}>
      <div className={styles.label_layout_grid}>
        <label>Password</label>
        <div className={styles.reset_password}>
          <a href={props.forgotPasswordUrl}>Forgot your password</a>
        </div>
      </div>
      <input onChange={props.onChange} type="password" name="password" />
    </div>
  );
}

import React from 'react';
import { OnChangeEvent } from 'types/Event';
import styles from './inputField.module.scss';

export default function InputField(props: {
  leadingLabel: string;
  inputType?: string;
  onChange?: (evt: OnChangeEvent) => void;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={props.leadingLabel}>{props.leadingLabel}</label>
      <input
        onChange={props.onChange}
        type={props.inputType ?? 'text'}
        name={props.inputType}
      />
    </div>
  );
}

import {
  faEnvelope,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, InputGroup } from '@themesberg/react-bootstrap';
import React, { ReactChild, ReactChildren } from 'react';

export function AuthForm(props: {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  onSubmit: (evt?: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Form className="mt-4" onSubmit={props.onSubmit}>
      {props.children}
    </Form>
  );
}
export function AuthFormGroup(props: {
  formLabel: string;
  icon: IconDefinition;
  inputType: string;
  placeholder: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Form.Group id="email" className="mb-4">
      <Form.Label>{props.formLabel}</Form.Label>
      <InputGroup>
        <InputGroup.Text>
          <FontAwesomeIcon icon={props.icon} />
        </InputGroup.Text>
        <Form.Control
          autoFocus
          required
          type={props.inputType}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </InputGroup>
    </Form.Group>
  );
}

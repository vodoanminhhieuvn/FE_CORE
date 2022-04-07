import { Button } from '@themesberg/react-bootstrap';
import React from 'react';

export default function PrimaryTextButton(props: {
  type: string;
  text: string;
  onClick?: (evt?: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Button variant="primary" type={props.type} className="w-100">
      {props.text}
    </Button>
  );
}

import { Row, Col } from '@themesberg/react-bootstrap';
import React, { ReactChild, ReactChildren } from 'react';

export function AuthWrapper(props: {
  bgImage: string;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}) {
  return (
    <Row
      className="justify-content-center form-bg-image"
      style={{
        backgroundImage: `url(${props.bgImage})`,
      }}
    >
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          {props.children}
        </div>
      </Col>
    </Row>
  );
}

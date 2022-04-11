import React from 'react';
import { Image } from '@themesberg/react-bootstrap';

import ReactLogo from '../../assets/img/technologies/react-logo-transparent.svg';

export default function Preloader(props: { show: boolean }) {
  return (
    <div
      className={`preloader bg-soft flex-column justify-content-center align-items-center ${
        props.show ? '' : 'show'
      }`}
    >
      <Image
        className="loader-element animate__animated animate__jackInTheBox"
        src={ReactLogo}
        height={40}
      />
    </div>
  );
}

import React from 'react';
import circle from '../assets/circle12.svg';
import styles from './MainPage.module.scss';

const MainPage = (props: {
  displayBrand: boolean;
  heading1: string;
  heading2: string;
}) => {
  let brand: JSX.Element = <span />;

  if (props.displayBrand) {
    brand = (
      <>
        <br />
        <span className={styles.heading3}>S-</span>
        <span className={styles.heading4}>HELP</span>
      </>
    );
  }

  return (
    <>
      <h1 className={styles.contentText}>
        <span className={styles.heading1}>{props.heading1}</span>
        <br />
        <span className={styles.heading2}>{props.heading2}</span>

        {brand}

        <div className="mainPageBack">
          {/* <img className="circle1" src={circle1} alt="circle1"/>
                        <img className="circle2" src={circle2} alt="circle2"/> */}
          <img className={styles.circle1} src={circle} alt={styles.circle2} />
        </div>
      </h1>
    </>
  );
};

export default MainPage;

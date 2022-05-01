import styles from './animatedBackground.module.scss';

import React from 'react';

export function AnimatedBackground() {
  return (
    <div className={styles.animated_background}>
      <div className={styles.animated_background_grid_container}>
        <BoxItem grid_area={{ gridArea: 'top / start / 8 / end' }} />
        <BoxItem
          grid_area={{ gridArea: '4 / 2 / auto / 5' }}
          boxBackground={styles.box_divider__light_all_2}
          animationType={`${styles.animationLeftRight} ${styles.tans3s}`}
        />
        <BoxItem
          grid_area={{ gridArea: '6 / start / auto / 2' }}
          boxBackground={styles.box_background__blue800}
          animationType={`${styles.animationLeftRight} ${styles.tans4s}`}
        />
        <BoxItem
          grid_area={{ gridArea: '7 / start / auto / 4' }}
          boxBackground={styles.box_background__blue}
          animationType={styles.animationLeftRight}
        />
        <BoxItem
          grid_area={{ gridArea: '8 / 4 / auto / 6' }}
          boxBackground={styles.box_background__gray100}
          animationType={`${styles.animationLeftRight} ${styles.tans3s}`}
        />
        <BoxItem
          grid_area={{ gridArea: '2 / 15 / auto / end' }}
          boxBackground={styles.box_background__cyan200}
          animationType={`${styles.animationRightLeft} ${styles.tans4s}`}
        />
        <BoxItem
          grid_area={{ gridArea: '3 / 14 / auto / end' }}
          boxBackground={styles.box_background__blue}
          animationType={styles.animationRightLeft}
        />
        <BoxItem
          grid_area={{ gridArea: '4 / 17 / auto / 20' }}
          boxBackground={styles.box_background__gray100}
          animationType={`${styles.animationRightLeft} ${styles.tans4s}`}
        />
        <BoxItem
          grid_area={{ gridArea: '5 / 14 / auto / 17' }}
          boxBackground={styles.box_divider__light_all_2}
          animationType={`${styles.animationRightLeft} ${styles.tans3s}`}
        />
      </div>
    </div>
  );
}

function BoxItem(props: {
  grid_area: React.CSSProperties;
  boxBackground?: string;
  animationType?: string;
}) {
  return (
    <div className={styles.box_item_container} style={props.grid_area}>
      <div
        className={`${styles.box_item} ${
          props.boxBackground ??
          'linear-gradient(white 0%, rgb(247, 250, 252) 33%)'
        } ${props.animationType ?? ''}`}
      />
    </div>
  );
}

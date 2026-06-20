'use client';

import React from 'react';
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          The <span className={styles.titleAccent}>Grand</span> Menu
        </h1>

        <div className={styles.flourish}>
          <span className={styles.flourishLine} />
          <span className={styles.flourishDiamond} />
          <span className={styles.flourishLine} />
        </div>

        <p className={styles.tagline}>Where Every Dish Tells a Story</p>
      </div>
    </section>
  );
}

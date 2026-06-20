'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  const scrollToMenu = () => {
    const el = document.getElementById('milk-shake-&-ice-cream') || document.querySelector('main section');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          The <span className={styles.titleAccent}>Grand</span> Menu
        </motion.h1>

        <motion.div
          className={styles.flourish}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <span className={styles.flourishLine} />
          <span className={styles.flourishDiamond} />
          <span className={styles.flourishLine} />
        </motion.div>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          Where Every Dish Tells a Story
        </motion.p>
      </div>
    </section>
  );
}

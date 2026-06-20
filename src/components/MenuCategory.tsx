'use client';

import React from 'react';
import styles from './MenuCategory.module.css';
import { MenuCategory as MenuCategoryType, MenuItem } from '../data/menu';
import MenuItemCard from './MenuItemCard';
import { motion } from 'framer-motion';

interface Props {
  category: MenuCategoryType;
  onItemClick: (item: MenuItem) => void;
}

export default function MenuCategory({ category, onItemClick }: Props) {
  return (
    <section className={styles.section} id={category.title.replace(/\s+/g, '-').toLowerCase()}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{category.title}</h2>
        </div>
        <div className={styles.divider}>
          <span className={styles.line}></span>
          <span className={styles.diamond}>◆</span>
          <span className={styles.line}></span>
        </div>
      </motion.div>
      <div className={styles.grid}>
        {category.items.map((item, idx) => (
          <MenuItemCard key={item.id} item={item} index={idx} onClick={onItemClick} />
        ))}
      </div>
    </section>
  );
}

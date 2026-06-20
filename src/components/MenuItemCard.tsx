'use client';

import React from 'react';
import styles from './MenuItemCard.module.css';
import { MenuItem } from '../data/menu';
import { motion } from 'framer-motion';

interface Props {
  item: MenuItem;
  index: number;
  onClick: (item: MenuItem) => void;
}

export default function MenuItemCard({ item, index, onClick }: Props) {
  return (
    <motion.div
      className={styles.card}
      onClick={() => onClick(item)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3), ease: 'easeOut' }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.imageUrl} alt={item.name} className={styles.image} loading="lazy" />
        
        {/* Veg/Non-Veg Indicator (Bottom Right) */}
        <div className={`${styles.badgeBottomRight} ${item.isVeg ? 'badge-veg' : 'badge-nonveg'}`} />
      </div>

      <div className={styles.content}>
        {/* Status Badges inside content */}
        <div className={styles.badgesContainer}>
          {item.isPopular && (
            <div className={`badge badge-popular`}>
              Best Seller
            </div>
          )}
          {item.isChefSpecial && !item.isPopular && (
            <div className={`badge badge-chef`}>
              Chef&apos;s Choice
            </div>
          )}
          {!item.isPopular && !item.isChefSpecial && item.tag && (
            <div className={`badge badge-tag`}>
              {item.tag}
            </div>
          )}
        </div>
        <div className={styles.headerGroup}>
          <h3 className={styles.title}>{item.name}</h3>
          <span className={styles.price}>₹{item.price}</span>
        </div>
        
        {item.description && (
          <p className={styles.description}>{item.description}</p>
        )}
        
        <div className={styles.signatureElement}>
          <span className={styles.signatureMotif}>❦</span>
        </div>
      </div>
    </motion.div>
  );
}

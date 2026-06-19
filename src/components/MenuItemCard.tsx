import React from 'react';
import styles from './MenuItemCard.module.css';
import { MenuItem } from '../data/menu';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface Props {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export default function MenuItemCard({ item, onClick }: Props) {
  return (
    <motion.div 
      className={styles.card}
      onClick={() => onClick(item)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.imageUrl} alt={item.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{item.name}</h3>
          <span className={styles.price}>₹{item.price}</span>
        </div>
        <p className={`${styles.description} line-clamp-2`}>{item.description}</p>
        <button className={styles.addButton} aria-label="View Details">
          <Plus size={16} />
        </button>
      </div>
    </motion.div>
  );
}

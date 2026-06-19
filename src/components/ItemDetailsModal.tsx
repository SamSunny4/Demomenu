import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './ItemDetailsModal.module.css';
import { MenuItem } from '../data/menu';

interface Props {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemDetailsModal({ item, onClose }: Props) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className={styles.modal}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.imageContainer}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.imageUrl} alt={item.name} className={styles.image} />
              <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                <X size={24} />
              </button>
            </div>
            
            <div className={styles.content}>
              <div className={styles.header}>
                <h2 className={styles.title}>{item.name}</h2>
                <span className={styles.price}>₹{item.price}</span>
              </div>
              
              <div className={styles.scrollArea}>
                <p className={styles.description}>{item.description}</p>
                
                <div className={styles.ingredientsSection}>
                  <h3 className={styles.sectionTitle}>Crafted With</h3>
                  <ul className={styles.ingredientsList}>
                    {item.ingredients.map((ingredient, idx) => (
                      <li key={idx} className={styles.ingredientItem}>
                        <span className={styles.bullet}>•</span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={styles.footer}>
                <button className={styles.actionButton} onClick={onClose}>
                  Back to Menu
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

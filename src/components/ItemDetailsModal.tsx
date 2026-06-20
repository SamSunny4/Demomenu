'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf, Drumstick } from 'lucide-react';
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
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.modal}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          >
            {/* Drag handle */}
            <div className={styles.dragHandle}>
              <div className={styles.handleBar} />
            </div>

            <div className={styles.imageContainer}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.imageUrl} alt={item.name} className={styles.image} />
              <div className={styles.imageGradient} />
              <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.titleArea}>
                  <div className={styles.badges}>
                    <span className={item.isVeg ? styles.vegBadge : styles.nonVegBadge}>
                      {item.isVeg ? <Leaf size={12} /> : <Drumstick size={12} />}
                      {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    </span>
                    {item.isPopular && (
                      <span className={styles.popularBadge}>★ Bestseller</span>
                    )}
                    {item.isChefSpecial && (
                      <span className={styles.chefBadge}>Chef&apos;s Special</span>
                    )}
                  </div>
                  <h2 className={styles.title}>{item.name}</h2>
                </div>
                <div className={styles.priceTag}>
                  <span className={styles.priceLabel}>Price</span>
                  <span className={styles.price}>₹{item.price}</span>
                </div>
              </div>

              <div className={styles.scrollArea}>
                <div className={styles.descriptionSection}>
                  <div className={styles.quoteDecor}>&ldquo;</div>
                  <p className={styles.description}>{item.description}</p>
                </div>

                <div className={styles.ingredientsSection}>
                  <h3 className={styles.sectionTitle}>Crafted With</h3>
                  <div className={styles.ingredientsGrid}>
                    {item.ingredients.map((ingredient, idx) => (
                      <motion.div
                        key={idx}
                        className={styles.ingredientChip}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        {ingredient}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.footer}>
                <button className={styles.actionButton} onClick={onClose}>
                  ← Back to Menu
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

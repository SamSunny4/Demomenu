import React from 'react';
import styles from './Header.module.css';
import { UtensilsCrossed } from 'lucide-react';

export default function Header() {
  return (
    <header className={`${styles.header} glass-effect`}>
      <div className={styles.logoContainer}>
        <UtensilsCrossed size={28} className={styles.icon} />
        <h1 className={styles.title}>The Grand Menu</h1>
      </div>
      <p className={styles.subtitle}>Savor the extraordinary.</p>
    </header>
  );
}

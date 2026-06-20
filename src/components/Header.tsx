'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import styles from './Header.module.css';

interface Props {
  subtitle?: string;
  onSearchToggle?: () => void;
}

export default function Header({ subtitle, onSearchToggle }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="main-header">
      <div className={styles.inner}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>The Grand</h1>
          <p className={styles.subtext}>An experience beyond the plate</p>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {onSearchToggle && (
          <button 
            className={styles.searchButton} 
            onClick={onSearchToggle} 
            aria-label="Toggle search"
          >
            <Search size={16} />
          </button>
        )}
      </div>
    </header>
  );
}

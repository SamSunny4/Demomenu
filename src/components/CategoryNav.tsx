'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './CategoryNav.module.css';
import { MenuItem } from '../data/menu';

interface Category {
  title: string;
  icon: string;
  items: MenuItem[];
}

interface Props {
  activeCategory: string;
  onCategoryClick: (title: string) => void;
  categories: Category[];
}

export default function CategoryNav({ activeCategory, onCategoryClick, categories }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  // Mirror the same scroll thresholds as the Header (72px → 50px over 0–80px scroll)
  const { scrollY } = useScroll();
  const rawTop = useTransform(scrollY, [0, 80], [72, 50]);
  const top = useSpring(rawTop, { stiffness: 220, damping: 32, mass: 0.8 });

  const handleScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftFade(el.scrollLeft > 8);
    setShowRightFade(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    handleScrollState();
    const el = scrollRef.current;
    el?.addEventListener('scroll', handleScrollState);
    return () => el?.removeEventListener('scroll', handleScrollState);
  }, []);

  // Auto-scroll active button into view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeBtn = container.querySelector(`[data-category="${activeCategory}"]`) as HTMLElement | null;
    if (activeBtn) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offset = btnRect.left - containerRect.left - containerRect.width / 2 + btnRect.width / 2;
      container.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <motion.nav className={styles.navContainer} style={{ top }}>
      {showLeftFade && <div className={styles.fadeLeft} />}
      {showRightFade && <div className={styles.fadeRight} />}
      <div className={styles.scrollWrapper} ref={scrollRef}>
        {categories.map((category) => (
          <button
            key={category.title}
            data-category={category.title}
            className={`${styles.categoryButton} ${
              activeCategory === category.title ? styles.active : ''
            }`}
            onClick={() => onCategoryClick(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

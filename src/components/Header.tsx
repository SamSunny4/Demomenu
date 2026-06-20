'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

interface Props {
  subtitle?: string;
  onSearchToggle?: () => void;
  isSearchOpen?: boolean;
}

export default function Header({ subtitle, onSearchToggle, isSearchOpen }: Props) {
  const { scrollY } = useScroll();

  // Scroll thresholds
  const SCROLL_END = 80;

  // Raw scroll-driven transforms
  const rawHeight     = useTransform(scrollY, [0, SCROLL_END], [72, 50]);
  const rawTitleSize  = useTransform(scrollY, [0, SCROLL_END], [1.75, 1.15]);
  const rawSubOpacity = useTransform(scrollY, [0, 40],         [1, 0]);
  const rawSubHeight  = useTransform(scrollY, [0, 40],         [22, 0]);
  const rawLineScale  = useTransform(scrollY, [0, 40],         [1, 0]);
  const rawLineOpac   = useTransform(scrollY, [0, 40],         [1, 0]);
  const rawShadow     = useTransform(scrollY, [0, SCROLL_END], [0, 0.07]);
  const rawBorder     = useTransform(scrollY, [0, SCROLL_END], [0.06, 0.14]);

  // Spring-smoothed — use these directly as MotionValues in style props
  const height      = useSpring(rawHeight,     { stiffness: 220, damping: 32 });
  const titleSize   = useSpring(rawTitleSize,  { stiffness: 220, damping: 32 });
  const subOpacity  = useSpring(rawSubOpacity, { stiffness: 220, damping: 32 });
  const subHeight   = useSpring(rawSubHeight,  { stiffness: 220, damping: 32 });
  const lineScale   = useSpring(rawLineScale,  { stiffness: 220, damping: 32 });
  const lineOpacity = useSpring(rawLineOpac,   { stiffness: 220, damping: 32 });

  // Derived string MotionValues for CSS properties that need units
  const titleFontSize    = useTransform(titleSize,  (v) => `${v}rem`);
  const boxShadow        = useTransform(rawShadow,  (v) => `0 4px 28px rgba(17,17,17,${v})`);
  const borderColor      = useTransform(rawBorder,  (v) => `rgba(17,17,17,${v})`);

  return (
    <motion.header
      id="main-header"
      className={styles.header}
      style={{ height, boxShadow, borderBottomColor: borderColor }}
    >
      <div className={styles.inner}>
        <div className={styles.titleContainer}>

          <motion.h1
            className={styles.title}
            style={{ fontSize: titleFontSize }}
          >
            The{' '}
            <span className={styles.titleAccent}>Grand</span>
          </motion.h1>

          {/* Subtext fades & collapses as user scrolls */}
          <motion.p
            className={styles.subtext}
            style={{ opacity: subOpacity, height: subHeight }}
          >
            An experience beyond the plate
          </motion.p>

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {/* Decorative accent line — fades out on scroll */}
        <motion.div
          className={styles.accentLine}
          style={{ scaleX: lineScale, opacity: lineOpacity }}
        />

        {onSearchToggle && (
          <button
            className={styles.searchButton}
            onClick={onSearchToggle}
            aria-label="Toggle search"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isSearchOpen ? 'close' : 'search'}
                initial={{ rotate: -80, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                exit={{   rotate:  80,  opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.18, ease: 'easeInOut' }}
                style={{ display: 'flex' }}
              >
                {isSearchOpen ? <X size={17} /> : <Search size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>
        )}
      </div>
    </motion.header>
  );
}

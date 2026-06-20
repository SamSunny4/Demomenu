'use client';

import React, { useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import styles from './Header.module.css';

interface Props {
  subtitle?: string;
  onSearchToggle?: () => void;
  isSearchOpen?: boolean;
}

export default function Header({ subtitle, onSearchToggle, isSearchOpen }: Props) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
      document.documentElement.style.setProperty('--header-height', isScrolled ? '44px' : '72px');
    }
  });

  // Scroll thresholds
  const SCROLL_END = 80;

  /*
   * STUTTER FIX:
   * Instead of animating CSS `height` (layout recalc) and `font-size` (also layout),
   * we animate only GPU-composited properties: `transform` (scaleY, translateY, scale)
   * and `opacity`. A single spring layer is applied — no chaining of MotionValues.
   *
   * Header outer element stays at the max height (72px) via CSS; the inner content
   * slides up via `translateY` so the visible area shrinks without a layout reflow.
   * Title shrinks via `scale` transform (not font-size), keeping paint off the main thread.
   */

  // Raw scroll-driven values (no spring here — spring applied once below)
  const rawSlide      = useTransform(scrollY, [0, SCROLL_END], [0, 5]);    // px downward slide on scroll
  const rawSearchSlide = useTransform(scrollY, [0, SCROLL_END], [0, -3]);    // px upward slide for search icon on scroll
  const rawTitleScale = useTransform(scrollY, [0, SCROLL_END], [1, 0.8]);  // title shrink (0.8 is a 20% shrink)
  const rawSubOpacity = useTransform(scrollY, [0, 40],         [1, 0]);
  const rawSubScale   = useTransform(scrollY, [0, 40],         [1, 0.85]);
  const rawLineScale  = useTransform(scrollY, [0, 40],         [1, 0]);
  const rawLineOpac   = useTransform(scrollY, [0, 40],         [1, 0]);
  const rawShadow     = useTransform(scrollY, [0, SCROLL_END], [0, 0.07]);
  const rawBorder     = useTransform(scrollY, [0, SCROLL_END], [0.06, 0.14]);

  // Single spring pass on composited transforms
  const config = { stiffness: 260, damping: 38, mass: 0.8 };
  const slideY      = useSpring(rawSlide,      config);
  const searchSlideY = useSpring(rawSearchSlide, config);
  const titleScale  = useSpring(rawTitleScale, config);
  const subOpacity  = useSpring(rawSubOpacity, config);
  const subScale    = useSpring(rawSubScale,   config);
  const lineScale   = useSpring(rawLineScale,  config);
  const lineOpacity = useSpring(rawLineOpac,   config);

  // CSS string MotionValues for shadow/border (not layout-affecting)
  const boxShadow   = useTransform(rawShadow, (v) => `0 4px 28px rgba(17,17,17,${v})`);
  const borderColor = useTransform(rawBorder, (v) => `rgba(17,17,17,${v})`);

  return (
    <motion.header
      id="main-header"
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      style={{ boxShadow, borderBottomColor: borderColor }}
    >
      {/* Inner container slides downward on scroll */}
      <motion.div
        className={styles.inner}
        style={{ y: slideY }}
      >
        <div className={styles.titleContainer}>
          {/* Title scales down via transform — no font-size reflow */}
          <div className={styles.titleClip}>
            <motion.h1
              className={styles.title}
              style={{ scale: titleScale, transformOrigin: 'center' }}
            >
              The{' '}
              <span className={styles.titleAccent}>Grand</span>
            </motion.h1>
          </div>

          {/* Subtext fades & shrinks out */}
          <motion.p
            className={styles.subtext}
            style={{ opacity: subOpacity, scale: subScale, transformOrigin: 'center top' }}
          >
            An experience beyond the plate
          </motion.p>

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {/* Decorative accent line */}
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
                style={{ display: 'flex', y: searchSlideY }}
              >
                {isSearchOpen ? <X size={17} /> : <Search size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>
        )}
      </motion.div>
    </motion.header>
  );
}

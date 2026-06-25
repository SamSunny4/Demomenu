'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme, THEMES, isDarkTheme } from './ThemeContext';
import styles from './ThemeSwitcher.module.css';
import { Palette, Check, ChevronUp, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeSwitcher() {
  const { theme, setTheme, autoPlay, toggleAutoPlay } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Animate progress bar when autoPlay is on
  useEffect(() => {
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }

    if (autoPlay) {
      setProgress(0);
      const startTime = Date.now();
      progressRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min((elapsed % 5000) / 5000, 1);
        setProgress(pct);
      }, 30);
    } else {
      setProgress(0);
    }

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [autoPlay, theme.id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.triggerRow}>
        <button
          className={styles.trigger}
          onClick={() => setIsOpen(p => !p)}
          aria-label="Change theme"
          id="theme-switcher-trigger"
        >
          <Palette size={15} />
          <span>Theme</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ display: 'flex' }}
          >
            <ChevronUp size={14} />
          </motion.span>
        </button>

        {/* Auto-play toggle */}
        <button
          className={`${styles.autoPlayBtn} ${autoPlay ? styles.autoPlayActive : ''}`}
          onClick={toggleAutoPlay}
          aria-label={autoPlay ? 'Pause auto-cycle' : 'Play auto-cycle'}
          id="theme-autoplay-toggle"
        >
          {autoPlay ? <Pause size={13} /> : <Play size={13} />}
          <span>{autoPlay ? 'Auto' : 'Auto'}</span>
          {autoPlay && (
            <div className={styles.progressRing}>
              <svg viewBox="0 0 24 24" className={styles.progressSvg}>
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.15"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="var(--accent-color)"
                  strokeWidth="2.5"
                  strokeDasharray={`${progress * 62.83} 62.83`}
                  strokeLinecap="round"
                  transform="rotate(-90 12 12)"
                  className={styles.progressArc}
                />
              </svg>
            </div>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.panelLabel}>Choose a theme</p>
            <div className={styles.grid}>
              {THEMES.map(t => {
                const isActive = t.id === theme.id;
                const dark = isDarkTheme(t);
                return (
                  <button
                    key={t.id}
                    className={`${styles.themeCard} ${isActive ? styles.active : ''}`}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    style={{
                      '--card-bg': t.colors.bgColor,
                      '--card-surface': t.colors.surfaceColor,
                      '--card-accent': t.colors.accentColor,
                      '--card-text': t.colors.textPrimary,
                      '--card-border': t.colors.borderColor,
                    } as React.CSSProperties}
                    aria-label={`Select ${t.name} theme`}
                    id={`theme-option-${t.id}`}
                  >
                    {/* Color preview swatch */}
                    <div className={styles.swatch}>
                      <div
                        className={styles.swatchBg}
                        style={{ background: t.colors.bgColor }}
                      />
                      <div
                        className={styles.swatchSurface}
                        style={{ background: t.colors.surfaceColor }}
                      />
                      <div
                        className={styles.swatchAccent}
                        style={{ background: t.colors.accentColor }}
                      />
                      {isActive && (
                        <div className={styles.swatchCheck}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                      )}
                    </div>

                    <div className={styles.cardMeta}>
                      <span className={styles.cardEmoji}>{t.emoji}</span>
                      <span className={styles.cardName}>{t.name}</span>
                      <span className={styles.cardDesc}>{t.description}</span>
                      <span className={styles.cardFont}>{t.fonts.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

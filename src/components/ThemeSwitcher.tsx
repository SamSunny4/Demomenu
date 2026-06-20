'use client';

import React, { useState } from 'react';
import { useTheme, THEMES, isDarkTheme } from './ThemeContext';
import styles from './ThemeSwitcher.module.css';
import { Palette, Check, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
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

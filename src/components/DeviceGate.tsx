'use client';

import React, { useState, useEffect } from 'react';
import styles from './DeviceGate.module.css';

function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return true; // SSR: assume mobile

  // Check touch capability
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Check user agent
  const ua = navigator.userAgent.toLowerCase();
  const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i;
  const isMobileUA = mobileKeywords.test(ua);

  // Check screen width (tablets count as mobile)
  const isNarrow = window.innerWidth <= 1024;

  // Mobile = has touch AND (mobile UA or narrow screen)
  return hasTouch && (isMobileUA || isNarrow);
}

const FLOATING_EMOJIS = ['🍕', '🍔', '🍣', '🥗', '🍰', '🍜', '🥘', '🍷', '🧁', '🌮', '🍱', '🥐'];

export default function DeviceGate({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [bypassed, setBypassed] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());

    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Still loading (SSR)
  if (isMobile === null) return null;

  // Mobile or user bypassed gate
  if (isMobile || bypassed) return <>{children}</>;

  // Desktop blocker page
  return (
    <div className={styles.gate}>
      {/* Floating food emojis background */}
      <div className={styles.floatingEmojis} aria-hidden="true">
        {FLOATING_EMOJIS.map((emoji, i) => (
          <span
            key={i}
            className={styles.floatingEmoji}
            style={{
              left: `${5 + (i * 8) % 90}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${6 + (i % 4) * 2}s`,
              fontSize: `${1.5 + (i % 3) * 0.8}rem`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className={styles.content}>
        {/* Bouncing phone icon */}
        <div className={styles.phoneContainer}>
          <div className={styles.phoneMockup}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneScreen}>
              <span className={styles.phoneScreenEmoji}>🍽️</span>
              <div className={styles.phoneScreenLines}>
                <div className={styles.phoneLine} />
                <div className={styles.phoneLineShort} />
                <div className={styles.phoneLine} />
              </div>
            </div>
          </div>
          <div className={styles.phoneGlow} />
        </div>

        <h1 className={styles.title}>
          Whoa there, Desktop Diner!
        </h1>

        <p className={styles.subtitle}>
          This menu is crafted for <strong>mobile phones</strong> — scan the QR code on your table for the best experience!
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span>Optimized for touch</span>
          </div>
          <div className={styles.featureItem}>
            <span>Blazing fast on mobile</span>
          </div>
          <div className={styles.featureItem}>
            <span>Stunning mobile themes</span>
          </div>
        </div>

        <button
          className={styles.continueBtn}
          onClick={() => setBypassed(true)}
          id="device-gate-continue"
        >
          Continue anyway →
        </button>

        <p className={styles.hint}>
          Psst… try resizing your browser to mobile width
        </p>
      </div>
    </div>
  );
}

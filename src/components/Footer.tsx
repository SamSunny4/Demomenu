'use client';

import React from 'react';
import { UtensilsCrossed, Phone, MapPin, Clock, Globe, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <UtensilsCrossed size={22} className={styles.brandIcon} />
          <span className={styles.brandName}>The Grand Menu</span>
        </div>

        <p className={styles.powered}>Powered by QR Menu</p>

        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <Phone size={15} className={styles.infoIcon} />
            <span>+91 98765 43210</span>
          </div>
          <div className={styles.infoItem}>
            <MapPin size={15} className={styles.infoIcon} />
            <span>123 Gourmet Street, Chennai</span>
          </div>
          <div className={styles.infoItem}>
            <Clock size={15} className={styles.infoIcon} />
            <span>Open Daily · 11 AM – 11 PM</span>
          </div>
        </div>

        <div className={styles.socials}>
          <a
            href="#"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <Globe size={18} />
          </a>
          <a
            href="#"
            className={styles.socialLink}
            aria-label="Facebook"
          >
            <Heart size={18} />
          </a>
        </div>

        <div className={styles.divider} />

        <p className={styles.copyright}>
          © 2024 The Grand Menu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

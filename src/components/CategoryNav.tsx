import React, { useEffect, useState } from 'react';
import styles from './CategoryNav.module.css';
import { menuData } from '../data/menu';

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].title);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for the sticky header
      
      for (const category of menuData) {
        const element = document.getElementById(category.title.replace(/\s+/g, '-').toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.title);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (title: string) => {
    const id = title.replace(/\s+/g, '-').toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      // Offset by roughly the header height + nav height
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.scrollWrapper}>
        {menuData.map((category) => (
          <button
            key={category.title}
            className={`${styles.categoryButton} ${
              activeCategory === category.title ? styles.active : ''
            }`}
            onClick={() => scrollToCategory(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </nav>
  );
}

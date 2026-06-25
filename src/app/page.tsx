'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import SearchBar from '../components/SearchBar';
import MenuCategory from '../components/MenuCategory';
import ItemDetailsModal from '../components/ItemDetailsModal';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { menuData, MenuItem } from '../data/menu';
import styles from './page.module.css';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type FilterType = 'Best Sellers' | 'Recommended' | 'New' | 'Seasonal' | null;

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>(null);
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);


  // Filter menu by search and quick filters
  const filteredMenu = useMemo(() => {
    let filtered = menuData;

    // Apply quick filters
    if (activeFilter) {
      filtered = filtered.map(cat => {
        let items = cat.items;
        if (activeFilter === 'Best Sellers') items = items.filter(i => i.isPopular);
        if (activeFilter === 'Recommended') items = items.filter(i => i.isChefSpecial);
        if (activeFilter === 'New') items = items.filter(i => i.tag === 'New');
        if (activeFilter === 'Seasonal') items = items.filter(i => i.tag === 'Seasonal');
        return { ...cat, items };
      });
    }

    // Apply search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.ingredients.some((i) => i.toLowerCase().includes(q))
        ),
      }));
    }

    return filtered.filter((cat) => cat.items.length > 0);
  }, [searchQuery, activeFilter]);

  // Track active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const category of filteredMenu) {
        const el = document.getElementById(
          category.title.replace(/\s+/g, '-').toLowerCase()
        );
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveCategory(category.title);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredMenu]);

  const handleCategoryClick = (title: string) => {
    const id = title.replace(/\s+/g, '-').toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(prev => prev === filter ? null : filter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalItems = menuData.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className={styles.container}>
      <Header
        onSearchToggle={() => setIsSearchOpen(!isSearchOpen)}
        isSearchOpen={isSearchOpen}
      />

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.searchSectionWrapper}
          >
            <div className={styles.searchSection}>
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <main className={styles.main}>
        <div className={styles.statsBar}>
          <span>{menuData.length} Categories</span>
          <span className={styles.dot}>•</span>
          <span>{totalItems} Dishes</span>
        </div>

        {/* Quick Filters — includes "All" to reset */}
        <div className={styles.quickFiltersContainer}>
          <button
            className={`${styles.quickFilterBtn} ${activeFilter === null ? styles.activeFilter : ''}`}
            onClick={() => handleFilterClick(null)}
          >
            All
          </button>
          <button
            className={`${styles.quickFilterBtn} ${activeFilter === 'Best Sellers' ? styles.activeFilter : ''}`}
            onClick={() => handleFilterClick('Best Sellers')}
          >
            Best Sellers
          </button>
          <button
            className={`${styles.quickFilterBtn} ${activeFilter === 'Recommended' ? styles.activeFilter : ''}`}
            onClick={() => handleFilterClick('Recommended')}
          >
            Recommended
          </button>
          <button
            className={`${styles.quickFilterBtn} ${activeFilter === 'New' ? styles.activeFilter : ''}`}
            onClick={() => handleFilterClick('New')}
          >
            New Arrivals
          </button>
          <button
            className={`${styles.quickFilterBtn} ${activeFilter === 'Seasonal' ? styles.activeFilter : ''}`}
            onClick={() => handleFilterClick('Seasonal')}
          >
            Seasonal
          </button>
        </div>

        {/* Sticky Category Nav */}
        <CategoryNav
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
          categories={filteredMenu}
        />

        {/* Menu Categories */}
        {filteredMenu.map((category) => (
          <MenuCategory
            key={category.title}
            category={category}
            onItemClick={setSelectedItem}
          />
        ))}

        {filteredMenu.length === 0 && (
          <div className={styles.emptyState}>
            <Search size={32} className={styles.emptyIcon} />
            <p className={styles.emptyTitle}>No dishes found</p>
            <p className={styles.emptyText}>
              Try searching or clearing filters
            </p>
            {activeFilter && (
              <button
                className={styles.clearFilterBtn}
                onClick={() => setActiveFilter(null)}
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </main>

      <Footer />

      {/* Bottom Gaussian blur overlay */}
      <div className={styles.bottomBlur} />

      <ScrollToTop />
      <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

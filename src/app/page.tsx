'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import MenuCategory from '../components/MenuCategory';
import ItemDetailsModal from '../components/ItemDetailsModal';
import { menuData, MenuItem } from '../data/menu';
import styles from './page.module.css';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        {menuData.map((category) => (
          <MenuCategory 
            key={category.title} 
            category={category} 
            onItemClick={handleItemClick} 
          />
        ))}
      </main>

      <ItemDetailsModal item={selectedItem} onClose={closeModal} />
    </div>
  );
}

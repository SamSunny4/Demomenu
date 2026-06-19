import React from 'react';
import styles from './MenuCategory.module.css';
import { MenuCategory as MenuCategoryType, MenuItem } from '../data/menu';
import MenuItemCard from './MenuItemCard';

interface Props {
  category: MenuCategoryType;
  onItemClick: (item: MenuItem) => void;
}

export default function MenuCategory({ category, onItemClick }: Props) {
  return (
    <section className={styles.section} id={category.title.replace(/\s+/g, '-').toLowerCase()}>
      <div className={styles.header}>
        <h2 className={styles.title}>{category.title}</h2>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.grid}>
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} onClick={onItemClick} />
        ))}
      </div>
    </section>
  );
}

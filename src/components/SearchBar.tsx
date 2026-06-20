'use client';

import React, { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      onSearch(value);
    },
    [onSearch]
  );

  const handleClear = useCallback(() => {
    setQuery('');
    onSearch('');
  }, [onSearch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>
          <Search size={18} />
        </span>
        <input
          type="text"
          className={styles.input}
          placeholder="Search dishes, ingredients..."
          value={query}
          onChange={handleChange}
          aria-label="Search menu items"
        />
        {query.length > 0 && (
          <button
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear search"
            type="button"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

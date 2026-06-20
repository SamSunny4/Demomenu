'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export interface Theme {
  id: string;
  name: string;
  emoji: string;
  description: string;
  fonts: {
    heading: string;
    body: string;
    label: string; // display label for the font pair
  };
  colors: {
    bgColor: string;
    bgColorRgb: string;
    surfaceColor: string;
    surfaceHover: string;
    surfaceElevated: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    accentColor: string;
    accentLight: string;
    accentDark: string;
    borderColor: string;
    borderSubtle: string;
  };
}

export const THEMES: Theme[] = [
  {
    id: 'ivory-gold',
    name: 'Ivory & Gold',
    emoji: '🥂',
    description: 'Classic fine dining',
    fonts: { heading: 'cormorant', body: 'inter', label: 'Cormorant + Inter' },
    colors: {
      bgColor: '#F8F4EC',
      bgColorRgb: '248, 244, 236',
      surfaceColor: '#F4EFE6',
      surfaceHover: '#EFE7DA',
      surfaceElevated: '#ffffff',
      textPrimary: '#111111',
      textSecondary: '#222222',
      textMuted: '#666666',
      accentColor: '#B68D40',
      accentLight: '#CBA55D',
      accentDark: '#A97C50',
      borderColor: '#E2D9C8',
      borderSubtle: 'rgba(17,17,17,0.06)',
    },
  },
  {
    id: 'midnight-ember',
    name: 'Midnight Ember',
    emoji: '🌙',
    description: 'Dark & moody luxury',
    fonts: { heading: 'playfair', body: 'inter', label: 'Playfair + Inter' },
    colors: {
      bgColor: '#0A0A0A',
      bgColorRgb: '10, 10, 10',
      surfaceColor: '#141414',
      surfaceHover: '#1F1F1F',
      surfaceElevated: '#1F1F1F',
      textPrimary: '#F5F5F5',
      textSecondary: '#A3A3A3',
      textMuted: '#737373',
      accentColor: '#D4AF37',
      accentLight: '#F3E5AB',
      accentDark: '#998022',
      borderColor: '#262626',
      borderSubtle: 'rgba(255,255,255,0.05)',
    },
  },
  {
    id: 'sage-linen',
    name: 'Sage & Linen',
    emoji: '🌿',
    description: 'Earthy farm-to-table',
    fonts: { heading: 'cormorant', body: 'inter', label: 'Cormorant + Inter' },
    colors: {
      bgColor: '#F0EFEA',
      bgColorRgb: '240, 239, 234',
      surfaceColor: '#E6E5DF',
      surfaceHover: '#DBD9D2',
      surfaceElevated: '#FFFFFF',
      textPrimary: '#2B3026',
      textSecondary: '#4A5243',
      textMuted: '#818A77',
      accentColor: '#4A7055',
      accentLight: '#6B9678',
      accentDark: '#2D4A35',
      borderColor: '#D1CFC7',
      borderSubtle: 'rgba(43,48,38,0.06)',
    },
  },
  {
    id: 'rose-blush',
    name: 'Rose Blush',
    emoji: '🌸',
    description: 'Romantic brasserie',
    fonts: { heading: 'playfair', body: 'inter', label: 'Playfair + Inter' },
    colors: {
      bgColor: '#FDF8F7',
      bgColorRgb: '253, 248, 247',
      surfaceColor: '#F5EBE9',
      surfaceHover: '#EDDCD9',
      surfaceElevated: '#FFFFFF',
      textPrimary: '#2B1A18',
      textSecondary: '#5C3833',
      textMuted: '#946B65',
      accentColor: '#B85C5C',
      accentLight: '#D48686',
      accentDark: '#8A3B3B',
      borderColor: '#E8D3D0',
      borderSubtle: 'rgba(43,26,24,0.05)',
    },
  },
  {
    id: 'obsidian-silver',
    name: 'Obsidian & Silver',
    emoji: '🖤',
    description: 'Ultra modern minimal',
    fonts: { heading: 'playfair', body: 'inter', label: 'Playfair + Inter' },
    colors: {
      bgColor: '#050505',
      bgColorRgb: '5, 5, 5',
      surfaceColor: '#121212',
      surfaceHover: '#1E1E1E',
      surfaceElevated: '#1A1A1A',
      textPrimary: '#FFFFFF',
      textSecondary: '#A0A0A0',
      textMuted: '#666666',
      accentColor: '#E0E0E0',
      accentLight: '#FFFFFF',
      accentDark: '#999999',
      borderColor: '#222222',
      borderSubtle: 'rgba(255,255,255,0.04)',
    },
  },
  {
    id: 'terracotta-sun',
    name: 'Terracotta Sun',
    emoji: '🏺',
    description: 'Mediterranean warmth',
    fonts: { heading: 'cormorant', body: 'inter', label: 'Cormorant + Inter' },
    colors: {
      bgColor: '#FAF5F0',
      bgColorRgb: '250, 245, 240',
      surfaceColor: '#EEDFCC',
      surfaceHover: '#E4CCB3',
      surfaceElevated: '#FFFFFF',
      textPrimary: '#362214',
      textSecondary: '#664229',
      textMuted: '#996C4D',
      accentColor: '#D35400',
      accentLight: '#ED7D31',
      accentDark: '#A04000',
      borderColor: '#DABBA1',
      borderSubtle: 'rgba(54,34,20,0.06)',
    },
  },
  {
    id: 'electric-indigo',
    name: 'Electric Indigo',
    emoji: '⚡',
    description: 'Vibrant electro-luxe',
    fonts: { heading: 'syne', body: 'inter', label: 'Syne + Inter' },
    colors: {
      bgColor: '#0C081A',
      bgColorRgb: '12, 8, 26',
      surfaceColor: '#150F2B',
      surfaceHover: '#1D143D',
      surfaceElevated: '#1D143D',
      textPrimary: '#FFFFFF',
      textSecondary: '#B4AEC6',
      textMuted: '#756C8C',
      accentColor: '#D3FF52',
      accentLight: '#E6FF9E',
      accentDark: '#AACC1D',
      borderColor: '#231C3D',
      borderSubtle: 'rgba(255,255,255,0.05)',
    },
  },
  {
    id: 'crimson-velvet',
    name: 'Crimson Velvet',
    emoji: '🍷',
    description: 'High-fashion luxury',
    fonts: { heading: 'cinzel', body: 'inter', label: 'Cinzel + Inter' },
    colors: {
      bgColor: '#FDFBFA',
      bgColorRgb: '253, 251, 250',
      surfaceColor: '#F5EFEB',
      surfaceHover: '#EBE0DA',
      surfaceElevated: '#FFFFFF',
      textPrimary: '#1E0A0A',
      textSecondary: '#543D3D',
      textMuted: '#8C7272',
      accentColor: '#A62B2B',
      accentLight: '#C84E4E',
      accentDark: '#7D1B1B',
      borderColor: '#E5D5CD',
      borderSubtle: 'rgba(30,10,10,0.05)',
    },
  },
  {
    id: 'retro-tangerine',
    name: 'Retro Tangerine',
    emoji: '🍊',
    description: 'Bold Bauhaus groove',
    fonts: { heading: 'space', body: 'inter', label: 'Space + Inter' },
    colors: {
      bgColor: '#1F140E',
      bgColorRgb: '31, 20, 14',
      surfaceColor: '#2B1D16',
      surfaceHover: '#38271E',
      surfaceElevated: '#2B1D16',
      textPrimary: '#FFEFEB',
      textSecondary: '#D4BFA8',
      textMuted: '#9E8672',
      accentColor: '#FF6B35',
      accentLight: '#FFA482',
      accentDark: '#CC4918',
      borderColor: '#38271E',
      borderSubtle: 'rgba(255,239,235,0.05)',
    },
  },
];


interface ThemeContextValue {
  theme: Theme;
  setTheme: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: THEMES[0],
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(THEMES[0]);

  // Apply CSS variables to :root
  const applyTheme = useCallback((t: Theme) => {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', t.colors.bgColor);
    root.style.setProperty('--bg-color-rgb', t.colors.bgColorRgb);
    root.style.setProperty('--surface-color', t.colors.surfaceColor);
    root.style.setProperty('--surface-hover', t.colors.surfaceHover);
    root.style.setProperty('--surface-elevated', t.colors.surfaceElevated);
    root.style.setProperty('--text-primary', t.colors.textPrimary);
    root.style.setProperty('--text-secondary', t.colors.textSecondary);
    root.style.setProperty('--text-muted', t.colors.textMuted);
    root.style.setProperty('--accent-color', t.colors.accentColor);
    root.style.setProperty('--accent-light', t.colors.accentLight);
    root.style.setProperty('--accent-dark', t.colors.accentDark);
    root.style.setProperty('--border-color', t.colors.borderColor);
    root.style.setProperty('--border-subtle', t.colors.borderSubtle);

    // Apply font variables
    const fontMap: Record<string, string> = {
      cormorant: 'var(--font-cormorant), var(--font-playfair), serif',
      playfair: 'var(--font-playfair), var(--font-cormorant), serif',
      syne: 'var(--font-syne), var(--font-inter), sans-serif',
      cinzel: 'var(--font-cinzel), serif',
      space: 'var(--font-space), var(--font-inter), sans-serif',
    };
    root.style.setProperty('--font-heading', fontMap[t.fonts.heading] || fontMap.cormorant);

    // Update header background for dark themes
    const isDark = isDarkTheme(t);
    root.style.setProperty(
      '--header-bg',
      isDark
        ? `rgba(${t.colors.bgColorRgb}, 0.95)`
        : `rgba(${t.colors.bgColorRgb}, 0.95)`
    );
  }, []);

  const setTheme = useCallback((id: string) => {
    const found = THEMES.find(t => t.id === id);
    if (!found) return;
    setThemeState(found);
    applyTheme(found);
    localStorage.setItem('menu-theme', id);
  }, [applyTheme]);

  // Restore persisted theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('menu-theme');
    const found = THEMES.find(t => t.id === saved);
    if (found) {
      setThemeState(found);
      applyTheme(found);
    } else {
      applyTheme(THEMES[0]);
    }
  }, [applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function isDarkTheme(theme: Theme): boolean {
  // Parse the bg color to determine luminance
  const hex = theme.colors.bgColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

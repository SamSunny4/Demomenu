'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';

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
  // ── NEW THEMES ──
  {
    id: 'neon-pub',
    name: 'Neon Pub',
    emoji: '🍺',
    description: 'Dark bar neon glow',
    fonts: { heading: 'syne', body: 'inter', label: 'Syne + Inter' },
    colors: {
      bgColor: '#0D0D0D',
      bgColorRgb: '13, 13, 13',
      surfaceColor: '#1A1A1A',
      surfaceHover: '#252525',
      surfaceElevated: '#1E1E1E',
      textPrimary: '#F0F0F0',
      textSecondary: '#B8B8B8',
      textMuted: '#707070',
      accentColor: '#FF2D78',
      accentLight: '#FF6BA0',
      accentDark: '#CC1A5E',
      borderColor: '#2A2A2A',
      borderSubtle: 'rgba(255,45,120,0.08)',
    },
  },
  {
    id: 'arabian-nights',
    name: 'Arabian Nights',
    emoji: '🕌',
    description: 'Royal Middle-Eastern',
    fonts: { heading: 'cinzel', body: 'inter', label: 'Cinzel + Inter' },
    colors: {
      bgColor: '#0B1426',
      bgColorRgb: '11, 20, 38',
      surfaceColor: '#122040',
      surfaceHover: '#1A2D55',
      surfaceElevated: '#152647',
      textPrimary: '#F5ECD7',
      textSecondary: '#C4A96D',
      textMuted: '#7A6B4E',
      accentColor: '#E8A838',
      accentLight: '#F2C96B',
      accentDark: '#B8841C',
      borderColor: '#1E3460',
      borderSubtle: 'rgba(232,168,56,0.08)',
    },
  },
  {
    id: 'imperial-dynasty',
    name: 'Imperial Dynasty',
    emoji: '🏮',
    description: 'Chinese palace grandeur',
    fonts: { heading: 'playfair', body: 'inter', label: 'Playfair + Inter' },
    colors: {
      bgColor: '#1A0A0A',
      bgColorRgb: '26, 10, 10',
      surfaceColor: '#2A1212',
      surfaceHover: '#3A1A1A',
      surfaceElevated: '#2E1515',
      textPrimary: '#F5E6D0',
      textSecondary: '#C8A882',
      textMuted: '#8C6E52',
      accentColor: '#D4A017',
      accentLight: '#F0C850',
      accentDark: '#A67D0A',
      borderColor: '#3E1E1E',
      borderSubtle: 'rgba(212,160,23,0.08)',
    },
  },
];


interface ThemeContextValue {
  theme: Theme;
  themeIndex: number;
  setTheme: (id: string) => void;
  autoPlay: boolean;
  toggleAutoPlay: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: THEMES[0],
  themeIndex: 0,
  setTheme: () => {},
  autoPlay: true,
  toggleAutoPlay: () => {},
});

/**
 * Apply CSS custom properties from a Theme onto :root.
 * Used for both the "live" variables and the "next" overlay variables.
 */
function setThemeVars(t: Theme, prefix = '') {
  const root = document.documentElement;
  const p = prefix; // e.g. '' or '--next-'
  root.style.setProperty(`${p}--bg-color`, t.colors.bgColor);
  root.style.setProperty(`${p}--bg-color-rgb`, t.colors.bgColorRgb);
  root.style.setProperty(`${p}--surface-color`, t.colors.surfaceColor);
  root.style.setProperty(`${p}--surface-hover`, t.colors.surfaceHover);
  root.style.setProperty(`${p}--surface-elevated`, t.colors.surfaceElevated);
  root.style.setProperty(`${p}--text-primary`, t.colors.textPrimary);
  root.style.setProperty(`${p}--text-secondary`, t.colors.textSecondary);
  root.style.setProperty(`${p}--text-muted`, t.colors.textMuted);
  root.style.setProperty(`${p}--accent-color`, t.colors.accentColor);
  root.style.setProperty(`${p}--accent-light`, t.colors.accentLight);
  root.style.setProperty(`${p}--accent-dark`, t.colors.accentDark);
  root.style.setProperty(`${p}--border-color`, t.colors.borderColor);
  root.style.setProperty(`${p}--border-subtle`, t.colors.borderSubtle);

  // Apply font heading
  const fontMap: Record<string, string> = {
    cormorant: 'var(--font-cormorant), var(--font-playfair), serif',
    playfair: 'var(--font-playfair), var(--font-cormorant), serif',
    syne: 'var(--font-syne), var(--font-inter), sans-serif',
    cinzel: 'var(--font-cinzel), serif',
    space: 'var(--font-space), var(--font-inter), sans-serif',
  };

  if (!prefix) {
    root.style.setProperty('--font-heading', fontMap[t.fonts.heading] || fontMap.cormorant);
    root.style.setProperty('--header-bg', `rgba(${t.colors.bgColorRgb}, 0.95)`);
  }
}



export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeIndex, setThemeIndex] = useState(0);
  const [theme, setThemeState] = useState<Theme>(THEMES[0]);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const applyThemeVars = useCallback((nextTheme: Theme, nextIndex: number) => {
    setThemeState(nextTheme);
    setThemeIndex(nextIndex);
    setThemeVars(nextTheme);
  }, []);

  // Set theme by ID (manual selection — pauses auto-play)
  const setTheme = useCallback((id: string) => {
    const idx = THEMES.findIndex(t => t.id === id);
    if (idx === -1) return;
    applyThemeVars(THEMES[idx], idx);
    setAutoPlay(false);
    localStorage.setItem('menu-theme', id);
  }, [applyThemeVars]);

  const toggleAutoPlay = useCallback(() => {
    setAutoPlay(prev => !prev);
  }, []);

  // Auto-cycle interval
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setThemeIndex(prev => {
          const next = (prev + 1) % THEMES.length;
          applyThemeVars(THEMES[next], next);
          return next; 
        });
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, applyThemeVars]);

  // Restore persisted theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('menu-theme');
    const idx = THEMES.findIndex(t => t.id === saved);
    if (idx !== -1) {
      setThemeIndex(idx);
      setThemeState(THEMES[idx]);
      setThemeVars(THEMES[idx]);
    } else {
      setThemeVars(THEMES[0]);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeIndex, setTheme, autoPlay, toggleAutoPlay }}>
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

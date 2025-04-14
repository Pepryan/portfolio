"use client";
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Safely access localStorage (only in browser)
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true';
      setDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
    setMounted(true);
  }, []);

  const value = useMemo(() => ({
    darkMode,
    toggleDarkMode: () => {
      const newMode = !darkMode;
      setDarkMode(newMode);
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', String(newMode));
      }
      document.documentElement.classList.toggle('dark', newMode);
    }
  }), [darkMode]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
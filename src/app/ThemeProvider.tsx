'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeContextType } from '@/types';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}


export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      
      if (storedTheme) {
        setTheme(storedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        setTheme('light');
        localStorage.setItem('theme', 'light');
      }
    } catch(e) {
      console.error("Error setting initial theme:", e);
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      console.log("Applied dark theme");
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      console.log("Applied light theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Only provide context when theme is initialized
  const contextValue: ThemeContextType = {
    theme: theme || 'light', // Fallback to light if null
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
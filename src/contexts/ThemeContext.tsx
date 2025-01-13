import React, { createContext, useContext, useEffect } from 'react';

type ThemeContextType = {
  isDarkMode: true;
  toggleDarkMode: () => void; // Kept for API compatibility
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always dark mode
  const isDarkMode = true;

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // No-op function for API compatibility
  const toggleDarkMode = () => {};

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
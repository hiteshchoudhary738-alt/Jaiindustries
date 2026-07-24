import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('solar');

  useEffect(() => {
    const body = document.body;
    if (theme === 'torch') {
      body.classList.remove('theme-solar');
      body.classList.add('theme-torch');
    } else {
      body.classList.remove('theme-torch');
      body.classList.add('theme-solar');
    }
  }, [theme]);

  const toggleTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

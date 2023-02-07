import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js';

export const ThemeUseContext = React.createContext();

export default function ThemeContent(props) {
  const [theme, setTheme] = useState();

  const changeTheme = (msg, type = 'auto') => {
    if (type === 'auto') {
      localStorage.removeItem('theme');
      setTheme('');
    } else {
      localStorage.theme = type;
      setTheme(type);
    }

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  PubSub.subscribe('theme', changeTheme);

  useEffect(() => {
    setTheme(localStorage.theme);
  }, []);

  return <ThemeUseContext.Provider value={{ theme }}>{props.children}</ThemeUseContext.Provider>;
}

import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Header from '../components/Header';
import ThemeContent from '../components/ThemeContent';

export default function Home() {
  useEffect(() => {
    const options = {
      strings: ['陌生人,欢迎你'],
      typeSpeed: 60,
    };

    const typed = new Typed('.typed-element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-full dark:bg-black dark:text-white">
      <ThemeContent>
        <Header />
      </ThemeContent>

      <div>
        <span className="typed-element text-2xl"></span>
      </div>
    </div>
  );
}

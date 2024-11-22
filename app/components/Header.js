"use client";

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiHome } from 'react-icons/fi';
import Link from 'next/link';

export default function Header({ setActiveSection }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <button
            onClick={() => setActiveSection('hero')}
            className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FiHome className="w-5 h-5" />
            <span className="font-bold">FR</span>
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? 
                <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : 
                <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              }
            </button>
            <Link 
              href="/blog" 
              className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

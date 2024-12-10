"use client";

import { useTheme } from '../context/ThemeContext';
import { FiSun, FiHome,FiMoon, FiSearch, FiArchive } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';

export default function Header({ showSearch = false, onSearch }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6">
          <Link
            href="/"
            className="font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center gap-2"
          >
            <FiHome className="w-5 h-5" />
            <span className="font-bold hidden sm:inline">FR</span>
          </Link>

          <nav className="flex items-center gap-4">
            {showSearch && (
              <div className="relative">
                {isSearchOpen ? (
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-48 px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 
                    text-sm border border-neutral-200 dark:border-neutral-700
                    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-300"
                    onChange={(e) => onSearch(e.target.value)}
                    autoFocus
                  />
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 
                    dark:hover:text-neutral-200 transition-colors"
                    aria-label="Search"
                  >
                    <FiSearch className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
            
            <Link 
              href="/blog" 
              className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700
              text-neutral-100 text-sm transition-colors"
            >
              Blog
            </Link>
            
            <Link
              href="/blog/archive"
              className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 
              dark:hover:text-neutral-200 transition-colors"
              aria-label="Archive"
            >
              <FiArchive className="w-4 h-4" />
            </Link>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 
              dark:hover:text-neutral-200 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

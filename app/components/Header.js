"use client";

import { useTheme } from '../context/ThemeContext';
import { FiSun, FiHome, FiMoon, FiSearch, FiArchive, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header({ showSearch = false, onSearch }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle ESC key to close search
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 
              dark:hover:text-neutral-200 transition-colors flex items-center gap-2"
          >
            <FiHome className="w-5 h-5" />
            <span className="font-bold hidden sm:inline">FR</span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4">
            {showSearch && (
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  data-search-trigger
                  className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 
                    dark:hover:text-neutral-200 transition-colors"
                  aria-label="Search posts"
                >
                  <FiSearch className="w-4 h-4" />
                </button>

                {/* Search Modal */}
                {isSearchOpen && (
                  <>
                    {/* Mobile Search */}
                    <div className="sm:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
                      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-800 p-4 
                        border-b border-neutral-200 dark:border-neutral-700">
                        <div className="relative">
                          <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search posts..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full pl-8 pr-8 py-1.5 bg-neutral-100 dark:bg-neutral-700
                              rounded-md text-neutral-900 dark:text-neutral-100
                              placeholder-neutral-500 dark:placeholder-neutral-400
                              focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <FiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 
                            text-neutral-400 dark:text-neutral-500" />
                          <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5
                              hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full"
                          >
                            <FiX className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden sm:block absolute right-0 mt-2 w-72
                      bg-white dark:bg-neutral-800 rounded-lg shadow-lg 
                      border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                    >
                      <div className="p-3 border-b border-neutral-200 dark:border-neutral-700">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search posts..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full pl-8 pr-8 py-1.5 bg-neutral-100 dark:bg-neutral-700
                              rounded-md text-neutral-900 dark:text-neutral-100
                              placeholder-neutral-500 dark:placeholder-neutral-400
                              focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <FiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 
                            text-neutral-400 dark:text-neutral-500" />
                          <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5
                              hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full"
                          >
                            <FiX className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                          </button>
                        </div>
                      </div>
                      <div className="p-2 text-xs text-neutral-500 dark:text-neutral-400">
                        <kbd className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded">ESC</kbd>
                        {' '}to close
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
            
            <Link 
              href="/blog" 
              className="px-2 sm:px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700
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

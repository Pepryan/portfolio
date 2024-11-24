"use client";

import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiHome, FiSearch, FiArchive, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function Header({ setActiveSection, showSearch, onSearch, isPost }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FiHome className="w-5 h-5" />
                <span className="font-bold hidden sm:inline">FR</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="pl-8 pr-2 py-1 sm:py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white 
                    w-32 sm:w-64 text-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <FiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            )}
            
            <nav className="flex items-center gap-2 sm:gap-4">
              {!isPost && (
                <>
                  <Link 
                    href="/blog" 
                    className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <span> Blog  </span>
                  </Link>
                  <Link 
                    href="/blog/archive" 
                    className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <FiArchive className="w-4 h-4" />
                    <span>Archive</span>
                  </Link>
                </>
              )}
              {isPost && (
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <FiArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </Link>
              )}
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
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
